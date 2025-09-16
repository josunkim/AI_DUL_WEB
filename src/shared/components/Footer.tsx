'use client';

import { Stack, Typography, Box } from '@mui/material';
import AppDownloadButton from '@/shared/components/AppDownloadButton';
import SnsIconButton from '@/shared/components/SnsIconButton';

import googlePlayIcon from '@/assets/icon/googlePlay_Icon.png';
import appleStoreIcon from '@/assets/icon/apple_Icon.png';
import instagramIcon from '@/assets/icon/instagram_Icon.png';

const Footer = () => {
  const menuItems = [
    { label: 'Google Play', icon: googlePlayIcon, url: '/' },
    { label: 'Apple Store', icon: appleStoreIcon, url: '/' },
  ];

  const snsItems = [
    { icon: instagramIcon, url: '/' },
    { icon: instagramIcon, url: '/' },
    { icon: instagramIcon, url: '/' },
    { icon: instagramIcon, url: '/' },
  ];

  return (
    <Stack flexDirection='row' sx={{ bgcolor: '#949191', py: 2 }} justifyContent='space-around' width='full' height={'full'} flexWrap='wrap'>
      {/* 회사 정보 */}
      <Stack alignContent={'center'} justifyContent={'flex-start'} spacing={2}>
        <Typography variant='h6' gutterBottom>
          아이들 아이앤씨
        </Typography>
        <Typography>Email : aidul@ai-dul.com</Typography>
        <Typography variant='body2'>Copyright © 2025 아이들 아이앤씨. All rights reserved.</Typography>
      </Stack>

      {/* 앱 다운로드 */}
      <Stack alignItems='center' justifyContent={'flex-start'}>
        <Typography variant='h6' gutterBottom>
          Download The App
        </Typography>
        <Stack spacing={2}>
          {menuItems.map((item) => (
            <Stack key={item.label}>
              <AppDownloadButton url={item.url} imageSrc={item.icon} alt={item.label} text={item.label} imgClassName='w-[20px] h-[20px]' />
            </Stack>
          ))}
        </Stack>
      </Stack>

      {/* SNS */}
      <Stack>
        <Typography variant='h6' gutterBottom>
          Follow Us
        </Typography>
        <Stack alignContent='center' flexDirection='row'>
          {snsItems.map((item, idx) => (
            <Stack key={idx}>
              <SnsIconButton imageSrc={item.icon} alt={`sns-${idx}`} url={item.url} />
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
