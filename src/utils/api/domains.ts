import { validDomainRegex } from '@/utils/regex';

type ValidateDomain = {
  domain: string;
};

export const validateDomain = ({ domain }: ValidateDomain) => {
  if (!domain || typeof domain !== 'string') {
    return 'Missing domain';
  }
  const validDomain =
    validDomainRegex.test(domain) && !domain.endsWith(process.env.NEXT_PUBLIC_DOMAIN as string);

  if (!validDomain) {
    return 'Invalid domain';
  }

  return true;
};
