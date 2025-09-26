'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Box, Stack, Typography } from '@mui/material';

import calendarImg from '@/assets/img/calendarImg.png';
import { ADULT_CARE_CO_PARENTING } from '../core/text';

const MotionBox = motion.create(Box);
const AdultCareCoParenting = () => {
  const greenBoxRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(greenBoxRef, { once: true, amount: 0.3 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });

  // 이미지 그룹 (샘플: 동일 이미지 사용)
  const imageGroups = [
    [calendarImg, calendarImg],
    [calendarImg, calendarImg],
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-around',
        minHeight: '100vh',
        width: '100%',
        bgcolor: '#fff',
        px: { xs: 2, md: 4 },
        py: { xs: 'clamp(40px,5vw,100px)', md: 8 },
        gap: { xs: 6, md: 4 },
      }}
    >
      {/* 텍스트 영역 */}
      <MotionBox
        ref={textRef}
        initial={{ opacity: 0, x: -60 }}
        animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        sx={{
          flex: 1,
          maxWidth: 800,
          textAlign: 'center',
          display: 'flex',
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
          sx={{ fontSize: 'clamp(1rem, 1.5625vw, 30px)', lineHeight: 1.6, whiteSpace: 'pre-line' }}
        >
          {ADULT_CARE_CO_PARENTING.description}
        </MotionBox>
      </MotionBox>

      {/* 이미지 영역 */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: { xs: 'clamp(40px,7vw,450px)', md: 0 },
          width: '100%',
        }}
      >
        <MotionBox
          ref={greenBoxRef}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            py: 'clamp(20px, 3vw, 40px)',
            borderRadius: '24px',
            backgroundColor: '#133f3c',
            overflow: 'visible',
            // height responsive
            height: 'clamp(220px, 20.8vw, 400px)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(20px,4vw,80px)',
              width: '100%',
            }}
          >
            {imageGroups.map((group, i) => (
              <Box key={i} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: 'clamp(220px, 20.8vw, 400px)',
                    height: 'clamp(220px, 20.8vw, 400px)',
                  }}
                >
                  {/* 이미지 A */}
                  <MotionBox
                    initial={{ opacity: 0, y: i === 0 ? 60 : -60 }}
                    animate={isInView ? { opacity: 1, y: i === 0 ? 0 : 0 } : { opacity: 0, y: i === 0 ? 60 : -60 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: 'easeOut' }}
                    sx={{
                      position: 'absolute',
                      zIndex: 10,
                      ...(i === 0 ? { bottom: '-30px', right: 0 } : { top: '-75px', left: 0 }),
                    }}
                  >
                    <Box sx={{ position: 'relative', width: { xs: 180, md: 'auto' }, height: { xs: 180, md: 'auto' } }}>
                      <Image src={group[0]} alt={`Group ${i + 1} Img A`} style={{ borderRadius: 16, objectFit: 'cover' }} height={600} />
                    </Box>
                  </MotionBox>

                  {/* 이미지 B */}
                  <MotionBox
                    initial={{ opacity: 0, y: i === 0 ? -60 : 60 }}
                    animate={isInView ? { opacity: 1, y: i === 0 ? 0 : 0 } : { opacity: 0, y: i === 0 ? -60 : 60 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: 'easeOut' }}
                    sx={{
                      position: 'absolute',
                      zIndex: 20,
                      ...(i === 0 ? { top: '-75px', right: '-80px' } : { bottom: '-30px', right: '-80px' }),
                    }}
                  >
                    <Box sx={{ position: 'relative', width: { xs: 180, md: 'auto' }, height: { xs: 180, md: 'auto' } }}>
                      <Image src={group[1]} alt={`Group ${i + 1} Img B`} style={{ borderRadius: 16, objectFit: 'cover' }} height={600} />
                    </Box>
                  </MotionBox>
                </Box>
              </Box>
            ))}
          </Box>
        </MotionBox>

        {/* 네이밍 */}
        <Stack
          direction='row'
          spacing={{ xs: 8, md: 12 }}
          sx={{
            mt: 'clamp(32px,7vw,360px)',
            width: '100%',
            justifyContent: 'center',
            gap: { xs: 8, md: 12 },
          }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <Typography sx={{ fontSize: { xs: '0.75rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', xl: '1.875rem' }, fontWeight: 600 }}>Mother&apos;s AI.DUL</Typography>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <Typography sx={{ fontSize: { xs: '0.75rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', xl: '1.875rem' }, fontWeight: 600 }}>Father&apos;s AI.DUL</Typography>
          </MotionBox>
        </Stack>
      </Box>
    </Box>
  );
};
export default AdultCareCoParenting;
