import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import Image from 'next/image';
import DULImg from '/public/assets/img/ai_talk.svg';
import whiteArrowImg from '/public/assets/img/whiteArrowImg.svg';
import logoImg from '/public/assets/img/logoImg.svg';
import { motion } from 'framer-motion';
import { RefObject } from 'react';

interface ParentSchoolImageBoxProps {
  greenBoxRef: RefObject<HTMLDivElement | null>;
  isInView: boolean;
}
const MotionBox = motion(Box);

// 화살표 그룹 컴포넌트
const ArrowGroup = () => (
  <Stack width={'10%'} spacing={2} justifyContent='center' alignItems='center' zIndex={1}>
    <Image src={whiteArrowImg} alt='왼쪽 화살표' width={20} />
    <Image src={whiteArrowImg} alt='오른쪽 화살표' width={20} />
  </Stack>
);

export const ParentSchoolImageBox = ({ greenBoxRef, isInView }: ParentSchoolImageBoxProps) => {
  return (
    <Stack direction='row' width='100%' height='100%' px={{ xs: 0, md: 5 }} position='relative' justifyContent='space-around' alignItems='center'>
      {/* 왼쪽 Teacher 앱 */}
      <MotionBox
        sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItem: 'center', width: '30%', minWidth: 60, zIndex: 1, aspectRatio: '9/16' }}
        whileHover={{ scale: 1.2, rotate: 2 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Image src={DULImg} alt='어플1' fill style={{ objectFit: 'contain' }} />
        <Typography
          sx={{
            width: '100%',
            position: 'absolute',
            bottom: '-10%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          fontWeight={'bold'}
        >
          Teacher&apos;s AI.DUL
        </Typography>
      </MotionBox>

      {/* 화살표 */}
      <ArrowGroup />

      {/* 중앙 로고 */}
      <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '20%', minWidth: '80px', zIndex: 1, aspectRatio: '1/1' }}>
        <Image src={logoImg} alt='로고' fill style={{ objectFit: 'contain' }} />
        <Typography
          sx={{
            width: '100%',
            position: 'absolute',
            bottom: '-40%',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: 'clamp(0.5rem,2vw,1rem)',
          }}
          whiteSpace={'nowrap'}
          fontWeight='bold'
          color='white'
          textAlign='center'
        >
          AI 기반 예측 및 솔루션
        </Typography>
      </Box>

      {/* 화살표 */}
      <ArrowGroup />

      {/* 오른쪽 Parent 앱 (3개 겹치기만 relative) */}

      <Box sx={{ position: 'relative', width: '30%', minWidth: 80, aspectRatio: '9/16' }}>
        <MotionBox
          sx={{ zIndex: 3, position: 'absolute', top: 0, left: 30, width: '80%', height: '80%' }}
          whileHover={{ scale: 1.05, zIndex: 5, transform: 'rotate(10deg)' }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <Image src={DULImg} alt='어플2' fill style={{ objectFit: 'contain', transform: 'rotate(-10deg)' }} />
        </MotionBox>

        <MotionBox
          sx={{ zIndex: 2, position: 'absolute', top: 40, left: 50, width: '80%', height: '80%', transform: 'rotate(-5deg)' }}
          whileHover={{ scale: 1.05, zIndex: 6 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <Image src={DULImg} alt='어플3' fill style={{ objectFit: 'contain', transform: 'rotate(5deg)' }} />
        </MotionBox>

        <MotionBox
          sx={{ zIndex: 1, position: 'absolute', bottom: 10, left: 20, width: '80%', height: '80%' }}
          whileHover={{ scale: 1.05, zIndex: 7, transform: 'rotate(-20deg)' }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <Image src={DULImg} alt='어플4' fill style={{ objectFit: 'contain', transform: 'rotate(20deg)' }} />
        </MotionBox>

        <Typography
          sx={{
            width: '100%',
            position: 'absolute',
            bottom: '-10%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          fontWeight='bold'
        >
          Parent&apos;s AI.DUL
        </Typography>
      </Box>

      {/* 녹색 박스 */}
      <motion.div
        ref={greenBoxRef}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          width: '100%',
          height: '40%',
          position: 'absolute',
          borderRadius: 24,
          backgroundColor: '#133f3c',
          zIndex: 0, // 뒤로 보내기
        }}
      />
    </Stack>
  );
};
