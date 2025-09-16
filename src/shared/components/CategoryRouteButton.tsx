'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { Box, Button, Typography } from '@mui/material';

import communityImg from '@/assets/img/community_Img.png';
import educationalImg from '@/assets/img/educational_Img.png';
import medicalImg from '@/assets/img/medical_Img.png';
import professionalImg from '@/assets/img/professional_Img.png';

const CATEGORY_CONFIG = {
  educational: { src: educationalImg, alt: '교육기관', text: '교육기관' },
  community: { src: communityImg, alt: '커뮤니티', text: '커뮤니티' },
  medical: { src: medicalImg, alt: '의료기관', text: '의료기관' },
  professional: { src: professionalImg, alt: '전문기관', text: '전문기관' },
} as const;

export type CategoryType = keyof typeof CATEGORY_CONFIG;

interface Props {
  type: CategoryType;
  url: string;
  textPosition?: 'top' | 'bottom';
  sx?: object; // 추가로 스타일 커스텀 시 사용
}

export default function CategoryRouteButton({ type, url, textPosition = 'bottom', sx = {} }: Props) {
  const category = CATEGORY_CONFIG[type];
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => router.push(url), 300);
  };

  return (
    <>
      <Button
        component={motion.button}
        onClick={handleClick}
        disableRipple
        sx={{
          p: 0,
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: { xs: '6rem', md: '8rem', xl: '16rem' },
          minHeight: { xs: '6rem', md: '8rem', xl: '16rem' },
          bgcolor: 'transparent',
          gap: { xs: 2, md: 3 },
          transition: 'transform 0.3s',
          '&:hover': { transform: 'scale(1.1)' },
          ...sx,
        }}
        initial={{ opacity: 0, y: 60 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          opacity: { duration: 0.5, ease: 'easeOut' },
          y: {
            duration: 1.2,
            repeat: Infinity,
          },
        }}
      >
        {textPosition === 'top' && (
          <Typography variant='h6' color='black' fontWeight='bold' sx={{ mb: 1, fontSize: { md: 24, xl: 40 } }}>
            {category.text}
          </Typography>
        )}

        <Box
          sx={{
            position: 'relative',
            width: { xs: '6rem', md: '11rem', xl: '13rem' },
            height: { xs: '6rem', md: '11rem', xl: '13rem' },
          }}
        >
          <Image src={category.src} alt={category.alt} fill sizes='(max-width:768px) 80vw, 20vw' style={{ objectFit: 'contain' }} />
        </Box>

        {textPosition === 'bottom' && (
          <Typography variant='h6' color='black' fontWeight='bold' sx={{ mt: 1, fontSize: { md: 24, xl: 40 } }}>
            {category.text}
          </Typography>
        )}
      </Button>

      {isAnimating &&
        typeof window !== 'undefined' &&
        createPortal(
          <Box
            sx={{
              position: 'fixed',
              inset: 0,
              bgcolor: 'white',
              zIndex: 9999,
              opacity: 0,
              animation: 'fadeToWhite 0.3s ease-in-out forwards',
            }}
            onAnimationEnd={() => setIsAnimating(false)}
          />,
          document.body,
        )}
    </>
  );
}
