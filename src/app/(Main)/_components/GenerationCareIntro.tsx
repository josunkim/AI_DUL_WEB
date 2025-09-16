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
        minHeight: { xs: 500, md: 700, xl: '100vh' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: { xs: '2.5rem', md: '6rem', xl: '10rem' },
        p: { xs: 4, md: 10 },
      }}
    >
      {/* 제목 */}
      <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.8, delay: 0.1 }}>
        <Typography
          component='h2'
          fontWeight='bold'
          textAlign='center'
          sx={{
            fontSize: { xs: 'clamp(1.25rem,4vw,4rem)' },
          }}
        >
          세대를 잇는 정서케어, 예측하고 연결하고 돌보는
          <Box
            component='span'
            sx={{
              fontWeight: 800,
              fontSize: { xs: 'clamp(1.3rem,4.1667vw,80px)' },
            }}
          >
            AI.DUL
          </Box>
        </Typography>
      </motion.div>

      {/* 버튼 영역 */}
      <motion.div ref={buttonsRef} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.8, delay: 0.3 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 5 }} justifyContent='center' alignItems='center'>
          <GenerationButton image={childImg} text='아동 성장' url={PATH.CARE_CHILD} />
          <GenerationButton image={adultImg} text='성인 역할' url={PATH.CARE_ADULT} />
          <GenerationButton image={seniorImg} text='노인 웰빙' url={PATH.CARE_SENIOR} />
        </Stack>
      </motion.div>
    </Box>
  );
};
