'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Box } from '@mui/material';
import achaive from '/public/assets/img/calendar.svg';
import { ADULT_CARE_ARCHIVE } from '../core/text';

const MotionBox = motion.create(Box);

const AdultCareArchive = () => {
  const greenBoxRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(greenBoxRef, { once: true, amount: 0.3 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });

  return (
    <Box
      component='section'
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minHeight: '100vh',
        bgcolor: 'background.paper',
        px: { xs: 2, md: 4 },
        gap: 4,
      }}
    >
      {/* 이미지 영역 */}
      <MotionBox
        ref={greenBoxRef}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'visible',
          borderRadius: '24px',
          backgroundColor: '#133f3c',
          width: 'clamp(200px, 20.8vw, 400px)',
          height: 'clamp(200px, 20.8vw, 400px)',
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          whileHover={{ scale: 1.1, zIndex: 7 }}
          transition={{ type: 'spring', stiffness: 100, duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          sx={{
            position: 'relative',
            width: 'clamp(120px, 20.8vw, 400px)',
            height: 'clamp(180px, 31.25vw, 600px)',
            zIndex: 10,
          }}
        >
          <Image src={achaive} alt='아카이브 앱 화면' fill style={{ borderRadius: 16, objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.25))' }} />
        </MotionBox>
      </MotionBox>

      {/* 텍스트 영역 */}
      <MotionBox
        ref={textRef}
        initial={{ opacity: 0, x: 60 }}
        animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: 'clamp(300px, 60vw, 1152px)',
          height: 'clamp(200px, 27.08vw, 520px)',
          pr: 'clamp(1rem, 4vw, 4rem)',
          gap: 2,
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
          sx={{
            fontWeight: 'bold',
            mb: 3,
            fontSize: 'clamp(1.2rem, 3.125vw, 60px)',
            width: '100%',
          }}
        >
          {ADULT_CARE_ARCHIVE.title}
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
          sx={{ fontWeight: 600, mb: 3, fontSize: 'clamp(1rem, 1.875vw, 36px)', whiteSpace: 'pre-line' }}
        >
          {ADULT_CARE_ARCHIVE.subtitle}
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
          sx={{ fontSize: 'clamp(1rem, 1.5625vw, 30px)', lineHeight: 1.6, whiteSpace: 'pre-line' }}
        >
          {ADULT_CARE_ARCHIVE.description}
        </MotionBox>
      </MotionBox>
    </Box>
  );
};
export default AdultCareArchive;
