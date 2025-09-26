'use client';

import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import { MAIN_INTRO } from '../core/text';

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
    <Box component='section'>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: { xs: 2, md: 3, xl: 4 },
            textAlign: 'center',
            bgcolor: 'white',
          }}
        >
          <Typography
            component='h1'
            fontWeight='bold'
            sx={{
              fontSize: 'clamp(1.5rem, 4vw, 4rem)',
            }}
          >
            {MAIN_INTRO.title.split('').map((char, i) => (
              <motion.span key={i} custom={i} variants={letterVariants} initial='hidden' animate='visible' style={{ display: 'inline-block' }}>
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </Typography>
          <Typography
            component='h2'
            fontWeight='bold'
            sx={{
              fontSize: 'clamp(1.5rem, 4vw, 3.5rem)',
            }}
          >
            {MAIN_INTRO.subTitle.split('').map((char, i) => (
              <motion.span key={i} custom={i} variants={letterVariants} initial='hidden' animate='visible' style={{ display: 'inline-block' }}>
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </Typography>

          <Typography
            component='p'
            sx={{
              lineHeight: 1.8,
              fontSize: 'clamp(1rem, 2vw, 2rem)',
              whiteSpace: 'pre-line',
            }}
          >
            {MAIN_INTRO.description}
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};
export default MainIntro;
