'use client';

import { useRouter } from 'next/navigation';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/ui';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id?: string;
  created_at?: any;
  districts_id: any;
  name?: string;
  back_seat?: string;
  leader?: boolean;
  permission?: boolean;
  point?: number;
}

const district = {
  '34f4478d-bb51-41a9-80e1-d943aa4fd133': '김혜정',
  'eee37d0a-8c7a-4fdd-9c64-459adcb461a0': '김민서',
  '3515eb48-6e0b-48db-9bea-ad9c37c16668': '맹승호',
  '7e80b530-bafa-40df-bcaa-dda12ae71abb': '천승희',
  'fe8eb020-9396-4195-9676-eae91628d78c': '차용준',
  '930d8fcb-3e5e-46ce-af7b-980476cd19da': '차한나',
} as any;

const LeaderUserRealtimePage = () => {
  const router = useRouter();

  const [districtInfo, setDistrictInfo] = useState<User[]>([]);

  useEffect(() => {
    axios.get('/api/users').then((res) => {
      setDistrictInfo(res.data);
    });
  }, []);

  return (
    <div className="relative flex flex-col max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <img
          src="/_static/district/district-leader-logo.svg"
          alt="대청_달란트_구역장"
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
      <div className="rounded-xl border border-solid border-gray-200 p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[70px]">번호</TableHead>
              <TableHead className="w-[100px]">소속 구역</TableHead>
              <TableHead className="w-[70px]">이름</TableHead>
              <TableHead className="w-[100px]">뒷자리</TableHead>
              <TableHead className="text-right">달란트</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {districtInfo.map((user, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{district[user.districts_id]} 구역</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.back_seat}</TableCell>
                <TableCell className="text-right">
                  {user.point?.toLocaleString('ko-KR')} P
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LeaderUserRealtimePage;
