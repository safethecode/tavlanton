import { constructMetadata } from '@/utils/next';

export const metadata = constructMetadata({
  title: '대청비전 :: 구역장',
  description: '대청비전 구역장 전용 페이지 🙏',
  image:
    'https://github.com/safethecode/talent/assets/59228569/2cae3574-9103-4777-85cb-bb550aa90237',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="w-full h-full bg-background p-6">{children}</main>;
}
