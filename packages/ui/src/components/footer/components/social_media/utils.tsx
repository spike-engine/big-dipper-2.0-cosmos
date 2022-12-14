import { GithubIcon, LinkedinIcon, TelegramIcon, TwitterIcon } from '@/components/icons';
import React from 'react';

export const socialMediaLinks: {
  component: React.ReactNode;
  className: string;
  url: string;
}[] = [
  {
    component: <TelegramIcon />,
    className: 'telegram',
    url: '',
  },
  {
    component: <LinkedinIcon />,
    className: 'linkedin',
    url: '',
  },
  {
    component: <TwitterIcon />,
    className: 'twitter',
    url: '',
  },
  {
    component: <GithubIcon />,
    className: 'github',
    url: 'https://github.com/spike-labs',
  },
];
