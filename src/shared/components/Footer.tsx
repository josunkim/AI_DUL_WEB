'use client';

import { Stack, Typography } from '@mui/material';
import AppDownloadButton from '@/shared/components/AppDownloadButton';
import SnsIconButton from '@/shared/components/SnsIconButton';

import googlePlayIcon from '@/assets/icon/googlePlay_Icon.png';
import appleStoreIcon from '@/assets/icon/apple_Icon.png';
import instagramIcon from '@/assets/icon/instagram_Icon.png';
import { Contact } from './Contact';
import { FOOTER } from '../Constant';

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
    <footer>
      <Stack width={'100%'} py={4}>
        <Contact />
      </Stack>
      <Stack flexDirection='row' sx={{ bgcolor: '#949191', py: 2 }} justifyContent='space-around' width='full' height={'full'} flexWrap='wrap'>
        {/* 회사 정보 */}
        <Stack alignContent={'center'} justifyContent={'flex-start'} spacing={2}>
          <Typography variant='h6' gutterBottom>
            {FOOTER.companyInfo.name}
          </Typography>
          <Typography>{FOOTER.companyInfo.email}</Typography>
          <Typography variant='body2'>{FOOTER.companyInfo.copyright}</Typography>
        </Stack>

        {/* 앱 다운로드 */}
        <Stack alignItems='center' justifyContent={'flex-start'}>
          <Typography variant='h6' gutterBottom>
            {FOOTER.downloadTitle}
          </Typography>
          <Stack spacing={2}>
            {menuItems.map((item) => (
              <Stack key={item.label}>
                <AppDownloadButton url={item.url} imageSrc={item.icon} alt={item.label} text={item.label} />
              </Stack>
            ))}
          </Stack>
        </Stack>

        {/* SNS */}
        <Stack>
          <Typography variant='h6' gutterBottom>
            {FOOTER.followTitle}
          </Typography>
          <Stack flexDirection='row' gap={1}>
            {snsItems.map((item, idx) => (
              <SnsIconButton key={idx} imageSrc={item.icon} alt={`sns-${idx}`} url={item.url} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </footer>
  );
};

export default Footer;
