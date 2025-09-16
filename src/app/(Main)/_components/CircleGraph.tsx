'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface CircleImage {
  src: StaticImageData;
  alt: string;
  label?: string;
  style?: React.CSSProperties | string;
}

interface CircleGraphProps {
  centerText: string;
  images: CircleImage[];
}

export default function CircleGraph({ centerText, images }: CircleGraphProps) {
  const radius = 250; // 이미지 중심까지의 반지름(px)
  const center = 270; // 원의 중심 좌표(px)

  return (
    <Box position='relative' display='flex' justifyContent='center' alignItems='center' sx={{ width: 540, height: 540 }}>
      {/* 원 배경 */}
      <svg width={540} height={540} viewBox='0 0 540 540' style={{ position: 'absolute', zIndex: 1 }}>
        <circle cx={270} cy={270} r={270} fill='#133f3c' />
        <circle cx={270} cy={270} r={260} fill='#fff' />
      </svg>

      {/* 중앙 텍스트 */}
      <Typography
        component='span'
        fontSize='1.875rem' // text-3xl
        fontWeight='bold'
        color='#133f3c'
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
        }}
      >
        {centerText}
      </Typography>

      {/* 원 둘레 이미지+텍스트 */}
      {images.map((img, idx) => {
        const angle = (2 * Math.PI * idx) / images.length - Math.PI / 2; // 12시 방향 시작
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);

        return (
          <Box
            key={idx}
            position='absolute'
            zIndex={1}
            display='flex'
            flexDirection='column'
            alignItems='center'
            gap={0.5}
            sx={{
              left: x,
              top: y,
              transform: 'translate(-50%, -50%)',
              width: 150,
              ...(typeof img.style === 'object' ? img.style : {}),
            }}
          >
            <Image src={img.src} alt={img.alt} style={{ width: '150px', height: 'auto', objectFit: 'contain' }} />
            {img.label && (
              <Typography variant='subtitle1' fontWeight='bold'>
                {img.label}
              </Typography>
            )}
          </Box>
        );
      })}
    </Box>
  );
}
