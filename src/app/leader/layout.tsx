import { constructMetadata } from '@/utils/next';

export const metadata = constructMetadata({
  title: '대청비전 :: 구역장',
  description: '대청비전 구역장 전용 페이지 🙏',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="w-full h-full bg-background p-6">{children}</main>;
}
