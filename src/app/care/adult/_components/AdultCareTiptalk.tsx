'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Box } from '@mui/material';

const MotionBox = motion(Box);

import calendarImg from '@/assets/img/calendarImg.png';

export default function AdultCareTiptalk() {
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
      {/* 텍스트 영역 */}
      <MotionBox
        ref={textRef}
        initial={{ opacity: 0, x: -60 }}
        animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: 'clamp(300px, 60vw, 1152px)',
          height: 'clamp(200px, 27.08vw, 520px)',
          pl: 'clamp(1rem,4vw,4rem)',
          gap: 2,
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
          sx={{ fontWeight: 'bold', mb: 3, width: '100%', fontSize: 'clamp(1.2rem,3.125vw,60px)' }}
        >
          팁톡(Tiptalk): 커뮤니티
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
          sx={{ fontWeight: 600, mb: 3, fontSize: 'clamp(20px, 1.875vw, 36px)' }}
        >
          &quot;육아정보가 흩어져 있어서 바쁜 날은 그냥 포기해요&quot;
          <br />
          &quot;수다방은 많은데 믿을만한 조언이 없어요&quot;
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
          sx={{ fontSize: 'clamp(1rem, 1.5625vw, 30px)', lineHeight: 1.6 }}
        >
          &apos;팁톡&apos;은 다양한 소통을 하는 공간입니다
          <br />
          유사한 문제를 경험하고 관심사를 공유하는 가정을 연결합니다
          <br />
          부모 간 육아 팁, 최신 아이템, 다양한 고민을 공유하고,
          <br />
          맞춤형으로 검증된 정보를 제공합니다
        </MotionBox>
      </MotionBox>

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
            alt='AdultCareTiptalk 이미지'
            fill
            style={{
              borderRadius: 16,
              objectFit: 'contain',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.25))',
            }}
          />
        </MotionBox>
      </MotionBox>
    </Box>
  );
}
