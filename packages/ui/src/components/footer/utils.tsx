const SPIKE_URL = 'https://www.spike.fun/';
const BIG_DIPPER_URL = 'https://bigdipper.live';

export const donateLink = {
  key: 'donate',
  url: `${BIG_DIPPER_URL}/donate`,
};

export const footerLinks = [
  {
    key: 'company',
    links: [
      {
        key: 'spike',
        url: SPIKE_URL,
      },
      {
        key: 'contact',
        url: `${SPIKE_URL}/contact`,
      },
      {
        key: 'blog',
        url: `${SPIKE_URL}/blog`,
      },
    ],
  },
  {
    key: 'bigDipper',
    links: [
      {
        key: 'about',
        url: `${BIG_DIPPER_URL}/#about`,
      },
      {
        key: 'faq',
        url: `${BIG_DIPPER_URL}/faq`,
      },
      {
        key: 'termsAndConditions',
        url: `${BIG_DIPPER_URL}/terms-and-conditions`,
      },
      {
        key: 'privacyPolicy',
        url: `${BIG_DIPPER_URL}/privacy-policy`,
      },
    ],
  },
];
