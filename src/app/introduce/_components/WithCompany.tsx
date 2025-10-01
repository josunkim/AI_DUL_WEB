'use client';

import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { WITH_COMPANY_LIST, WITH_COMPANY_TITLE } from '../core/text';

const companies = WITH_COMPANY_LIST.map((d, i) => ({
  id: i,
  src: d.src,
  name: d.name,
}));

export const WithCompany = () => {
  const repeatedCompanies = [...companies, ...companies];

  return (
    <Box
      component='section'
      sx={{
        width: '100%',
        mx: 'auto',
        paddingX: { xs: 4, md: 8, xl: 16 },
        minHeight: '100vh',
        justifyContent: 'center',
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
              duration: 40,
              ease: 'linear',
            },
          }}
        >
          {repeatedCompanies.map((d, i) => (
            <Stack
              key={i}
              direction='column'
              sx={{
                border: '1px solid #dbdbdb',
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
              <Image src={d.src} alt={d.name} width={240} height={100} />
            </Stack>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};
