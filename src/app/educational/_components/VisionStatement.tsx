'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { VISION_STATEMENT } from '../core/text';

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
    },
  }),
};

const VisionStatement = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
  };

  const lines = VISION_STATEMENT.title.split('\n');

  return (
    <Box display='flex' minHeight='100vh' flexDirection='column' alignItems='center' justifyContent='center' textAlign='center'>
      <Typography component='div' mb={5} fontWeight={600} lineHeight={1.5}>
        {lines.map((line, lineIdx) => (
          <Box
            key={lineIdx}
            component='div' // 줄 단위 블록
            sx={{ fontSize: lineIdx === 0 ? 'clamp(1.3rem,5vw,4rem)' : 'clamp(1rem,4vw,3rem)' }}
          >
            {line.split('').map((char, i) => (
              <motion.span key={`${lineIdx}-${i}`} custom={i} variants={letterVariants} initial='hidden' animate='visible' style={{ display: 'inline-block' }}>
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </Box>
        ))}
      </Typography>

      <motion.div variants={textVariants} initial='hidden' animate='visible'>
        <Typography fontSize='clamp(0.5rem,2vw,2rem)' whiteSpace={'pre-line'} textAlign='center'>
          {VISION_STATEMENT.description}
        </Typography>
      </motion.div>
    </Box>
  );
};
export default VisionStatement;
