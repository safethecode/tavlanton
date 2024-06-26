'use client';

import { useRouter } from 'next/navigation';

import {
  Badge,
  Button,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/app/ui';

import { useEffect, useRef, useState } from 'react';
import { supabase, supabaseTableName } from '@/utils';
import axios from 'axios';
import { toast } from 'sonner';
import JSConfetti from 'js-confetti';
import { ColorRing } from 'react-loader-spinner';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

const LeaderStampPage = () => {
  const router = useRouter();

  const confettiRef = useRef<JSConfetti>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [pointsType, setPointsType] = useState<any[]>([
    {
      id: 0,
      point_type_name: '',
      point: 0,
      selected: false,
    },
  ]);

  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [duplicateUserInfo, setDuplicateUserInfo] = useState<any[]>([]);

  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState<boolean>(false);
  const [isDuplicateAlertDialogOpen, setIsDuplicateAlertDialogOpen] =
    useState<boolean>(false);

  const handlePhoneNumber = (number: string) => {
    if (phoneNumber.length < 4) {
      setPhoneNumber((prev) => prev + number);
    }
  };

  const handleStamp = async () => {
    setLoading(true);
    if (phoneNumber.length < 4) {
      toast.error('전화번호 뒷자리를 모두 입력해주세요.', {
        position: 'bottom-left',
      });
      setLoading(false);
      return;
    }
    const getPhoneNumber = async () => {
      setPhoneNumber('');
      setLoading(false);
      await axios
        .get(`/api/users/${phoneNumber}`)
        .then((res) => {
          if (res.data.data.length === 1) {
            axios
              .put('/api/stamp', {
                id: res.data.data[0].id,
                point: res.data.data[0].point + pointsType[0].point,
                pointTypeId: pointsType[0].id,
              })
              .then(() => {});
            confettiRef.current?.addConfetti({
              emojis: ['😘', '🥰', '🎁', '🪙', '🎉'],
              emojiSize: 200,
              confettiNumber: 30,
            });
            toast.success('정상적으로 적립되었어요! 즐거운 예배 되셔요 🙌', {
              position: 'bottom-left',
            });
          } else if (res.data.data.length > 1) {
            setDuplicateUserInfo(res.data.data);
            setIsDuplicateAlertDialogOpen(true);
          }
        })
        .catch(() => {
          toast.error('해당 전화번호로 가입된 사용자가 없습니다.', {
            position: 'bottom-left',
          });
        });
    };

    getPhoneNumber();
  };

  const handleBack = () => {
    router.back();
  };

  useEffect(() => {
    const getPointsType = async () => {
      const { data: pointsType, error } = await supabase
        .from(supabaseTableName('points_type'))
        .select('*');

      if (error) {
        throw new Error(error.message);
      }

      setPointsType(
        pointsType.map((pointType) => {
          if (pointType) {
            return {
              ...pointType,
              selected: true,
            };
          }
          return {
            ...pointType,
            selected: false,
          };
        }),
      );
    };

    getPointsType();
  }, []);

  useEffect(() => {
    (confettiRef.current as JSConfetti) = new JSConfetti();
  }, []);

  const district = {
    '34f4478d-bb51-41a9-80e1-d943aa4fd133': '김혜정',
    'eee37d0a-8c7a-4fdd-9c64-459adcb461a0': '김민서',
    '3515eb48-6e0b-48db-9bea-ad9c37c16668': '맹승호',
    '7e80b530-bafa-40df-bcaa-dda12ae71abb': '천승희',
    'fe8eb020-9396-4195-9676-eae91628d78c': '차용준',
    '930d8fcb-3e5e-46ce-af7b-980476cd19da': '차한나',
  } as any;

  return (
    <div className="w-full h-full flex flex-col">
      <header className="flex items-center justify-center p-6 bg-white border-b border-solid border-gray-200">
        <p className="text-xl text-gray-500 max-sm:text-lg">
          전화번호 뒷자리를 눌러주세요.
        </p>
        <Button
          variant="secondary"
          className="ml-4 max-sm:p-2"
          onClick={handleBack}
        >
          <span className="max-sm:hidden">뒤로가기</span>
          <ArrowLeftIcon className="w-6 h-6 text-gray-500 max-sm:block" />
        </Button>
      </header>
      <div className="flex max-sm:flex-col">
        <section className="flex flex-col w-1/2 h-[calc(100vh-181px)] p-8 max-sm:w-full max-sm:h-fit max-sm:border-solid max-sm:border-b max-sm:border-gray-200">
          <Card className="w-full">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CardTitle>{pointsType[0].point_type_name}</CardTitle>
                <AlertDialog
                  open={isAlertDialogOpen}
                  onOpenChange={(isOpen) => setIsAlertDialogOpen(isOpen)}
                >
                  <AlertDialogTrigger asChild>
                    <Badge variant="secondary" className="cursor-pointer">
                      변경
                    </Badge>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>적립 달란트 타입 변경</AlertDialogTitle>
                    </AlertDialogHeader>
                    {pointsType.map((pointType) => (
                      <div
                        key={pointType.id}
                        className="flex flex-row items-center justify-between w-full p-2 hover:bg-gray-100 cursor-pointer rounded-md"
                        style={{
                          backgroundColor:
                            pointType.id === pointsType[0].id ? '#eff6ff' : '',
                        }}
                        onClick={() => {
                          setIsAlertDialogOpen(false);
                          setPointsType((prevPointsType) => [
                            {
                              ...pointType,
                              selected: true,
                            },
                            ...prevPointsType
                              .filter((type) => type.id !== pointType.id)
                              .map((type) => ({
                                ...type,
                                selected: false,
                              })),
                          ]);
                        }}
                      >
                        <p
                          className="text-lg text-gray-500"
                          style={{
                            color:
                              pointType.id === pointsType[0].id
                                ? '#3b82f6'
                                : '',
                            fontWeight:
                              pointType.id === pointsType[0].id ? 700 : 400,
                          }}
                        >
                          {pointType.point_type_name}
                        </p>
                        <p
                          className="text-lg text-gray-500"
                          style={{
                            color:
                              pointType.id === pointsType[0].id
                                ? '#3b82f6'
                                : '',
                            fontWeight:
                              pointType.id === pointsType[0].id ? 700 : 400,
                          }}
                        >
                          {pointType.point}P
                        </p>
                      </div>
                    ))}
                    <AlertDialogFooter>
                      <AlertDialogCancel>취소</AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              <CardDescription>
                적립되는 달란트는 {pointsType[0].point}P 입니다.
              </CardDescription>
            </CardHeader>
          </Card>
        </section>
        <section className="flex flex-col items-center w-1/2 bg-white h-[calc(100vh-85px)] border-l border-solid border-gray-200 max-sm:w-full">
          <div className="flex flex-col items-center justify-center w-full min-h-[200px] border-b border-solid border-gray-200">
            <p className="text-9xl font-bold text-gray-700 align-middle mb-4">
              {phoneNumber}
            </p>
            <p className="text-sm text-gray-400">
              본인이 사용하고 있는 전화번호 뒷자리를 입력해야 해요!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-285px)]">
            <div className="flex flex-row items-center justify-center w-full h-[calc(100vh-144px)]">
              <div
                className="flex flex-col items-center justify-center w-1/3 h-full border-r border-b border-solid border-gray-200 active:bg-gray-200"
                onClick={() => handlePhoneNumber('1')}
              >
                <p className="text-5xl max-sm:text-4xl text-gray-500">1</p>
              </div>
              <div
                className="flex flex-col items-center justify-center w-1/3 h-full border-r border-b border-solid border-gray-200 active:bg-gray-200"
                onClick={() => handlePhoneNumber('2')}
              >
                <p className="text-5xl max-sm:text-4xl text-gray-500">2</p>
              </div>
              <div
                className="flex flex-col items-center justify-center w-1/3 h-full border-b border-solid border-gray-200 active:bg-gray-200"
                onClick={() => handlePhoneNumber('3')}
              >
                <p className="text-5xl max-sm:text-4xl text-gray-500">3</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-[calc(100vh-144px)]">
              <div
                className="flex flex-col items-center justify-center w-1/3 h-full border-r border-b border-solid border-gray-200 active:bg-gray-200"
                onClick={() => handlePhoneNumber('4')}
              >
                <p className="text-5xl max-sm:text-4xl text-gray-500">4</p>
              </div>
              <div
                className="flex flex-col items-center justify-center w-1/3 h-full border-r border-b border-solid border-gray-200 active:bg-gray-200"
                onClick={() => handlePhoneNumber('5')}
              >
                <p className="text-5xl max-sm:text-4xl text-gray-500">5</p>
              </div>
              <div
                className="flex flex-col items-center justify-center w-1/3 h-full border-b border-solid border-gray-200 active:bg-gray-200"
                onClick={() => handlePhoneNumber('6')}
              >
                <p className="text-5xl max-sm:text-4xl text-gray-500">6</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-[calc(100vh-144px)]">
              <div
                className="flex flex-col items-center justify-center w-1/3 h-full border-r border-b border-solid border-gray-200 active:bg-gray-200"
                onClick={() => handlePhoneNumber('7')}
              >
                <p className="text-5xl max-sm:text-4xl text-gray-500">7</p>
              </div>
              <div
                className="flex flex-col items-center justify-center w-1/3 h-full border-r border-b border-solid border-gray-200 active:bg-gray-200"
                onClick={() => handlePhoneNumber('8')}
              >
                <p className="text-5xl max-sm:text-4xl text-gray-500">8</p>
              </div>
              <div
                className="flex flex-col items-center justify-center w-1/3 h-full border-b border-solid border-gray-200 active:bg-gray-200"
                onClick={() => handlePhoneNumber('9')}
              >
                <p className="text-5xl max-sm:text-4xl text-gray-500">9</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-[calc(100vh-144px)]">
              <div
                className="flex flex-col items-center justify-center w-1/3 h-full border-r border-b border-solid border-gray-200 active:bg-gray-200"
                onClick={() => setPhoneNumber((prev) => prev.slice(0, -1))}
              >
                <p className="text-5xl max-sm:text-4xl text-gray-300">지우기</p>
              </div>
              <div
                className="flex flex-col items-center justify-center w-1/3 h-full border-r border-b border-solid border-gray-200 active:bg-gray-200"
                onClick={() => handlePhoneNumber('0')}
              >
                <p className="text-5xl max-sm:text-4xl text-gray-500">0</p>
              </div>
              <div
                className="flex flex-col items-center justify-center w-1/3 h-full border-b border-solid border-gray-200 active:bg-gray-200 bg-blue-500"
                onClick={handleStamp}
              >
                <p className="text-5xl max-sm:text-4xl text-white">
                  {loading ? (
                    <ColorRing
                      visible={true}
                      height="80"
                      width="80"
                      ariaLabel="color-ring-loading"
                      wrapperStyle={{}}
                      wrapperClass="color-ring-wrapper"
                      colors={['#FFF', '#FFF', '#FFF', '#FFF', '#FFF']}
                    />
                  ) : (
                    '적립'
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
        <AlertDialog
          open={isDuplicateAlertDialogOpen}
          onOpenChange={(isOpen) => setIsAlertDialogOpen(isOpen)}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>프로필을 선택해주세요!</AlertDialogTitle>
            </AlertDialogHeader>
            {duplicateUserInfo.map((user) => (
              <div
                key={user.id}
                className="flex flex-row items-center justify-between w-full p-2 hover:bg-gray-100 cursor-pointer rounded-md"
                onClick={() => {
                  setIsDuplicateAlertDialogOpen(false);

                  axios
                    .put('/api/stamp', {
                      id: user.id,
                      point: user.point + pointsType[0].point,
                      pointTypeId: pointsType[0].id,
                    })
                    .then(() => {});
                  confettiRef.current?.addConfetti({
                    emojis: ['😘', '🥰', '🎁', '🪙', '🎉'],
                    emojiSize: 200,
                    confettiNumber: 30,
                  });
                  toast.success(
                    '정상적으로 적립되었어요! 즐거운 예배 되셔요 🙌',
                    {
                      position: 'bottom-left',
                    },
                  );
                }}
              >
                <p className="text-lg text-gray-500">{user.name}</p>
                <p className="text-lg text-gray-500">
                  {district[user.districts_id] + ' 구역'}
                </p>
              </div>
            ))}
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default LeaderStampPage;
