'use client';

import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { keyframes } from '@mui/system';

interface GenerationButtonProps {
  image: StaticImageData;
  text: string;
  url: string;
}

const fadeToWhite = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

export const GenerationButton = ({ image, text, url }: GenerationButtonProps) => {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      router.push(url);
    }, 200);
  };

  return (
    <>
      <ButtonBase
        onClick={handleClick}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(0.5rem,4vw,3rem)',
          p: { xs: 1, md: 2 },
          transition: 'transform 0.3s',
          '&:hover': { transform: 'scale(1.1)' },
          cursor: 'pointer',
        }}
      >
        <Box
          sx={{
            width: { xs: 80, sm: 180, lg: 350 }, // xs: 200px, md: 300px, lg+: 400px
            height: { xs: 60, sm: 135, lg: 250 }, // xs: 140px, md: 220px, lg+: 210px
            position: 'relative',
          }}
        >
          <Image src={image} alt={text} fill style={{ objectFit: 'cover' }} />
        </Box>
        <Typography fontWeight='bold' sx={{ fontSize: 'clamp(1rem,2vw,2rem )' }}>
          {text}
        </Typography>
      </ButtonBase>

      {isAnimating && (
        <Box
          sx={{
            position: 'fixed',
            inset: 0,
            bgcolor: 'white',
            zIndex: 50,
            opacity: 0,
            animation: `${fadeToWhite} 0.3s ease-in-out forwards`,
          }}
        />
      )}
    </>
  );
};
