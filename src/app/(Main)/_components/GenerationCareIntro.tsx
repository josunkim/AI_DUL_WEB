'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import childImg from '@/assets/img/childImg.png';
import adultImg from '@/assets/img/adultImg.png';
import seniorImg from '@/assets/img/seniorImg.png';
import { GenerationButton } from './GenerationButton'; // MUI 변환된 버전 사용
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { PATH } from '@/shared/Constant';
import { GENERATION } from '../core/text';

const MotionBox = motion.create(Box);
export const GenerationCareIntro = () => {
  const buttonsRef = React.useRef(null);
  const isInView = useInView(buttonsRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <Box
      component='section'
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: { xs: '2.5rem', md: '6rem', xl: '10rem' },

        bgcolor: 'background.paper',
      }}
    >
      {/* 제목 */}
      <MotionBox initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.8, delay: 0.1 }}>
        <Typography
          component='h2'
          fontWeight='bold'
          textAlign='center'
          sx={{
            fontSize: { xs: 'clamp(0.7rem,4vw,4rem)' },
          }}
        >
          {GENERATION.title}
          <Box
            component='span'
            sx={{
              fontWeight: 800,
              fontSize: { xs: 'clamp(1rem,4vw,80px)' },
            }}
          >
            {GENERATION.mainTitle}
          </Box>
        </Typography>
      </MotionBox>

      {/* 버튼 영역 */}
      <MotionBox ref={buttonsRef} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.8, delay: 0.3 }}>
        <Stack direction={{ xs: 'row', sm: 'row', xl: 'row' }} spacing={{ xs: 2, md: 5 }} justifyContent='center' alignItems='center'>
          <GenerationButton image={childImg} text='아동 성장' url={PATH.CARE_CHILD} />
          <GenerationButton image={adultImg} text='성인 역할' url={PATH.CARE_ADULT} />
          <GenerationButton image={seniorImg} text='노인 웰빙' url={PATH.CARE_SENIOR} />
        </Stack>
      </MotionBox>
    </Box>
  );
};
