'use client';

import HistoryPage from '@/shared/components/HistorySection';
import { Box, Typography } from '@mui/material';

export const CompanyHistory = () => {
  return (
    <Box
      component='section'
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        bgcolor: 'background.paper',
        p: 4,
      }}
    >
      <Box sx={{ p: 4 }}>
        <Typography
          variant='h2'
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          회사 연혁
        </Typography>
        <HistoryPage />
      </Box>
    </Box>
  );
};
