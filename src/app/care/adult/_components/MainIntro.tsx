'use client';

import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';

const title = '함께 성장하는 부모 솔루션';

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

export default function MainIntro() {
  return (
    <Box
      component='section'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        bgcolor: '#ffffff',
      }}
    >
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        {/* 제목 */}
        <Typography
          component='h1'
          fontWeight='bold'
          gutterBottom
          sx={{
            mb: 2,
            fontSize: 'clamp(1.5rem, 4.17vw, 5rem)', // min 24px, max 80px
            textAlign: 'center',
          }}
        >
          {title.split('').map((char, i) => (
            <motion.span key={i} custom={i} variants={letterVariants} initial='hidden' animate='visible' style={{ display: 'inline-block' }}>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </Typography>

        {/* 설명문 */}
        <Typography
          component='p'
          textAlign='center'
          sx={{
            fontSize: 'clamp(0.7rem, 2.083vw, 2.5rem)', // min 약 11px, max 40px
            lineHeight: { xs: 1.6, md: 2 },
            mt: 4,
          }}
        >
          데이터 기반의 기질 조합과 가족 간 상호작용을 과학적으로 분석한
          <br />
          자녀 성장에 최적화된 가족 전담 AI 상담 및 관리 서비스
        </Typography>
      </motion.div>
    </Box>
  );
}
