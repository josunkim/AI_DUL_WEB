'use client';

import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { CARE_CHILD } from '../core/text';

const MotionBox = motion.create(Box);
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
        bgcolor: '#ffffff',
      }}
    >
      <MotionBox initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <Box
          sx={{
            mt: { xs: 5, md: 10, xl: 18 },
            minHeight: { xs: 400, md: 600, xl: '100vh' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: { xs: 2, md: 3, xl: 4 },
            p: { xs: 2, md: 5, xl: 8 },
            textAlign: 'center',
          }}
        >
          {/* 제목 */}
          <Typography
            component='h1'
            sx={{
              fontWeight: 'bold',
              mb: { xs: 2, md: 2.5, xl: 3 },
              fontSize: 'clamp(1.5rem, 4vw, 5rem)',
              lineHeight: 1.2,
              whiteSpace: 'pre-line',
            }}
          >
            {CARE_CHILD.title.split('').map((char, i) => (
              <motion.span key={i} custom={i} variants={letterVariants} initial='hidden' animate='visible' style={{ whiteSpace: 'pre-line', display: 'inline-block' }}>
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </Typography>
          <Typography
            component='h2'
            sx={{
              fontWeight: 'bold',
              mb: { xs: 2, md: 2.5, xl: 3 },
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              lineHeight: 1.2,
              whiteSpace: 'pre-line',
            }}
          >
            {CARE_CHILD.subTitle.split('').map((char, i) => (
              <motion.span key={i} custom={i} variants={letterVariants} initial='hidden' animate='visible' style={{ whiteSpace: 'pre-line', display: 'inline-block' }}>
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </Typography>

          {/* 본문 */}
          <Typography
            sx={{
              fontSize: 'clamp(1rem, 2.083vw, 2.5rem)',
              lineHeight: { xs: 1.5, md: 1.6, xl: 1.8 },
            }}
          >
            {CARE_CHILD.description}
          </Typography>
        </Box>
      </MotionBox>
    </Box>
  );
};

export default MainIntro;
