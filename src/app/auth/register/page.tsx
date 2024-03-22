'use client';

import { useEffect, useState } from 'react';
import {
  Button,
  Input,
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from '@/app/ui';
import { toast } from 'sonner';
import axios from 'axios';
import { KartFontStyle } from '@/styles';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';
import { ColorRing } from 'react-loader-spinner';

const AuthRegisterPage = () => {
  const router = useRouter();

  const [districts, setDistricts] = useState<any[]>([]);
  const [joinInfo, setJoinInfo] = useState<any>({
    districtId: '',
    backSeat: '',
    name: '',
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleJoinInfoChange = (e: any) => {
    setJoinInfo({
      ...joinInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleJoinClick = async () => {
    setLoading(true);
    if (joinInfo) {
      await axios
        .post(
          '/api/users/create',
          {
            ...joinInfo,
            leader: false,
          },
          {
            withCredentials: true,
          },
        )
        .then((res) => {
          toast('가입이 완료되었어요!', {
            description: '대청달란트에 가입해주셔서 감사합니다 👋',
          });
          setLoading(false);
          router.push('/auth');
        })
        .catch((err) => {
          toast('가입에 실패했어요!', {
            description: '잠시 후 다시 시도해주세요 😥',
          });
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    const getDistricts = async () => {
      const districts = await axios
        .get<any[]>('/api/districts')
        .then((res: any) => {
          setDistricts(res.data.data);
        })
        .catch((err) => {
          throw new Error(err.message);
        });

      return districts;
    };

    getDistricts();
  }, []);
  return (
    <main className="relative h-full flex flex-col max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <img
          src="/_static/district/district-member-logo.svg"
          alt="대청_달란트"
          className="w-36"
        />
      </div>
      <div className="flex flex-col gap-2 p-6 border border-solid border-gray-200 rounded-lg mb-4 bg-gray-50">
        <h1 className="text-2xl font-bold">가입하기</h1>
        <h4 className="text-sm text-gray-400 mb-2">
          아래 선택지를 모두 입력해야 해요!
        </h4>
        <Select
          name="districtId"
          onValueChange={(value) => {
            setJoinInfo({
              ...joinInfo,
              districtId: value,
            });
          }}
        >
          <SelectTrigger className="w-full h-12 bg-white">
            <SelectValue placeholder="소속 구역 선택이 필요해요." />
          </SelectTrigger>
          <SelectContent>
            {districts
              ?.filter((district) => district.district_name !== '교역자')
              .map((district, key) => (
                <SelectItem key={key} value={district.id}>
                  {district.district_name + ' 구역'}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        <Input
          type="number"
          name="backSeat"
          className="h-12 bg-white"
          placeholder="전화번호 뒷자리를 입력해야 해요."
          maxLength={4}
          onChange={handleJoinInfoChange}
        />
        <Input
          name="name"
          className="h-12 bg-white"
          placeholder="이름을 입력해야 해요."
          onChange={handleJoinInfoChange}
        />
      </div>
      <Button
        variant={
          joinInfo.districtId && joinInfo.backSeat && joinInfo.name
            ? 'default'
            : 'secondary'
        }
        className="w-full h-14 flex items-center font-bold text-sm rounded-xl active:bg-primary/60 p-4 z-10"
        onClick={handleJoinClick}
      >
        {loading ? (
          <ColorRing
            visible={true}
            height="40"
            width="40"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#FFF', '#FFF', '#FFF', '#FFF', '#FFF']}
          />
        ) : (
          <>
            지금 바로 가입하기
            <img
              src="/_static/apng/waving-hand.png"
              alt="선물"
              className="w-5 ml-1 mb-1"
            />
          </>
        )}
      </Button>
    </main>
  );
};

export default AuthRegisterPage;
