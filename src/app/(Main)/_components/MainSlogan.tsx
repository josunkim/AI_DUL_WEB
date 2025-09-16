'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const MainSlogan = () => {
  const spanRef = React.useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(spanRef, { once: true, amount: 0.7 });

  return (
    <Container
      component='section'
      disableGutters
      sx={{
        mb: { xs: 5, md: 0 },
        minHeight: { xs: 500, md: '100vh' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 1.5, md: 6 },
        bgcolor: 'white',
        textAlign: 'center',
        py: { xs: 4, md: 10 },
      }}
    >
      {/* 메인 슬로건 */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true, amount: 0.7 }}>
        <Typography
          component='h2'
          sx={{
            width: '100%',
            maxWidth: { xs: 320, md: 800, xl: 1300 },
            fontWeight: 'bold',
            textAlign: { xs: 'center', sm: 'left' },
            fontSize: {
              xs: 'clamp(1.25rem,4vw,4rem)',
              md: '3rem',
            },
            lineHeight: {
              xs: '2rem',
              md: '4rem',
              xl: '7rem',
            },
            mx: 'auto',
            mt: { xl: 6 },
          }}
        >
          <Typography
            component='p'
            sx={{
              fontSize: 'clamp(1.25rem,4vw,4rem)',
              textAlign: 'start',
            }}
          >
            같은 자극, 다른 반응
          </Typography>
          <Typography
            component='p'
            sx={{
              fontSize: 'clamp(1.25rem,4vw,4rem)',
              textAlign: 'end',
            }}
          >
            <Box component='span' sx={{ fontSize: [30, 40, 80], fontWeight: 800 }}>
              AI.DUL
            </Box>
            은 그 차이를 깊이 이해합니다
          </Typography>
        </Typography>
      </motion.div>

      {/* 설명 문단 */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true, amount: 0.7 }}>
        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.5rem', xl: '2rem' },
            lineHeight: { xs: '1.5rem', md: '2.5rem', xl: '4rem' },
            mt: 2,
          }}
        >
          차별적 민감성 이론(Differential Susceptibility Theory)을 바탕으로
          <br />
          뇌가 환경에 반응하는 개인의 특성을 분석하여
          <br />
          아이부터 노인까지 전 생애 맞춤형 성장과 정신건강을 설계합니다
        </Typography>
      </motion.div>

      {/* 애니메이션 텍스트 */}
      <Box
        ref={spanRef}
        sx={{
          textAlign: 'left',
          fontSize: { xs: '2rem', md: '4rem', xl: '6rem' },
          fontWeight: 'bold',
          mt: 3,
        }}
      >
        {'For Better or For Worse'.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: [30, 0, 0, -16, 0],
                  }
                : { opacity: 0, y: 30 }
            }
            transition={{
              delay: i * 0.06,
              duration: 0.5 + 2 + 0.3,
              ease: [0.42, 0, 0.58, 1],
              times: [0, 0.5 / (0.5 + 2 + 0.3), 2.0 / (0.5 + 2 + 0.3), 2.15 / (0.5 + 2 + 0.3), 1],
            }}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </Box>
    </Container>
  );
};
