import { Box, Stack } from '@mui/system';
import childTabletImg from '@/assets/img/childTabletImg.png';
import calendar from '/public/assets/img/calendar.svg';
import whiteArrowImg from '/public/assets/img/whiteArrowImg.svg';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { easeOut, motion } from 'framer-motion';
import { RefObject } from 'react';

const MotionBox = motion.create(Box);

interface ImageBoxProps {
  greenBoxRef: RefObject<HTMLDivElement | null>;
  isInView: boolean;
}

export const ImageBox = ({ greenBoxRef, isInView }: ImageBoxProps) => {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.4, delay: 0.2, ease: easeOut },
  };

  return (
    <Stack direction='row' width='100%' height='100%' px={5} position='relative' justifyContent='space-around' alignItems='center' gap={2}>
      <Box
        sx={{
          zIndex: 1,
          textAlign: 'center',
          position: 'relative',
          width: '50%',
          height: '100%',
          aspectRatio: '1 / 1.5',
        }}
      >
        <MotionBox {...fadeUp} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image src={childTabletImg} alt='tablet' fill style={{ objectFit: 'contain' }} />
        </MotionBox>
        <Typography width={'100%'} variant='h6' fontWeight='bold' fontSize={'1.25rem'} mt={2} sx={{ position: 'absolute', bottom: -30, left: '50%', transform: 'translateX(-50%)' }}>
          {"Kid's AI.DUL"}
        </Typography>
      </Box>

      <MotionBox {...fadeUp} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Stack width={'10%'} spacing={2} justifyContent='center' alignItems='center' zIndex={1}>
          <Image src={whiteArrowImg} width={40} height={40} alt='arrow right' />
          <Image src={whiteArrowImg} width={40} height={40} alt='arrow left' style={{ transform: 'scaleX(-1)' }} />
        </Stack>
      </MotionBox>

      <Box sx={{ width: '40%', zIndex: 1, textAlign: 'center', position: 'relative', aspectRatio: '1 / 2' }}>
        <MotionBox {...fadeUp} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image src={calendar} fill alt='calendar' style={{ objectFit: 'contain' }} />
        </MotionBox>
        <Typography width={'100%'} variant='h6' fontWeight='bold' fontSize={'1.25rem'} mt={2} sx={{ position: 'absolute', bottom: -30, left: '50%', transform: 'translateX(-50%)' }}>
          {"Parents' AI.DUL"}
        </Typography>
      </Box>

      <MotionBox
        ref={greenBoxRef}
        {...fadeUp}
        width='100%'
        height='70%'
        position='absolute'
        sx={{
          borderRadius: 6,
          bgcolor: '#133f3c',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </Stack>
  );
};
