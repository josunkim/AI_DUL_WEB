'use client';

import Image, { StaticImageData } from 'next/image';
import IconButton from '@mui/material/IconButton';
import { SxProps, Theme } from '@mui/material';

interface SnsIconButtonProps {
  imageSrc: StaticImageData;
  alt: string;
  url: string;
  sx?: SxProps<Theme>;
}

export default function SnsIconButton({ imageSrc, alt, url }: SnsIconButtonProps) {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <IconButton
      onClick={handleClick}
      sx={{
        bgcolor: 'amber[700]',
        borderRadius: 2,
        width: 40,
        height: 40,
        '&:hover': { bgcolor: 'amber[800]' },
      }}
    >
      <Image src={imageSrc} alt={alt} width={20} height={20} />
    </IconButton>
  );
}
