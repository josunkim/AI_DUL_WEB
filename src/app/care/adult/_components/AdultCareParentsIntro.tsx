'use client';

import { Box, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { ADULT_CARE_PARENTS } from '../core/text';

const MotionBox = motion.create(Box);

const AdultCareParentsIntro = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <Box
      ref={sectionRef}
      component='section'
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        bgcolor: 'background.paper',
        gap: { xs: 4, md: 6, xl: 8 },
        p: { xs: 2, md: 4, lg: 8 },
        flexDirection: { xs: 'column-reverse', md: 'row' },
      }}
    >
      {/* 이미지 영역 */}
      <motion.div style={{ width: '100%', height: '100%' }} initial={{ opacity: 0, y: 60 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: 'easeOut' }}>
        <video
          style={{
            width: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
          }}
          src={'/assets/video/ai_angel.mp4'}
          autoPlay
          loop
          muted
          playsInline
        />
      </motion.div>

      {/* 텍스트 영역 */}
      <motion.div style={{ width: '100%', height: '100%' }} initial={{ opacity: 0, x: 60 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, ease: 'easeOut' }}>
        <Box>
          <Image src={'/assets/img/i-angel.svg'} alt='i-angellogo' width={200} height={100} />
        </Box>
        <Typography
          variant='h2'
          fontWeight='bold'
          sx={{
            textAlign: 'start',
            fontSize: 'clamp(32px, 3.125vw, 60px)',
            mb: 4,
            whiteSpace: 'pre-line',
          }}
        >
          {ADULT_CARE_PARENTS.title}
        </Typography>
        <Typography
          sx={{
            fontSize: 'clamp(1rem, 1.5625vw, 30px)',
            lineHeight: 1.6,
            whiteSpace: 'pre-line',
          }}
        >
          {ADULT_CARE_PARENTS.description}
        </Typography>
      </motion.div>
    </Box>
  );
};
export default AdultCareParentsIntro;
