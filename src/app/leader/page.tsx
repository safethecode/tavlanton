'use client';

import {
  Badge,
  Button,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/ui';

const LeaderMainPage = () => {
  return (
    <div className="relative flex flex-col max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <img
          src="/_static/district/district-leader-logo.svg"
          alt="대청_달란트_구역장"
          className="w-36"
        />
        <Button variant="outline">로그아웃</Button>
      </div>
      <h1 className="text-2xl font-extrabold mb-4">바로 가기</h1>
      <div className="flex gap-4 mb-4 max-[640px]:flex-col">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>달란트 적립 🪙</CardTitle>
            <CardDescription>
              금요철야, 온새토에서 달란트를 적립할 수 있는 번호 입력 페이지가
              나와요!
            </CardDescription>
            <Button variant="outline">이동하기</Button>
          </CardHeader>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle>전체 달란트 현황 🏆</CardTitle>
              <Badge>권한 필요</Badge>
            </div>
            <CardDescription>
              비전팀 전체 인원들의 달란트 현황을 확인할 수 있는 페이지가 나와요!
            </CardDescription>
            <Button variant="outline">이동하기 </Button>
          </CardHeader>
        </Card>
      </div>
      <div className="flex flex-col mb-4">
        <h1 className="text-2xl font-extrabold mb-4">내 구역 정보</h1>
        <div className="flex gap-4 mb-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>구역원 수 👩‍🌾</CardTitle>
              <CardDescription>5명</CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>달란트 🪙</CardTitle>
              <CardDescription>5,000 P</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <Button variant="outline" className="mb-2">
          구역 정보 확인하기
        </Button>
        <div className="rounded-xl border border-solid border-gray-200 p-4">
          <Table>
            <TableCaption>현재까지 5명의 구역원이 조회되었어요 😎</TableCaption>
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
              <TableRow>
                <TableCell className="font-medium">ABD</TableCell>
                <TableCell>차한나 구역</TableCell>
                <TableCell>손지민</TableCell>
                <TableCell>8429</TableCell>
                <TableCell className="text-right">500 P</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <footer className="w-full bg-gray-50 p-4 rounded-xl border border-solid border-gray-200 mb-8">
        <p className="text-gray-500 text-sm mb-2">
          © 2024 인천순복음교회 대학청년대교구 비전팀
        </p>
        <p className="text-gray-500 text-sm">
          본 페이지에서 관리되고 있는 모든 정보는 안전하게 암호화되어 저장되며,
          모든 비전팀 사역이 종료된 이후에는 데이터를 지체없이 파기합니다.
        </p>
      </footer>
    </div>
  );
};

export default LeaderMainPage;
