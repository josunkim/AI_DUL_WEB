'use client';

import { Box, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import calendarImg from '@/assets/img/calendarImg.png';
import DULImg from '@/assets/img/DULImg.png';
import akaiveImg from '@/assets/img/akaiveImg.png';
import Image from 'next/image';

export default function AdultCareParentsIntro() {
  const greenBoxRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(greenBoxRef, { once: true, amount: 0.3 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });

  const images = [calendarImg, DULImg, akaiveImg, calendarImg];

  const imageStyles = [
    { y: 24, z: 10, ml: 0 }, // 1번
    { y: -24, z: 20, ml: -60 }, // 2번
    { y: 24, z: 30, ml: -60 }, // 3번
    { y: -24, z: 40, ml: -60 }, // 4번
  ];

  return (
    <Box
      component='section'
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        bgcolor: '#ffffff',
        gap: { xs: 4, md: 6, xl: 8 },
        px: { xs: 2, md: 4, lg: 8 },
        flexDirection: { xs: 'column', lg: 'row' },
      }}
    >
      {/* 이미지 영역 */}
      <motion.div ref={greenBoxRef} initial={{ opacity: 0, y: 60 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 400,
            minWidth: 600,
            borderRadius: 3,
            backgroundColor: '#133f3c',
            overflow: 'visible',
            pb: 2,
            position: 'relative',
          }}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: imageStyles[i].y + 40 }}
              animate={isInView ? { opacity: 1, y: imageStyles[i].y } : { opacity: 0, y: imageStyles[i].y + 40 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05, ease: 'easeOut' }}
              style={{
                zIndex: imageStyles[i].z,
                marginLeft: i !== 0 ? imageStyles[i].ml : 0,
                position: 'relative',
              }}
            >
              <Image src={img} alt={`Adult's AI.DUL ${i + 1}`} className='rounded-2xl shadow-xl' style={{ borderRadius: '1rem', objectFit: 'cover' }} height={600} />
            </motion.div>
          ))}
        </Box>
      </motion.div>

      {/* 텍스트 영역 */}
      <motion.div ref={textRef} initial={{ opacity: 0, x: 60 }} animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
        <Typography
          variant='h2'
          fontWeight='bold'
          sx={{
            textAlign: 'start',
            fontSize: 'clamp(28px, 3.125vw, 60px)',
            mb: 4,
          }}
        >
          Parent&apos;s AI.DUL
        </Typography>

        <Typography
          textAlign='start'
          sx={{
            // alignContent: 'start',
            fontSize: 'clamp(1rem, 1.5625vw, 30px)',
            lineHeight: 1.6,
          }}
        >
          전문 검사를 기반으로 분석된
          <br />
          가족 개개인의 특성을 통해
          <br />
          잠재된 문제를 예측하고
          <br />
          맞춤형 데일리 양육 코칭과
          <br />
          24시간 전문 AI 상담을 제공합니다
        </Typography>
      </motion.div>
    </Box>
  );
}
