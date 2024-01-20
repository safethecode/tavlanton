import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const InterFontStyle = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const SpoqaFontStyle = localFont({
  src: [
    {
      path: '../../public/_fonts/SpoqaHanSansNeo-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/_fonts/SpoqaHanSansNeo-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/_fonts/SpoqaHanSansNeo-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/_fonts/SpoqaHanSansNeo-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/_fonts/SpoqaHanSansNeo-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});
