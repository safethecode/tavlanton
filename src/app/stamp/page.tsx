'use client';

import { useRouter } from 'next/navigation';

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/ui';

import { QRCode } from '@/components';
import { useEffect, useState } from 'react';
import { supabase } from '@/utils';

const LeaderStampPage = () => {
  const router = useRouter();

  const [pointsType, setPointsType] = useState<any[]>([
    {
      id: 0,
      point_type_name: '',
      point: 0,
      selected: false,
    },
  ]);

  const handleBack = () => {
    router.back();
  };

  useEffect(() => {
    const getPointsType = async () => {
      const { data: pointsType, error } = await supabase
        .from('points_type')
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

  return (
    <div className="w-full h-full flex flex-col">
      <header className="flex items-center justify-center p-6 bg-white border-b border-solid border-gray-200">
        <p className="text-xl text-gray-500">전화번호 뒷자리를 눌러주세요.</p>
        <Button variant="secondary" className="ml-4" onClick={handleBack}>
          돌아가기
        </Button>
      </header>
      <div className="flex">
        <section className="flex flex-col w-1/2 h-screen h-[calc(100vh-85px)] p-8">
          <Card className="w-full mb-4">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CardTitle>{pointsType[0].point_type_name}</CardTitle>
                <Badge variant="secondary" className="cursor-pointer">
                  변경
                </Badge>
              </div>
              <CardDescription>
                적립되는 달란트는 {pointsType[0].point}P 입니다.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full mb-4">
            <CardHeader>
              <CardTitle>QR 코드</CardTitle>
              <CardDescription>
                번호 입력이 힘들다면 핸드폰으로 QR 코드를 찍어주세요.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <QRCode
                contents="https://www.naver.com"
                className="w-[300px] h-[300px] scale-[1.2]"
              />
            </CardContent>
          </Card>
        </section>
        <section className="flex flex-col items-center w-1/2 h-screen bg-white h-[calc(100vh-85px)] border-l border-solid border-gray-200">
          <div className="flex flex-col items-center justify-center w-full min-h-[200px] border-b border-solid border-gray-200">
            <p className="text-9xl font-bold text-gray-700 align-middle mb-4">
              8429
            </p>
            <p className="text-sm text-gray-400">
              본인이 사용하고 있는 전화번호 뒷자리를 입력해야 해요!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-285px)]">
            <div className="flex flex-row items-center justify-center w-full h-[calc(100vh-144px)]">
              <div className="flex flex-col items-center justify-center w-1/3 h-full border-r border-b border-solid border-gray-200 active:bg-gray-200">
                <p className="text-5xl text-gray-500">1</p>
              </div>
              <div className="flex flex-col items-center justify-center w-1/3 h-full border-r border-b border-solid border-gray-200 active:bg-gray-200">
                <p className="text-5xl text-gray-500">2</p>
              </div>
              <div className="flex flex-col items-center justify-center w-1/3 h-full border-b border-solid border-gray-200 active:bg-gray-200">
                <p className="text-5xl text-gray-500">3</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-[calc(100vh-144px)]">
              <div className="flex flex-col items-center justify-center w-1/3 h-full border-r border-b border-solid border-gray-200 active:bg-gray-200">
                <p className="text-5xl text-gray-500">4</p>
              </div>
              <div className="flex flex-col items-center justify-center w-1/3 h-full border-r border-b border-solid border-gray-200 active:bg-gray-200">
                <p className="text-5xl text-gray-500">5</p>
              </div>
              <div className="flex flex-col items-center justify-center w-1/3 h-full border-b border-solid border-gray-200 active:bg-gray-200">
                <p className="text-5xl text-gray-500">6</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-[calc(100vh-144px)]">
              <div className="flex flex-col items-center justify-center w-1/3 h-full border-r border-b border-solid border-gray-200 active:bg-gray-200">
                <p className="text-5xl text-gray-500">7</p>
              </div>
              <div className="flex flex-col items-center justify-center w-1/3 h-full border-r border-b border-solid border-gray-200 active:bg-gray-200">
                <p className="text-5xl text-gray-500">8</p>
              </div>
              <div className="flex flex-col items-center justify-center w-1/3 h-full border-b border-solid border-gray-200 active:bg-gray-200">
                <p className="text-5xl text-gray-500">9</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-[calc(100vh-144px)]">
              <div className="flex flex-col items-center justify-center w-1/3 h-full border-r border-b border-solid border-gray-200 active:bg-gray-200">
                <p className="text-5xl text-gray-300">지우기</p>
              </div>
              <div className="flex flex-col items-center justify-center w-1/3 h-full border-r border-b border-solid border-gray-200 active:bg-gray-200">
                <p className="text-5xl text-gray-500">0</p>
              </div>
              <div className="flex flex-col items-center justify-center w-1/3 h-full border-b border-solid border-gray-200 active:bg-gray-200 bg-blue-500">
                <p className="text-5xl text-white">적립</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LeaderStampPage;
