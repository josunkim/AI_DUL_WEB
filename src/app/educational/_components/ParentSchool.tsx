'use client';

import { easeOut, motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PARENT_SCHOOL } from '../core/text';
import { ParentSchoolImageBox } from './ParentSchoolImageBox';

export default function ParentSchool() {
  const greenBoxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(greenBoxRef, { once: true, amount: 0.3 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });
  const textAnimation = (delay?: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.4, delay: delay, ease: easeOut },
  });

  return (
    <Box display='flex' flexDirection={{ xs: 'column', sm: 'column', md: 'row' }} height='100vh' width='100%' justifyContent='center' textAlign={'center'} bgcolor='white' px={{ xs: 0, md: 4 }}>
      {/* 왼쪽 텍스트 영역 */}
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, x: -60 }}
        animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
        transition={{ duration: 0.6, ease: easeOut }}
        style={{ width: '100%', justifyContent: 'center', alignContent: 'center' }}
      >
        <motion.div {...textAnimation()}>
          <Typography variant='h2' fontWeight='bold' sx={{ fontSize: 'clamp(1.2rem, 3.125vw, 60px)', mb: 2 }}>
            {PARENT_SCHOOL.title}
          </Typography>
        </motion.div>
        <motion.div {...textAnimation(0.4)}>
          <Typography fontWeight='600' sx={{ fontSize: 'clamp(1rem, 1.875vw, 36px)', mb: 2 }}>
            {PARENT_SCHOOL.subTitle}
          </Typography>
        </motion.div>
        <motion.div {...textAnimation(0.8)}>
          <Typography sx={{ fontSize: 'clamp(1rem, 1.5625vw, 30px)', whiteSpace: 'pre-line' }}>{PARENT_SCHOOL.description}</Typography>
        </motion.div>
      </motion.div>
      <ParentSchoolImageBox greenBoxRef={greenBoxRef} isInView={isInView} />
    </Box>
  );
}
