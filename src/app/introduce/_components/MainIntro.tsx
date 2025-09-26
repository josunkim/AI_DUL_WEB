'use client';

import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { DESCRIPTION_PARTS, TITLE_PARTS } from '../core/text';

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

export const MainIntro = () => {
  return (
    <Box
      component='section'
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        bgcolor: '#ffffff',
        px: 2,
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4 }}
      >
        <Typography
          variant='h1'
          sx={{
            mb: 5,
            fontWeight: 'bold',
            fontSize: 'clamp(1.5rem, 4.17vw, 72px)',
          }}
        >
          {TITLE_PARTS[0].split('').map((char, i) => (
            <Box key={`part1-${i}`} component={motion.span} custom={i} variants={letterVariants} initial='hidden' animate='visible' sx={{ display: 'inline-block' }}>
              {char === ' ' ? '\u00A0' : char}
            </Box>
          ))}
          <Box
            component={motion.span}
            custom={TITLE_PARTS[0].length}
            variants={letterVariants}
            initial='hidden'
            animate='visible'
            sx={{
              display: 'inline-block',
              fontWeight: 800,
              fontSize: 'clamp(1.5rem, 4.17vw, 80px)',
            }}
          >
            {TITLE_PARTS[1]}
          </Box>
        </Typography>

        <Typography
          sx={{
            mb: 4,
            lineHeight: { xs: 1.6, md: 2 },
            fontSize: 'clamp(0.7rem, 2.083vw, 2.5rem)',
          }}
        >
          {DESCRIPTION_PARTS.description1}
          <br />
          {DESCRIPTION_PARTS.description2}
        </Typography>

        <Typography
          sx={{
            mb: 4,
            lineHeight: { xs: 1.6, md: 2 },
            fontSize: 'clamp(0.7rem, 2.083vw, 2.5rem)',
          }}
        >
          {DESCRIPTION_PARTS.description3}
          <br />
          {DESCRIPTION_PARTS.description4}
        </Typography>

        <Typography
          sx={{
            mb: 4,
            lineHeight: { xs: 1.6, md: 2 },
            fontSize: 'clamp(0.7rem, 2.083vw, 2.5rem)',
          }}
        >
          {DESCRIPTION_PARTS.description5}
        </Typography>

        <Typography
          sx={{
            lineHeight: { xs: 1.6, md: 2 },
            fontSize: 'clamp(0.7rem, 2.083vw, 2.5rem)',
          }}
        >
          <Box component='span' sx={{ fontWeight: 'bold' }}>
            {DESCRIPTION_PARTS.company}
          </Box>
          {DESCRIPTION_PARTS.description6}
          <br />
          {DESCRIPTION_PARTS.description7}
        </Typography>
      </Box>
    </Box>
  );
};
