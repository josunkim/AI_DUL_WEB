'use client';

import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
    },
  }),
};

export const MainIntro = () => {
  const titleParts = ['가족의 삶을 연구하는 전문가가 만든 기업, ', 'AI.DUL'];

  return (
    <Box
      component='section'
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        bgcolor: '#ffffff',
        px: 2,
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4 }}
      >
        <Typography
          variant='h1'
          sx={{
            mb: 5,
            fontWeight: 'bold',
            fontSize: 'clamp(1.5rem, 4.17vw, 72px)',
          }}
        >
          {titleParts[0].split('').map((char, i) => (
            <Box key={`part1-${i}`} component={motion.span} custom={i} variants={letterVariants} initial='hidden' animate='visible' sx={{ display: 'inline-block' }}>
              {char === ' ' ? '\u00A0' : char}
            </Box>
          ))}
          <Box
            component={motion.span}
            custom={titleParts[0].length}
            variants={letterVariants}
            initial='hidden'
            animate='visible'
            sx={{
              display: 'inline-block',
              fontWeight: 800,
              fontSize: 'clamp(1.5rem, 4.17vw, 80px)',
            }}
          >
            {titleParts[1]}
          </Box>
        </Typography>

        <Typography
          sx={{
            mb: 4,
            lineHeight: { xs: 1.6, md: 2 },
            fontSize: 'clamp(0.7rem, 2.083vw, 2.5rem)',
          }}
        >
          아동·가족·심리상담 분야의 교수, 전문상담사가 개발자와 함께 만든
          <br />
          과학 기반의 정서·성장케어 플랫폼입니다
        </Typography>

        <Typography
          sx={{
            mb: 4,
            lineHeight: { xs: 1.6, md: 2 },
            fontSize: 'clamp(0.7rem, 2.083vw, 2.5rem)',
          }}
        >
          연구로 검증된 이론, 데이터, 심리측정 기반 알고리즘을 통해
          <br />
          가족의 효과적인 변화에 필요한 솔루션만을 담았습니다
        </Typography>

        <Typography
          sx={{
            mb: 4,
            lineHeight: { xs: 1.6, md: 2 },
            fontSize: 'clamp(0.7rem, 2.083vw, 2.5rem)',
          }}
        >
          성장은 하루로 끝나지 않습니다.
        </Typography>

        <Typography
          sx={{
            lineHeight: { xs: 1.6, md: 2 },
            fontSize: 'clamp(0.7rem, 2.083vw, 2.5rem)',
          }}
        >
          <Box component='span' sx={{ fontWeight: 'bold' }}>
            AI.DUL
          </Box>
          은 한 사람의 생애를, 한 가족의 시간을
          <br />
          기술로 기록하고 예측하여 맞춤형 개입을 합니다
        </Typography>
      </Box>
    </Box>
  );
};
