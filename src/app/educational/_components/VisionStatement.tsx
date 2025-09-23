'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const title = `교육기관에서도 이어지는 성장케어\n한 아이를 키우는 두 개의 환경을 잇는 솔루션`;

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

export default function VisionStatement() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
  };

  const lines = title.split('\n');

  return (
    <Box display='flex' minHeight='100vh' flexDirection='column' alignItems='center' justifyContent='center'>
      <Typography mb={5} fontWeight={600} lineHeight={1.5}>
        {lines.map((line, lineIdx) => (
          <Box key={lineIdx} sx={{ fontSize: lineIdx === 0 ? '80px' : '64px' }}>
            {line.split('').map((char, i) => (
              <motion.span key={`${lineIdx}-${i}`} custom={i} variants={letterVariants} initial='hidden' animate='visible' style={{ display: 'inline-block' }}>
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </Box>
        ))}
      </Typography>

      <motion.div variants={textVariants} initial='hidden' animate='visible'>
        <Typography fontSize='40px' lineHeight={1.6}>
          교사와 부모가 아이를 올바로 이해하고, 서로의 관점을 공유할 수 있도록 지원합니다
          <br />
          전문가의 중재로 가정과 학교를 이어 일관된 성장을 설계합니다
        </Typography>
      </motion.div>
    </Box>
  );
}
