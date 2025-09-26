'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import { SECTION3, STEP } from '../core/text';

const MotionBox = motion.create(Box);

const features = STEP;

const SectionWhatWeDo = () => {
  const [step, setStep] = useState(-1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startedRef = useRef(false);

  // step 증가
  useEffect(() => {
    if (step >= -1 && step < features.length) {
      timerRef.current = setTimeout(() => {
        setStep((prev) => prev + 1);
      }, 800);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [step]);

  // viewport 감지
  useEffect(() => {
    const onScroll = () => {
      if (startedRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.7) {
        startedRef.current = true;
        setTimeout(() => setStep(0), 1000);
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        minHeight: { xs: 650, md: '100vh' },
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 4, md: 8 },
      }}
    >
      {/* 제목 */}
      <MotionBox
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true, amount: 0.5 }}
        sx={{
          mt: { xs: 2, md: 6 },
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 'clamp(1.25rem,4vw,4rem)',
          lineHeight: 'clamp(2em,4vw,2.8em)',
        }}
      >
        {SECTION3.title}
      </MotionBox>

      {/* 메인 카드 영역 */}
      <Box
        sx={{
          position: 'relative',
          flexGrow: 1,
          minHeight: { xs: 400, md: 500, xl: 600 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* 1단계씩 나오는 카드 */}
        {step >= 0 && step < features.length && (
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.5s',
              zIndex: 2,
            }}
          >
            {features.map((f, i) => {
              if (i > step) return null;
              return (
                <MotionBox
                  key={i}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={step === i ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  sx={{
                    position: 'absolute',
                    bgcolor: 'white',
                    minHeight: { xs: 150, md: 200, xl: 250 },
                    maxWidth: { xs: 300, md: 400, xl: 500 },
                    p: { xs: 3, md: 6, xl: 8 },
                    textAlign: 'center',
                    borderRadius: 2,
                    boxShadow: 3,
                    pointerEvents: step === i ? 'auto' : 'none',
                  }}
                >
                  <Typography
                    variant='h3'
                    sx={{
                      mb: { xs: 1, md: 2 },
                      fontSize: { xs: '1.5rem', md: '2rem', xl: '3rem' },
                      fontWeight: 'bold',
                    }}
                  >
                    {f.title}
                  </Typography>
                  <Typography
                    sx={{
                      whiteSpace: 'pre-line',
                      fontSize: { xs: '1rem', md: '1.25rem', xl: '1.75rem' },
                    }}
                  >
                    {f.desc}
                  </Typography>
                </MotionBox>
              );
            })}
          </Box>
        )}
        {/* 최종 4개 카드 */}
        {step >= features.length && (
          <MotionBox
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            sx={{
              display: 'flex',
              flexWrap: 'wrap', // 화면 폭에 맞춰 줄바꿈
              justifyContent: 'center',
              gap: { xs: 2, md: 4 },
              mx: 'auto',
              mt: { xs: 4, md: 0 },
              maxWidth: { xs: 320, md: 900, xl: 1400 },
              zIndex: 3,
            }}
          >
            {features.map((f, i) => (
              <MotionBox
                key={i}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                sx={{
                  bgcolor: 'white',
                  textAlign: 'center',
                  p: { xs: 3, md: 4 },
                  borderRadius: 2,
                  boxShadow: 2,
                  flex: '1 1 250px', // 최소 250px, 남은 공간 균등 배분
                  maxWidth: '300px', // 최대 크기 제한
                }}
              >
                <Typography
                  variant='h4'
                  sx={{
                    mb: { xs: 1, md: 2 },
                    fontSize: { xs: '1.5rem', md: '2rem', xl: '3rem' },
                    fontWeight: 'bold',
                  }}
                >
                  {f.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '0.9rem', md: '1.1rem', xl: '1.5rem' },
                    whiteSpace: 'pre-line',
                  }}
                >
                  {f.desc}
                </Typography>
              </MotionBox>
            ))}
          </MotionBox>
        )}
      </Box>
    </Box>
  );
};
export default SectionWhatWeDo;
