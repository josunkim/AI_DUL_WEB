'use client';

import { Box, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import childTabletImg from '@/assets/img/childTabletImg.png';
import whiteArrowImg from '@/assets/img/whiteArrowImg.svg';
import calendarImg from '@/assets/img/calendarImg.png';
import Image from 'next/image';
import { CARE_CHILDSECTION2 } from '../core/text';

const MotionBox = motion.create(Box);
const ChildApp = () => {
  const greenBoxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(greenBoxRef, { once: true, amount: 0.3 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });

  return (
    <Box
      component='section'
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        alignItems: 'center',
        w: '100%',
        bgColor: 'white',
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 6, sm: 8 },
        height: { xl: '100vh' },
        bgcolor: 'background.paper',
      }}
    >
      {/* 왼쪽 텍스트 영역 */}
      <MotionBox
        ref={textRef}
        initial={{ opacity: 0, x: -60 }}
        animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        sx={{
          mb: { xs: 6, lg: 0 },
          flex: 1,
          height: { xs: 180, sm: 260, md: 340, lg: 480, xl: 680 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'start',
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
          sx={{
            mb: { xs: 6, sm: 6, md: 6, lg: 6, xl: 6 },
            fontWeight: 'bold',
            fontSize: { xs: '1.25rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '4rem' },
          }}
        >
          {CARE_CHILDSECTION2.title}
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
          sx={{
            fontSize: { xs: '0.75rem', sm: '1rem', md: '1.125rem', lg: '1.5rem', xl: '2rem' },
            lineHeight: { xs: 1.5, sm: 1.8, md: 2, lg: 2.5, xl: 3 },
          }}
        >
          {CARE_CHILDSECTION2.description1}
          <br />
          {CARE_CHILDSECTION2.description2}
          <br />
          {CARE_CHILDSECTION2.description3}
        </MotionBox>
      </MotionBox>

      {/* 오른쪽 초록색 컨텐츠 영역 */}
      <Box
        sx={{
          flex: 1,
          mt: { xs: 16, sm: 16, lg: 0 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <MotionBox
          ref={greenBoxRef}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 2, sm: 4, md: 8, lg: 10 },
            height: { xs: 120, sm: 180, md: 240, lg: 320, xl: 400 },
            width: '100%',
            borderRadius: '2rem',
            py: { xs: 4, sm: 6, lg: 10 },
            overflow: 'visible',
            bgcolor: 'green',
          }}
        >
          {/* 이미지 그룹 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 8, sm: 12, md: 12, lg: 16 },
              pr: { xs: 0, md: 14 },
              pl: { lg: 6 },
            }}
          >
            {/* 태블릿 */}
            <Box
              sx={{
                height: { xs: 100, sm: 150, md: 200, lg: 220, xl: 400 },
                width: { xs: 100, sm: 150, md: 200, lg: 220, xl: 400 },
                position: 'relative',
              }}
            >
              <Image src={childTabletImg} alt="Kid's AI.DUL" className='rounded-2xl object-contain' fill />
            </Box>

            {/* 캘린더 */}
            <Box
              sx={{
                height: { xs: 60, sm: 100, md: 140, lg: 180, xl: 280 },
                width: { xs: 60, sm: 100, md: 140, lg: 180, xl: 280 },
                position: 'relative',
              }}
            >
              <Image src={calendarImg} alt="Parents's AI.DUL" className='overflow-visible rounded-2xl object-cover' fill />
            </Box>
          </Box>

          {/* 중앙 화살표 */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 30,
              pointerEvents: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 1, sm: 2 },
            }}
          >
            <Image src={whiteArrowImg} alt='arrow-left' width={14} height={6} style={{ transform: 'scaleX(-1)' }} />
            <Image src={whiteArrowImg} alt='arrow-right' width={14} height={6} />
          </Box>
        </MotionBox>

        {/* 네이밍 */}
        <Box
          sx={{
            mt: { xs: 4, sm: 8, lg: 12, xl: 12 },
            mr: { xs: 0, lg: 10 },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: 8, sm: 12, lg: 28, xl: 44 },
          }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <Typography sx={{ fontSize: { xs: '0.75rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', xl: '1.875rem' }, fontWeight: 600 }}>{CARE_CHILDSECTION2.imgText1}</Typography>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <Typography sx={{ fontSize: { xs: '0.75rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', xl: '1.875rem' }, fontWeight: 600 }}>{CARE_CHILDSECTION2.imgText2}</Typography>
          </MotionBox>
        </Box>
      </Box>
    </Box>
  );
};
export default ChildApp;
