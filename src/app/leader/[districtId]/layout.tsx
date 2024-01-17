import { constructMetadata } from '@/utils/next';
import { InterFontStyle } from '@/styles/globalFontsStyle';

import Providers from '../../providers';

import '@/styles/globalStyle.css';
import '@/styles/global.css';

export const metadata = constructMetadata({
  title: '대청비전',
  description: '대학청년대교구 비전팀',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-background ${InterFontStyle.variable} p-6`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
