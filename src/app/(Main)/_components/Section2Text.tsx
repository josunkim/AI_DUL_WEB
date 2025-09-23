'use client';

import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SECTION2 } from '../core/text';

export const Section2Text = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='flex-end'
      height='100vh'
      width='100%'
      sx={{
        fontWeight: 'bold',
        color: 'common.white',
      }}
    >
      <Typography
        component={motion.div}
        variant='body1'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.4 }}
        textAlign='center'
        sx={{
          position: 'relative',
          zIndex: 10,
          pb: { xs: 5, md: 10, xl: 10 }, // padding-bottom 단계별
          fontSize: 'clamp(0.9rem, 2vw, 2.75rem)',
          lineHeight: 'clamp(1.2rem, 2.8vw, 3.5rem)',
        }}
      >
        {SECTION2.headline}&nbsp;
        <Box
          component='span'
          sx={{
            fontSize: 'clamp(1.1rem, 3vw, 3.5rem)',
            fontWeight: 'inherit',
          }}
        >
          {SECTION2.middle}
        </Box>
        {SECTION2.description}
      </Typography>
    </Box>
  );
};
