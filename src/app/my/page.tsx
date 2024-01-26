'use client';

import { Button } from '@/app/ui';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

interface User {
  id?: string;
  created_at?: any;
  districts_id?: string;
  name?: string;
  back_seat?: string;
  leader?: boolean;
  permission?: boolean;
  point?: number;
}

const UserMyPage = () => {
  const router = useRouter();

  const user: User = JSON.parse(getCookie('user')! || '{}');

  const createdAt = new Date(user.created_at!);
  return (
    <div className="relative flex flex-col max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <img
          src="/_static/district/district-member-logo.svg"
          alt="대청_달란트"
          className="w-36"
        />
        <Button
          variant="outline"
          onClick={() => {
            router.back();
          }}
        >
          돌아가기
        </Button>
      </div>
      <ul className="flex flex-col gap-4 mb-4">
        <li className="flex justify-between items-center">
          <span>유저 번호</span>
          <span className="font-bold">
            {user.id?.slice(user.id.length - 4, user.id.length).toUpperCase()}
          </span>
        </li>
        <li className="flex justify-between items-center">
          <span>이름</span>
          <span className="font-bold">{user.name}</span>
        </li>
        <li className="flex justify-between items-center">
          <span>핸드폰 뒷자리</span>
          <span className="font-bold">{user.back_seat}</span>
        </li>
        <li className="flex justify-between items-center">
          <span>생성일</span>
          <span className="font-bold">{createdAt.toDateString()}</span>
        </li>
      </ul>
      {user.permission ||
        (user.leader && (
          <Button
            variant="default"
            onClick={() => {
              router.push('/leader');
            }}
          >
            대청비전 관리자 페이지 이동
          </Button>
        ))}
    </div>
  );
};

export default UserMyPage;
