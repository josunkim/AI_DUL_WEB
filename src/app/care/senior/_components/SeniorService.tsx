'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Box, Stack } from '@mui/material';
import smartWatch from '@/assets/img/smartWatch.png';
import seniorAi from '@/assets/img/seniorAi.png';
import seniorTablet from '@/assets/img/seniorTablet.png';
import calendarImg from '@/assets/img/calendarImg.png';
import whiteArrowImg from '@/assets/img/whiteArrowImg.svg';
import { SENIOR_CARE } from '../core/text';
const MotionBox = motion.create(Box);

const SeniorCareIntroSection = () => {
  const greenBoxRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(greenBoxRef, { once: true, amount: 0.3 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        bgcolor: 'background.paper',
      }}
    >
      {/* 초록색 박스 */}
      <MotionBox ref={greenBoxRef} initial={{ opacity: 0, y: 60 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: { xs: 300, sm: 400, md: 500, lg: 550, xl: 600 },
            height: 400,
            bgcolor: '#133f3c',
            borderRadius: '24px',
            pb: 5,
            position: 'relative',
          }}
        >
          {/* 상단 2개 + 하단 1개 역삼각형 이미지 */}
          <Box
            sx={{
              position: 'relative',
              flex: 1,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MotionBox
              style={{ position: 'absolute', top: '-0%', left: 0, zIndex: 10, borderRadius: '100%' }}
              initial={{ opacity: 0, y: 64 }}
              animate={isInView ? { opacity: 1, y: 24 } : { opacity: 0, y: 64 }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            >
              <Image src={smartWatch} alt='스마트밴드' width={200} height={200} />
            </MotionBox>

            <MotionBox
              style={{ position: 'absolute', top: '-0%', right: 0, zIndex: 10 }}
              initial={{ opacity: 0, y: 64 }}
              animate={isInView ? { opacity: 1, y: 24 } : { opacity: 0, y: 64 }}
              transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            >
              <Image src={seniorAi} alt='노부부와 로봇' width={200} height={200} />
            </MotionBox>

            <MotionBox
              style={{
                position: 'absolute',
                bottom: '-100',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
              }}
              initial={{ opacity: 0, y: 64 }}
              animate={isInView ? { opacity: 1, y: 24 } : { opacity: 0, y: 64 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            >
              <Image src={seniorTablet} alt='벤치에 앉은 노부부' width={200} height={200} />
            </MotionBox>
          </Box>

          {/* 중앙 화살표 2개 */}
          <Stack
            spacing={2}
            sx={{
              minWidth: 80,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MotionBox initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}>
              <Image src={whiteArrowImg} alt='왼쪽→오른쪽' width={52} height={30} />
            </MotionBox>
            <MotionBox initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}>
              <Image src={whiteArrowImg} alt='오른쪽→왼쪽' width={52} height={30} style={{ transform: 'rotate(180deg)' }} />
            </MotionBox>
          </Stack>

          {/* 오른쪽: 캘린더 */}
          <MotionBox
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: 180,
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
          >
            <Image src={calendarImg} alt="Family's AI.DUL" height={500} />
          </MotionBox>
        </Box>
      </MotionBox>

      {/* 오른쪽 텍스트 설명 */}
      <MotionBox
        ref={textRef}
        style={{ flex: 1 }}
        initial={{ opacity: 0, x: 60 }}
        animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Stack
          alignItems='center'
          textAlign='center'
          spacing={4}
          sx={{
            maxWidth: 800,
            height: 520,
            mx: 'auto',
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
            transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
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
            transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
          >
            {SENIOR_CARE.description}
          </motion.p>
        </Stack>
      </MotionBox>
    </Box>
  );
};
export default SeniorCareIntroSection;
