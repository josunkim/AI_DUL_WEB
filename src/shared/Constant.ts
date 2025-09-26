import { title } from 'process';

export const PATH = {
  HOME: '/',
  CARE_CHILD: '/care/child',
  CARE_ADULT: '/care/adult',
  CARE_SENIOR: '/care/senior',
  EDUCATIONAL: '/educational',
  INTRODUCE: '/introduce',
};

export const MENU_ITEMS = [
  { label: 'Home', path: PATH.HOME },
  { label: '아동', path: PATH.CARE_CHILD },
  { label: '성인', path: PATH.CARE_ADULT },
  { label: '노인', path: PATH.CARE_SENIOR },
  { label: '교육기관', path: PATH.EDUCATIONAL },
  { label: '회사 소개', path: PATH.INTRODUCE },
];
export const HEADER_MENU_ITEMS = [
  { label: '아동', path: PATH.CARE_CHILD },
  { label: '성인', path: PATH.CARE_ADULT },
  { label: '노인', path: PATH.CARE_SENIOR },
  { label: '교육기관', path: PATH.EDUCATIONAL },
];

export const FOOTER = {
  companyInfo: {
    name: '아이들 아이앤씨',
    email: 'Email : aidul@ai-dul.com',
    copyright: 'Copyright © 2025 아이들 아이앤씨. All rights reserved.',
  },
  downloadTitle: 'Download The App',
  followTitle: 'Follow Us',
};

export const CONTACT = {
  title: 'Contact',
  address: { title: 'Address', description: '서울특별시 서대문구 이화여대길 52\n 이화 스타트업 오픈 스페이스 (03760)' },
  email: { title: 'E-mail', description: 'aidul@ai-dul.com' },
  fax: { title: 'Fax', description: '0504-030-0639' },
};
