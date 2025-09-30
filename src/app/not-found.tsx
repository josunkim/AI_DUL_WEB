'use client';

import Link from 'next/link';
import { Box, Typography, Button, Stack } from '@mui/material';

export default function NotFound() {
  return (
    <Box minHeight='100vh' display='flex' alignItems='center' justifyContent='center' bgcolor='grey.50'>
      <Box textAlign='center'>
        <Typography
          variant='h1'
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '6rem', md: '10rem' },
            color: 'grey.300',
            mb: 2,
          }}
        >
          404
        </Typography>

        <Typography variant='h4' fontWeight='bold' color='grey.900' mb={2}>
          페이지를 찾을 수 없습니다
        </Typography>

        <Typography color='grey.600' mb={4}>
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </Typography>

        <Stack direction='row' spacing={2} justifyContent='center'>
          <Button component={Link} href='/' variant='contained' color='primary' sx={{ px: 4, py: 1.5 }}>
            홈으로 돌아가기
          </Button>

          <Button variant='outlined' color='inherit' onClick={() => window.history.back()} sx={{ px: 4, py: 1.5 }}>
            이전 페이지
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
