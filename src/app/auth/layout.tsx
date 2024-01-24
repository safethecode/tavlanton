import { constructMetadata } from '@/utils/next';

export const metadata = constructMetadata({
  title: '대청비전 : 대학청년대교구 비상 프로젝트 💪',
  description:
    '함께 달란트를 모아 대학청년대교구를 위한 비상 프로젝트에 참여해요!',
  image: '/public/_static/opengraph/talent_og.png',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="w-full h-full bg-background p-6">{children}</main>;
}
