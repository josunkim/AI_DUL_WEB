'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Box, Stack, Typography } from '@mui/material';

import calendarImg from '/public/assets/img/calendar.svg';
import achaive from '/public/assets/img/achaive.svg';
import { ADULT_CARE_CO_PARENTING } from '../core/text';
import { bgcolor } from '@mui/system';

const MotionBox = motion.create(Box);
const AdultCareCoParenting = () => {
  const greenBoxRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(greenBoxRef, { once: true, amount: 0.3 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });

  // 이미지 그룹 (샘플: 동일 이미지 사용)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-around',
        minHeight: '100vh',
        height: '100%',
        width: '100%',
        bgcolor: '#fff',
        px: { xs: 2, md: 4 },
        py: { xs: 'clamp(40px,5vw,100px)', md: 8 },
        gap: { xs: 6, md: 4 },
        textAlign: 'center',
        paddingX: 10,
      }}
    >
      {/* 텍스트 영역 */}
      <MotionBox
        ref={textRef}
        initial={{ opacity: 0, x: -60 }}
        animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
          sx={{
            width: '100%',
            fontWeight: 'bold',
            mb: 'clamp(24px,4vw,32px)',
            fontSize: 'clamp(28px, 3.125vw, 60px)',
            lineHeight: 1.05,
          }}
        >
          {ADULT_CARE_CO_PARENTING.title}
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
          sx={{
            width: '100%',
            mb: 'clamp(16px,2.5vw,32px)',
            fontWeight: 600,
            fontSize: 'clamp(20px, 1.875vw, 36px)',
            lineHeight: 1.3,
            whiteSpace: 'pre-line',
          }}
        >
          {ADULT_CARE_CO_PARENTING.subtitle}
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
          sx={{ width: '100%', fontSize: 'clamp(1rem, 1.5625vw, 30px)', lineHeight: 1.6, whiteSpace: 'pre-line' }}
        >
          {ADULT_CARE_CO_PARENTING.description}
        </MotionBox>
      </MotionBox>

      {/* 이미지 영역 */}

      <Stack direction={'row'} sx={{ position: 'relative', width: '100%', minHeight: '100vh', height: '100%', alignItems: 'center' }}>
        <Stack>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            sx={{ zIndex: 1, position: 'absolute', bottom: 0, left: '5%', width: '30%', height: '100%', alignItems: 'center' }}
            whileHover={{ scale: 1.1, zIndex: 7 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <Image src={calendarImg} alt='calendar' fill style={{ objectFit: 'contain' }} />
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            sx={{ zIndex: 1, position: 'absolute', bottom: '5%', left: '20%', width: '30%', height: '100%' }}
            whileHover={{ scale: 1.1, zIndex: 7 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <Image src={achaive} alt='calendar' fill style={{ objectFit: 'contain' }} />
          </MotionBox>
          <MotionBox sx={{ zIndex: 35, position: 'absolute', bottom: '-90%', left: '-25%', width: '100%', height: '100%' }}>
            <Typography sx={{ fontSize: 'clamp(1rem,3vw,1.5rem)', fontWeight: 'Bold' }}>Mother's i-Angel</Typography>
          </MotionBox>
        </Stack>
        <Stack>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            sx={{ zIndex: 1, position: 'absolute', bottom: 0, right: '20%', width: '30%', height: '100%' }}
            whileHover={{ scale: 1.1, zIndex: 7 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <Image src={calendarImg} alt='calendar' fill style={{ objectFit: 'contain' }} />
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            sx={{ zIndex: 1, position: 'absolute', bottom: '5%', right: '5%', width: '30%', height: '100%' }}
            whileHover={{ scale: 1.1, zIndex: 7 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Image src={achaive} alt='calendar' fill style={{ objectFit: 'contain' }} />
          </MotionBox>
          <MotionBox sx={{ zIndex: 1, position: 'absolute', bottom: '-90%', right: '-20%', width: '100%', height: '100%' }}>
            <Typography sx={{ fontSize: 'clamp(1rem,3vw,1.5rem)', fontWeight: 'Bold' }}>Father's i-Angel</Typography>
          </MotionBox>
        </Stack>
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          width='100%'
          height='40%'
          position='absolute'
          sx={{
            zIndex: 0,
            top: '30%',
            left: 0,
            borderRadius: 6,
            bgcolor: '#133f3c',
          }}
        />
      </Stack>
    </Box>
  );
};
export default AdultCareCoParenting;
