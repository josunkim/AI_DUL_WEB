'use client';

import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';

const title = '함께 살아가는 노년, 스스로 지키는 웰빙';

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
    },
  }),
};

export default function MainIntro() {
  return (
    <Box component='section'>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <Box
          sx={{
            mt: { xs: 5, md: 10, xl: 20 },
            minHeight: { xs: 400, md: 600, xl: '100vh' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: { xs: 4, md: 6, xl: 8 },
            textAlign: 'center',
          }}
        >
          <Typography
            component='h1'
            fontWeight='bold'
            sx={{
              mb: { xs: 2, md: 4, xl: 6 },
              fontSize: 'clamp(1.5rem, 4.1667vw, 4rem)',
            }}
          >
            {title.split('').map((char, i) => (
              <motion.span key={i} custom={i} variants={letterVariants} initial='hidden' animate='visible' style={{ display: 'inline-block' }}>
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </Typography>

          <Typography
            component='p'
            sx={{
              lineHeight: 1.8,
              fontSize: 'clamp(1rem, 2.083vw, 2rem)',
            }}
          >
            행동, 감정, 인지를 정밀하게 분석하고 제공하는 자기관리 및 정서케어 서비스
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
}
