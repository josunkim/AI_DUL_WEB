'use client';

import React from 'react';
import Box from '@mui/material/Box';

interface CircleContentProps {
  backgroundVideoSrc?: string;
  /** tailwind `bgColor` 대신 MUI theme 색상 또는 hex 사용 */
  bgColor?: string;
  className?: string;
  children: React.ReactNode;
}

export const CircleContent = ({ backgroundVideoSrc, bgColor, className, children }: CircleContentProps) => {
  return (
    <Box
      className={className}
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: '50%',
        p: 4,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.125rem', // text-lg
        color: 'grey.900',
        boxShadow: 6,
        bgcolor: bgColor || 'transparent',
        aspectRatio: '1 / 1', // 원형 비율 유지
      }}
    >
      {backgroundVideoSrc && (
        <Box
          component='video'
          src={backgroundVideoSrc}
          autoPlay
          loop
          muted
          playsInline
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        />
      )}

      {backgroundVideoSrc && (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            bgcolor: 'rgba(0,0,0,0.3)',
            zIndex: 5,
          }}
        />
      )}

      <Box
        sx={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          ...(backgroundVideoSrc && {
            color: 'common.white',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
          }),
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
