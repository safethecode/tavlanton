/* eslint-disable @next/next/no-img-element */
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
} from '@/app/ui';
import { wrap } from './page.css';
import { BellIcon } from '@radix-ui/react-icons';

const DistrictMemberManagement = () => {
  return (
    <main className={wrap}>
      <div className="flex justify-between items-center mb-6">
        <img
          src="/_static/district/district-leader-logo.svg"
          alt="대청_달란트_구역장"
          className="w-36"
        />
        <Button variant="outline">달란트 추가하기</Button>
      </div>
      <div className="flex flex-col gap-2">
        <Alert className="mb-4">
          <BellIcon className="w-4 h-4 mr-1" />
          <AlertTitle>홍길동 구역장님 어서오세요!</AlertTitle>
          <AlertDescription>
            아래에서 각 구역원들을 확인할 수 있고, 추가도 할 수 있어요!
          </AlertDescription>
        </Alert>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-extrabold">구역원 목록</h1>
          <Button variant="default">구역원 추가</Button>
        </div>
        <Table>
          <TableCaption>현재까지 5명의 구역원이 조회되었어요 😎</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">번호</TableHead>
              <TableHead className="w-[100px]">소속 구역</TableHead>
              <TableHead>이름</TableHead>
              <TableHead>핸드폰 번호</TableHead>
              <TableHead className="text-right">달란트</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>차한나 구역</TableCell>
              <TableCell>홍길동</TableCell>
              <TableCell>9482</TableCell>
              <TableCell className="text-right">500P</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  );
};

export default DistrictMemberManagement;
