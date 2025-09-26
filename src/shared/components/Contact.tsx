'use client';

import KakaoMap from '@/shared/components/KakaoMap';
import { Box, Stack, SxProps, Typography } from '@mui/material';
import { CONTACT } from '../Constant';

export const Contact = () => {
  const titleStyle: SxProps = { fontSize: { xs: '1.5rem', md: '1.8rem', xl: '2rem' }, fontWeight: 'bold' };
  const descriptionStyle: SxProps = { whiteSpace: 'pre-line', fontSize: { xs: '1rem', md: '1.25rem' } };
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        px: { xs: 4, md: 8 },
        minHeight: 'full',
        flexDirection: { xs: 'column', md: 'row' },

        gap: { xs: 5, md: 10 },
        pt: 5,
      }}
    >
      {/* 지도 영역 */}
      <Box sx={{ width: '100%', height: 'full' }}>
        <KakaoMap />
      </Box>

      {/* 정보 영역 */}
      <Stack width={'60%'} justifyContent={'space-between'}>
        <Typography variant='h2' sx={{ fontSize: { xs: '2rem', md: '3rem', xl: '3.5rem' }, fontWeight: 'bold', mb: 3 }}>
          {CONTACT.title}
        </Typography>

        <Stack spacing={2}>
          <Typography variant='h3' sx={titleStyle}>
            {CONTACT.address.title}
          </Typography>
          <Typography sx={descriptionStyle}>{CONTACT.address.description}</Typography>
        </Stack>

        <Stack spacing={2}>
          <Typography variant='h3' sx={titleStyle}>
            {CONTACT.email.title}
          </Typography>
          <Typography sx={descriptionStyle}>{CONTACT.email.description}</Typography>
        </Stack>

        <Stack spacing={2}>
          <Typography variant='h3' sx={titleStyle}>
            {CONTACT.fax.title}
          </Typography>
          <Typography sx={descriptionStyle}>{CONTACT.fax.description}</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
