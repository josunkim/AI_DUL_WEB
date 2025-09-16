'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Section1Text = () => {
  return (
    <Box
      height='100vh'
      maxWidth='100%'
      justifyContent='center'
      alignItems={['center', 'center', 'flex-start']}
      position='relative'
      zIndex={10}
      display='flex'
      flexDirection='column'
      px={4}
      textAlign='center'
      color='common.white'
      sx={{
        md: { maxWidth: '48rem' }, // md:max-w-3xl
        xl: { maxWidth: '64rem' }, // xl:max-w-5xl
      }}
    >
      <Box maxWidth='70%' textAlign='center'>
        {/* 헤드라인 */}
        <Typography
          component='h2'
          sx={{
            pt: { xs: 10, md: 16, xl: 20 },
            fontSize: 'clamp(2rem, 6vw, 5rem)',
            fontWeight: 800,
          }}
        >
          AI 휴먼웰빙케어
        </Typography>

        {/* 구분선 + 서브텍스트 */}
        <Box
          sx={{
            mt: { xs: 10, md: 16, xl: 20 },
            pt: { xs: 10, md: 16, xl: 20 },
            borderTop: {
              xs: '1px solid rgba(255,255,255,0.5)',
              md: '2px solid rgba(255,255,255,0.5)',
            },
            width: '100%',
          }}
        >
          <Typography
            sx={{
              pb: { xs: 6, md: 8, xl: 10 },
              fontSize: 'clamp(1.25rem, 4vw, 3.5rem)',
              fontWeight: 600,
            }}
          >
            정신을 위한 기술, 삶을 위한 혁신
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
