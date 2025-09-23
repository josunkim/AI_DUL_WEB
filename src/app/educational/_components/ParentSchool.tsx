'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import DULImg from '@/assets/img/DULImg.png';
import whiteArrowImg from '@/assets/img/whiteArrowImg.svg';
import logoImg from '@/assets/img/logoImg.png';

export default function ParentSchool() {
  const greenBoxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(greenBoxRef, { once: true, amount: 0.3 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });

  return (
    <Box display='flex' height='100vh' width='100%' justifyContent='center' bgcolor='white' px={4}>
      {/* 왼쪽 텍스트 영역 */}
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, x: -60 }}
        animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ flex: 1, maxWidth: '45%', marginBottom: '3rem', paddingRight: '4rem', height: 640, justifyContent: 'center', alignContent: 'center' }}
      >
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}>
          <Typography variant='h2' fontWeight='bold' sx={{ fontSize: 'clamp(1.2rem, 3.125vw, 60px)', mb: 2 }}>
            Parent-School
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}>
          <Typography fontWeight='600' sx={{ fontSize: 'clamp(1rem, 1.875vw, 36px)', mb: 2 }}>
            AI.DUL을 통한 부모 - 교사 연동
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}>
          <Typography sx={{ fontSize: 'clamp(1rem, 1.5625vw, 30px)', lineHeight: 1.5 }}>
            담당 원아의 개별 특성을 이해하고
            <br />
            맞춤 지도 솔루션을 제공합니다
            <br />
            AI 전문가가 교육기관과 가정을 중재하고,
            <br />
            교사의 정신건강을 관리합니다
          </Typography>
        </motion.div>
      </motion.div>

      {/* 오른쪽 이미지+네이밍 영역 */}
      <Box display='flex' flex={1} flexDirection='column' justifyContent='center' alignItems='center'>
        {/* 초록색 박스 */}
        <motion.div
          ref={greenBoxRef}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            position: 'relative',
            display: 'flex',
            height: 400,
            maxWidth: 900,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 24,
            backgroundColor: '#133f3c',
            overflow: 'visible',
          }}
        >
          {/* 왼쪽 앱 */}
          <Box position='relative' width={200} height='100%' display='flex' justifyContent='center' alignItems='center'>
            <Image src={DULImg} alt='어플1' fill />
          </Box>

          {/* 화살표 */}
          <Stack mx={2} spacing={1} alignItems='center'>
            <Image src={whiteArrowImg} alt='왼쪽 화살표' width={40} className='-scale-x-100' />
            <Image src={whiteArrowImg} alt='오른쪽 화살표' width={40} />
          </Stack>

          {/* 중앙 로고 */}
          <Box position='relative' width={200} height='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Image src={logoImg} alt='로고' width={100} height={100} />
            <Typography mt={1} fontWeight='bold' color='white'>
              AI 기반 예측 및 솔루션
            </Typography>
          </Box>

          {/* 오른쪽 화살표 */}
          <Stack mx={2} spacing={1} alignItems='center'>
            <Image src={whiteArrowImg} alt='왼쪽 화살표' width={40} className='-scale-x-100' />
            <Image src={whiteArrowImg} alt='오른쪽 화살표' width={40} />
          </Stack>

          {/* 오른쪽 앱 이미지 3개 겹치기 */}
          <Box position='relative' width={200} height='100%' display='flex' justifyContent='center' alignItems='center'>
            <Image src={DULImg} alt='어플2' width={160} style={{ position: 'absolute', top: -48, left: 24, transform: 'rotate(-10deg)' }} />
            <Image src={DULImg} alt='어플3' width={160} style={{ position: 'absolute', top: 0, left: 40, transform: 'rotate(5deg)' }} />
            <Image src={DULImg} alt='어플4' width={160} style={{ position: 'absolute', top: 48, left: 12, transform: 'rotate(25deg)' }} />
          </Box>
        </motion.div>

        {/* 네이밍 */}
        <Stack mt={6} direction='row' spacing={12} justifyContent='center' width='100%'>
          <Typography variant='h4' fontWeight='bold'>
            Teacher&apos;s AI.DUL
          </Typography>
          <Typography variant='h4' fontWeight='bold'>
            Parent&apos;s AI.DUL
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
