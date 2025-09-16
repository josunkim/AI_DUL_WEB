'use client';

import Image from 'next/image';
import catchingPhoneImg from '@/assets/img/catchingPhoneImg.svg';
import { motion } from 'framer-motion';
import CategoryRouteButton from '@/shared/components/CategoryRouteButton';
import { Box, Container, Typography } from '@mui/material';

export const NicheSection = () => {
  // 애니메이션 variants 정의
  const centerImgVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  };
  const centerTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.05 } },
  };
  const leftTitleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };
  const leftTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.1 } },
  };

  return (
    <Container
      component='section'
      maxWidth={false}
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        width: '100%',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'start',
      }}
    >
      {/* 왼쪽 텍스트 */}
      <Box
        sx={{
          flex: { md: '0 0 50%' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 2, md: 8, xl: 10 },
          mb: { xl: 8 },
        }}
      >
        <motion.div variants={leftTitleVariants} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 1 }}>
          <Typography
            component='div'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 1, md: 2 },
              fontSize: 'clamp(1.25rem, 4vw, 4rem)',
              fontWeight: 'bold',
            }}
          >
            <Box sx={{ alignSelf: { xs: 'center', md: 'flex-end' } }}>
              <Box component='span' sx={{ fontSize: 'clamp(1.5rem, 4.5vw, 4.5rem)', fontWeight: 800 }}>
                AI.DUL
              </Box>
              은 다름을 읽고,
            </Box>
            <Box sx={{ alignSelf: { xs: 'center', md: 'flex-end' } }}>맞춤 환경을 만들어갑니다</Box>
          </Typography>
        </motion.div>

        <motion.div variants={leftTextVariants} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 1 }}>
          <Box textAlign='center'>
            <Typography fontSize={{ xs: '1rem', md: '1.1rem', xl: '1.25rem' }}>
              발달적 적소(Niche)는 <br />
              개인의 특성에 꼭 맞는, 최적의 성장 환경을 의미합니다 <br />
              개인의 차이를 읽고 각자에게 맞는 환경을 찾는 것이 중요합니다
            </Typography>
          </Box>
        </motion.div>
      </Box>

      {/* 중앙 원형 + 버튼 */}
      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', md: '60vw' },
          maxWidth: { xs: '20rem', md: '30rem', xl: '40rem' },
          aspectRatio: '1 / 1',
          overflow: 'visible', // 원과 버튼 잘림 방지
          mt: { xs: 15, md: 0 },
        }}
      >
        {/* 배경 원 */}
        <motion.svg
          width='100%'
          height='100%'
          viewBox='0 0 500 500'
          style={{ position: 'absolute', top: 0, left: 0 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <circle cx='250' cy='250' r='230' fill='#133f3c' />
          <circle cx='250' cy='250' r='180' fill='#fff' />
        </motion.svg>

        {/* 중앙 이미지 + 텍스트 */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 1, md: 2, xl: 4 },
            alignItems: 'center',
          }}
        >
          <motion.div variants={centerImgVariants} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 1 }}>
            <Box sx={{ width: { xs: '5rem', md: '8rem', xl: '12rem' }, height: { xs: '5rem', md: '8rem', xl: '12rem' } }}>
              <Image src={catchingPhoneImg} alt='중앙 이미지' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          </motion.div>

          <motion.div variants={centerTextVariants} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 1 }}>
            <Typography textAlign='center' sx={{ mt: 1, fontSize: { xs: '0.75rem', md: '1rem', xl: '1.75rem' }, fontWeight: 'bold', color: '#133f3c' }}>
              <Box component='span' sx={{ fontSize: { xs: '1rem', md: '1.25rem', xl: '1.75rem' }, fontWeight: 600 }}>
                AI.DUL
              </Box>
              에 기록된
              <br />
              마이 데이터
            </Typography>
          </motion.div>
        </Box>

        {/* 4방향 버튼 */}
        {[
          { top: -150, left: -20, type: 'educational', url: '/educational', textPosition: 'top' },
          { top: -150, right: -20, type: 'community', url: '/community', textPosition: 'top' },
          { bottom: -50, left: -20, type: 'medical', url: '/medical' },
          { bottom: -50, right: -20, type: 'professional', url: '/professional' },
        ].map((btn, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              top: btn.top,
              left: btn.left,
              bottom: btn.bottom,
              right: btn.right,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            whileHover={{ scale: 1.1 }}
          >
            <CategoryRouteButton type={btn.type as any} url={btn.url} textPosition={btn.textPosition as any} />
          </motion.div>
        ))}
      </Box>
    </Container>
  );
};
