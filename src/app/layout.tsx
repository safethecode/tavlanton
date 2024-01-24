import { constructMetadata } from '@/utils/next';
import { SpoqaFontStyle } from '@/styles/globalFontsStyle';

import Providers from './providers';

import '@/styles/globalStyle.css';
import '@/styles/global.css';

export const metadata = constructMetadata({
  title: '대청비전 : 대학청년대교구 비상 프로젝트 💪',
  description:
    '함께 달란트를 모아 대학청년대교구를 위한 비상 프로젝트에 참여해요!',
  image: '/_static/opengraph/talent_og.png',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${SpoqaFontStyle.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
