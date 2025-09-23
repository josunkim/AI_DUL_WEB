'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import calendarImg from '@/assets/img/calendarImg.png';
const MotionBox = motion(Box);
export default function AdultCareNote() {
  const greenBoxRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(greenBoxRef, { once: true, amount: 0.3 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });

  return (
    <Box
      display='flex'
      flexDirection={{ xs: 'column-reverse', md: 'row' }}
      alignItems='center'
      justifyContent='center'
      minHeight='100vh'
      width='100%'
      px={{ xs: 2, md: 8 }}
      py={{ xs: 6, md: 12 }}
      gap={{ xs: 0, md: 4 }}
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
            alt='AdultCareNote 이미지'
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
          mb: { xs: 4, md: 4 },
        }}
      >
        <Typography
          variant='h2'
          fontWeight='bold'
          mb={4}
          fontSize='clamp(1.2rem, 3.125vw, 60px)'
          component={motion.h2}
          initial={{ opacity: 0, y: 30 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
        >
          노트(Note): 가족 공유 공간
        </Typography>

        <Typography
          fontWeight={600}
          mb={3}
          fontSize='clamp(20px, 1.875vw, 36px)'
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
        >
          &quot;바쁜 우리 부부, 서로 이야기 할 시간도 없어요&quot;
        </Typography>

        <Typography
          fontSize='clamp(1rem, 1.5625vw, 30px)'
          lineHeight={1.5}
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
        >
          &apos;노트&apos;는 마음을 전하는 가족 공간입니다
          <br />
          일상 스케줄, 놓치기 쉬운 하루의 감정과 기억을
          <br />
          부부가 함께 사진, 일기, 메모 등으로 남기고 나눕니다
        </Typography>
      </MotionBox>
    </Box>
  );
}
