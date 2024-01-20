/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useRef } from 'react';
import {
  Alert,
  AlertTitle,
  AlertDescription,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Progress,
} from '@/app/ui';
import { HeartFilledIcon } from '@radix-ui/react-icons';
import JSConfetti from 'js-confetti';

const MyPointPage = () => {
  const confettiRef = useRef<JSConfetti>(null);

  const handleOnceDayGiftClick = () => {
    confettiRef.current?.addConfetti({
      emojis: ['😘', '🥰', '🎁', '🪙', '🎉'],
      emojiSize: 200,
      confettiNumber: 30,
    });

    const now = new Date();

    const expires = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
    );

    document.cookie = `yt-once-day-gift=true; expires=${expires}; path=/`;
  };

  useEffect(() => {
    (confettiRef.current as JSConfetti) = new JSConfetti();
  }, []);

  return (
    <main className="relative h-full flex flex-col max-w-2xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <img
          src="/_static/district/district-member-logo.svg"
          alt="대청_달란트"
          className="w-36"
        />
        <Button variant="outline">내 정보</Button>
      </div>
      <div className="flex flex-col gap-2 h-full">
        <Alert className="mb-4">
          <HeartFilledIcon className="w-4 h-4 mr-1" />
          <AlertTitle className="mb-2">오늘의 말씀</AlertTitle>
          <AlertDescription className="font-bold mb-2">
            그런즉 심는 이나 물주는 이는 아무 것도 아니로되 오직 자라나게 하시는
            하나님 뿐이니라
          </AlertDescription>
          <AlertDescription className="underline text-xs">
            고린도전서 3:7 KRV
          </AlertDescription>
        </Alert>
        <div className="flex flex-col gap-4l">
          <Card className="w-full mb-4 bg-gray-100">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl gap-1">
                누적 달란트
                <img
                  src="/_static/apng/smiling-face-with-hearts.png"
                  alt="화이팅!"
                  className="w-8"
                />
              </CardTitle>
              <h1 className="text-2xl font-black text-primary">5000P</h1>
              <CardDescription className="font-bold">
                대박! 지금 상위 10%에 들어가고 있어요!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={50} />
            </CardContent>
          </Card>
        </div>
        <h1 className="text-lg font-bold mb-2">달란트 사용 내역</h1>
        <Card className="w-full mb-4">
          <CardContent className="flex flex-col justify-center items-center p-4">
            <img
              src="/_static/list-empty.svg"
              alt="리스트에 아무 것도 없어요!"
              className="w-32 mb-4"
            />
            <h4 className="text-sm font-normal text-gray-400">
              달란트를 사용하면 이 곳에 내역이 남아요!
            </h4>
          </CardContent>
        </Card>
      </div>
      <div className="w-full">
        <Button
          variant="default"
          className="w-full h-14 flex items-center font-bold text-sm rounded-xl active:bg-primary/60 p-4 shadow-lg z-10"
          onClick={handleOnceDayGiftClick}
        >
          하루 한 번, 랜덤 달란트 받기
          <img
            src="/_static/apng/heart-hands.png"
            alt="선물"
            className="w-4 ml-1"
          />
        </Button>
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-t from-white/80 to-white -z-10"></div>
      </div>
    </main>
  );
};

export default MyPointPage;
