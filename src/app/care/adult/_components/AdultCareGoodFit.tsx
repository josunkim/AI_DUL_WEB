'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Box, Typography } from '@mui/material';

const MotionBox = motion(Box);

import calendarImg from '@/assets/img/calendarImg.png';

export default function AdultCareGoodFit() {
  const greenBoxRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(greenBoxRef, { once: true, amount: 0.3 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });

  return (
    <Box
      component='section'
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minHeight: '100vh',
        bgcolor: 'white',
        gap: 4,
        px: { xs: 2, md: 4 },
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
          borderRadius: '24px',
          backgroundColor: '#133f3c',
          overflow: 'visible',
          width: 'clamp(200px, 20.8vw, 400px)',
          height: 'clamp(200px, 20.8vw, 400px)',
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          sx={{
            position: 'relative',
            width: 'clamp(120px, 20.8vw, 400px)',
            height: 'clamp(180px, 31.25vw, 600px)',
            zIndex: 10,
          }}
        >
          <Image
            src={calendarImg}
            alt='AdultCareGoodFit 이미지'
            fill
            style={{
              borderRadius: 16,
              objectFit: 'contain',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.25))',
            }}
          />
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
          mb: { xs: 4, md: 0 },
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
          sx={{
            fontWeight: 'bold',
            mb: 3,
            width: '100%',
            fontSize: 'clamp(1.2rem, 3.125vw, 60px)',
          }}
        >
          굿핏(Good Fit): 맞춤형 솔루션
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
          sx={{ fontWeight: 600, mb: 3, fontSize: 'clamp(20px, 1.875vw, 36px)' }}
        >
          &quot;나와는 다른 아이, 어떻게 대해야 하죠?&quot;
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
          sx={{ fontSize: 'clamp(1rem, 1.5625vw, 30px)', lineHeight: 1.6 }}
        >
          &apos;굿핏&apos;은 우리 가족 기질 조합에 꼭 맞는 루틴을 제안합니다
          <br />
          가족의 조화는 &apos;하루 한 걸음&apos;의 실천과 노력으로 완성됩니다
          <br />
          데이터 분석을 통한 데일리 활동, 대화법, 대응 전략을 제시해
          <br />
          갈등은 줄이고, 연결은 더 깊어지는 일상을 함께합니다
        </MotionBox>
      </MotionBox>
    </Box>
  );
}
