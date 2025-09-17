'use client';

import KakaoMap from '@/shared/components/KakaoMap';
import { Box, Container, Stack, Typography } from '@mui/material';

export const Contact = () => {
  return (
    <Container
      component='section'
      sx={{
        display: 'flex',
        width: '100%',
        minHeight: 'full',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        gap: { xs: 5, md: 10 },
        pt: 5,
      }}
    >
      {/* 지도 영역 */}
      <Box sx={{ width: '100%', height: 'full' }}>
        <KakaoMap />
      </Box>

      {/* 정보 영역 */}
      <Stack width={'100%'} justifyContent={'space-between'}>
        <Typography variant='h2' sx={{ fontSize: { xs: '2.5rem', md: '3.5rem', xl: '4rem' }, fontWeight: 'bold' }}>
          Contact
        </Typography>

        <Stack spacing={2}>
          <Typography variant='h3' sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 'bold' }}>
            주소
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
            서울특별시 서대문구 이화여대길 52,
            <br />
            이화 스타트업 오픈 스페이스 (03760)
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <Typography variant='h3' sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 'bold' }}>
            E-mail
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>aidul@ai-dul.com</Typography>
        </Stack>

        <Stack spacing={2}>
          <Typography variant='h3' sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 'bold' }}>
            Fax
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>0504-030-0639</Typography>
        </Stack>
      </Stack>
    </Container>
  );
};
