'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { SLOGAN } from '../core/text';

const MotionBox = motion.create(Box);

export const MainSlogan = () => {
  const spanRef = React.useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(spanRef, { once: true, amount: 0.7 });

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        mb: { xs: 5, md: 0 },
        width: '100%',
        minHeight: { xs: 500, md: '100vh' },
        alignItems: 'center',
        justifyContent: 'center',
        gap: { xs: 1.5, md: 6 },
        textAlign: 'center',
        py: { xs: 4, md: 10 },
      }}
      color={'white'}
    >
      <video
        src={'/assets/video/lifeSection.mp4'}
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      {/* 메인 슬로건 */}
      <MotionBox initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true, amount: 0.7 }}>
        <Typography
          component='h2'
          sx={{
            width: '100%',
            fontWeight: 'bold',
            textAlign: { xs: 'center', sm: 'left' },
            fontSize: 'clamp(1.25rem,4vw,4rem)',
            mt: { xl: 6 },
          }}
        >
          <Typography
            component='p'
            sx={{
              width: '100%',
              fontSize: 'clamp(1.25rem,4vw,4rem)',
              textAlign: 'start',
              whiteSpace: 'none',
            }}
          >
            {SLOGAN.title}
          </Typography>
          <Typography
            component='p'
            sx={{
              fontSize: 'clamp(1.25rem,4vw,4rem)',
              textAlign: 'end',
            }}
          >
            <Box component='span' sx={{ fontSize: { xs: 30, md: 60, xl: 80 }, fontWeight: 800 }}>
              {SLOGAN.middle}
            </Box>
            {SLOGAN.mainTitle}
          </Typography>
        </Typography>
      </MotionBox>

      {/* 설명 문단 */}
      <MotionBox initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true, amount: 0.7 }}>
        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.5rem', xl: '2rem' },
            lineHeight: { xs: '1.5rem', md: '2.5rem', xl: '4rem' },
            mt: 2,
          }}
        >
          {SLOGAN.description1}
          <br />
          {SLOGAN.description2}
          <br />
          {SLOGAN.description3}
        </Typography>
      </MotionBox>

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
        {SLOGAN.point.split('').map((char, i) => (
          <MotionBox
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
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
};
