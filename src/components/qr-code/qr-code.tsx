import * as qr from '@bitjson/qr-code';
import { useEffect } from 'react';

interface QRCodeProps extends React.HTMLAttributes<HTMLQrCodeElement> {
  contents: string;
}

export const QRCode = ({ contents, ...rest }: QRCodeProps) => {
  useEffect(() => {
    qr.defineCustomElements(window);
  }, []);
  return <qr-code contents={contents} {...rest} />;
};
