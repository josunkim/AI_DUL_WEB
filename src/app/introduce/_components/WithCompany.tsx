'use client';

import { Box, Paper, Typography } from '@mui/material';
import { amber } from '@mui/material/colors';
import { Stack } from '@mui/system';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { WITH_COMPANY_TITLE } from '../core/text';

const companies = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  name: `회사 이름 ${i + 1}`,
}));

export const WithCompany = () => {
  const repeatedCompanies = [...companies, ...companies];

  return (
    <Box
      component='section'
      sx={{
        width: '100%',
        mx: 'auto',
        paddingX: 16,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        overflow: 'hidden',
      }}
    >
      <Typography fontSize={'clamp(0.1rem, 4vw, 3rem)'} align='center' fontWeight='bold'>
        {WITH_COMPANY_TITLE}
      </Typography>

      <Box
        sx={{
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
        }}
      >
        <motion.div
          style={{
            display: 'inline-flex',
            whiteSpace: 'nowrap',
            cursor: 'grab',
          }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
        >
          {repeatedCompanies.map((c, i) => (
            <Stack
              key={i}
              direction='column'
              sx={{
                bgcolor: amber[100],
                minWidth: 250,
                p: 2,
                mr: 2,
                borderRadius: 2,
                textAlign: 'center',
                flexShrink: 0,
              }}
              spacing={2}
              alignItems='center'
            >
              <Image src={`/assets/img/logoImg.png`} alt={c.name} width={40} height={40} />
              <Paper elevation={0} sx={{ bgcolor: 'transparent' }}>
                {c.name}
              </Paper>
            </Stack>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};
