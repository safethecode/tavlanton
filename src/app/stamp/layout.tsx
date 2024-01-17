import { constructMetadata } from '@/utils/next';
import { InterFontStyle } from '@/styles/globalFontsStyle';

import Providers from '../providers';

import '@/styles/globalStyle.css';
import '@/styles/global.css';

export const metadata = constructMetadata({
  title: '대청비전 포인트 적립',
  description: '대학청년대교구 비전팀',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${InterFontStyle.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
