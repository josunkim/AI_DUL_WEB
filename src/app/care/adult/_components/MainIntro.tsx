'use client';

import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import { ADULT_MAIN } from '../core/text';

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

const MainIntro = () => {
  return (
    <Box
      component='section'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        bgcolor: '#ffffff',
      }}
    >
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        {/* 제목 */}
        <Typography
          component='h1'
          fontWeight='bold'
          gutterBottom
          sx={{
            mb: 2,
            fontSize: 'clamp(1.5rem, 4.17vw, 5rem)', // min 24px, max 80px
            textAlign: 'center',
          }}
        >
          {ADULT_MAIN.title.split('').map((char, i) => (
            <motion.span key={i} custom={i} variants={letterVariants} initial='hidden' animate='visible' style={{ display: 'inline-block' }}>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </Typography>

        {/* 설명문 */}
        <Typography
          component='p'
          textAlign='center'
          sx={{
            fontSize: 'clamp(0.7rem, 2.083vw, 2.5rem)', // min 약 11px, max 40px
            lineHeight: { xs: 1.6, md: 2 },
            mt: 4,
          }}
        >
          {ADULT_MAIN.description1}
          <br />
          {ADULT_MAIN.description2}
        </Typography>
      </motion.div>
    </Box>
  );
};
export default MainIntro;
