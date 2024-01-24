import { constructMetadata } from '@/utils/next';

export const metadata = constructMetadata({
  title: '대청비전 :: 적립',
  description: '대청비전 포인트 적립 페이지 🪙',
  image: '/public/_static/opengraph/talent_og.png',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="w-full h-full bg-[#fff]">{children}</main>;
}
