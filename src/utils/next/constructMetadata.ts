import { Metadata } from 'next';

interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  icons?: string;
}

export function constructMetadata({
  title,
  description,
  keywords,
  image,
  icons,
}: SEOMetadata): Metadata {
  return {
    title,
    description,
    keywords,
    icons,
    viewport:
      'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no',
    openGraph: {
      title,
      description,
      images: [
        {
          url: image as string,
        },
      ],
    },
    themeColor: '#FFF',
  };
}
