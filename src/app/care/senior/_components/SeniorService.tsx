'use client';

import { easeOut, motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Box, Stack } from '@mui/material';

import { SENIOR_CARE } from '../core/text';
const MotionBox = motion.create(Box);

const SeniorCareIntroSection = () => {
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        bgcolor: 'background.paper',
      }}
    >
      <Box width='100%' display='flex' justifyContent='center' alignItems='center'>
        <video
          src={'/assets/video/senior_video.mp4'}
          autoPlay
          loop
          preload='auto'
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            maxHeight: 500,
            objectFit: 'contain',
          }}
        />
      </Box>
      {/* 오른쪽 텍스트 설명 */}
      <MotionBox ref={textRef} width={'100%'} initial={{ opacity: 0, x: 60 }} animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }} transition={{ duration: 0.6, ease: easeOut }}>
        <Stack
          alignItems='center'
          textAlign='center'
          spacing={4}
          sx={{
            fontSize: 'clamp(2rem, 3.125vw, 4rem)',
          }}
        >
          <motion.h2
            style={{
              fontSize: '3.75rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.4, delay: 0.1, ease: easeOut }}
          >
            {SENIOR_CARE.title}
          </motion.h2>

          <motion.p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              lineHeight: 1.6,
              whiteSpace: 'pre-line',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.3, ease: easeOut }}
          >
            {SENIOR_CARE.description}
          </motion.p>
        </Stack>
      </MotionBox>
    </Box>
  );
};
export default SeniorCareIntroSection;
