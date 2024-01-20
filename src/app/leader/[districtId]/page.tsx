/* eslint-disable @next/next/no-img-element */
'use client';

import {
  Alert,
  AlertTitle,
  AlertDescription,
  Button,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
  Input,
  Skeleton,
} from '@/app/ui';
import { wrap } from './page.css';
import { BellIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import { supabase } from '@/utils/api';

interface Props {
  params: {
    districtId: string;
  };
}

const DistrictMemberManagement = ({ params }: Props) => {
  const [district, setDistrict] = useState<any>({});
  const [districtMembers, setDistrictMembers] = useState<any>([]);

  useEffect(() => {
    const getDistrict = async () => {
      const { data: district } = await supabase
        .from('districts')
        .select('*')
        .eq('id', params.districtId);

      setDistrict(district![0]);

      return district;
    };

    const getDistrictMembers = async () => {
      const { data: districtMembers } = await supabase
        .from('users')
        .select('*')
        .eq('districts_id', params.districtId);

      setDistrictMembers(districtMembers);

      return districtMembers;
    };

    getDistrict();
    getDistrictMembers();
  }, [params]);
  return (
    <main className={wrap}>
      <div className="flex justify-between items-center mb-6">
        <img
          src="/_static/district/district-leader-logo.svg"
          alt="대청_달란트_구역장"
          className="w-36"
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">달란트 추가하기</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="font-extrabold">
                달란트 추가하기
              </DialogTitle>
              <DialogDescription>
                아래에 정보를 입력한 후 달란트를 추가해주세요.
              </DialogDescription>
            </DialogHeader>
            <Input placeholder="이름" />
            <Input type="number" placeholder="부여할 달란트" />
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="default">
                  추가하기
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col gap-2">
        <Alert className="mb-4">
          <BellIcon className="w-4 h-4 mr-1" />
          <AlertTitle>{district.district_name} 구역장님 어서오세요!</AlertTitle>
          <AlertDescription>
            아래에서 각 구역원들을 확인할 수 있고, 추가도 할 수 있어요!
          </AlertDescription>
        </Alert>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-extrabold">구역원 목록</h1>
        </div>
        <Table>
          <TableCaption>
            현재까지 {districtMembers.length}명의 구역원이 조회되었어요 😎
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">번호</TableHead>
              <TableHead className="w-[100px]">소속 구역</TableHead>
              <TableHead className="w-[100px]">이름</TableHead>
              <TableHead>핸드폰 번호</TableHead>
              <TableHead className="text-right">달란트</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {districtMembers.map((member: any) => (
              <TableRow key={member.id}>
                <TableCell className="font-medium">
                  {member.id?.slice(0, 5)?.toUpperCase() ?? ''}
                </TableCell>
                <TableCell>{district.district_name}</TableCell>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.back_seat}</TableCell>
                <TableCell className="text-right">{member.point}P</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
};

export default DistrictMemberManagement;
