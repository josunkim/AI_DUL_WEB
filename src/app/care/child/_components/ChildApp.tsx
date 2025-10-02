'use client';

import { Box } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CARE_CHILDSECTION2 } from '../core/text';

const MotionBox = motion.create(Box);
const ChildApp = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });

  return (
    <Box
      component='section'
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        alignItems: 'center',
        w: '100%',
        bgColor: 'white',
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 6, sm: 8 },
        height: { xl: '100vh' },
        bgcolor: 'background.paper',
      }}
    >
      {/* 왼쪽 텍스트 영역 */}
      <MotionBox
        ref={textRef}
        initial={{ opacity: 0, x: -60 }}
        animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        sx={{
          mb: { xs: 6, lg: 0 },
          flex: 1,
          height: { xs: 180, sm: 260, md: 340, lg: 480, xl: 680 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'space-around',
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
          sx={{
            mb: { xs: 6, sm: 6, md: 6, lg: 6, xl: 6 },
            fontWeight: 'bold',
            fontSize: { xs: '1.25rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '4rem' },
          }}
        >
          {CARE_CHILDSECTION2.title}
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
          sx={{
            fontSize: { xs: '0.75rem', sm: '1rem', md: '1.125rem', lg: '1.5rem', xl: '2rem' },
            whiteSpace: 'pre-line',
          }}
        >
          {CARE_CHILDSECTION2.description1}
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
          sx={{
            fontSize: { xs: '0.75rem', sm: '1rem', md: '1.125rem', lg: '1.5rem', xl: '2rem' },
            lineHeight: { xs: 1.5, sm: 1.8, md: 2, lg: 2.5, xl: 3 },
          }}
        >
          {CARE_CHILDSECTION2.description2}
        </MotionBox>
      </MotionBox>

      {/* 오른쪽 초록색 컨텐츠 영역 */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
        sx={{
          flex: 1,
          mt: { xs: 16, sm: 16, lg: 0 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <video
          src={'/assets/video/아동서비스 영상.mp4'}
          style={{
            width: '100%',
            maxHeight: '100vh',
            objectFit: 'contain',
          }}
          autoPlay
          loop
          muted
          playsInline
        />
      </MotionBox>
    </Box>
  );
};
export default ChildApp;
