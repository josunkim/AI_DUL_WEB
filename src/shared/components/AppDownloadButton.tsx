'use client';

import Image, { StaticImageData } from 'next/image';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface AppDownloadButtonProps {
  url: string;
  imageSrc: StaticImageData;
  alt: string;
  text: string;
}

const AppDownloadButton = ({ url, imageSrc, alt, text }: AppDownloadButtonProps) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };
  const imageSize = 24;
  return (
    <Button
      onClick={handleClick}
      variant='contained'
      disableElevation
      sx={{
        borderRadius: '40px',
        backgroundColor: 'secondary.main',
        padding: '12px 16px',
        textTransform: 'none',
        '&:hover': { backgroundColor: 'secondary.dark' },
      }}
    >
      <Stack direction='row' spacing={1.5} alignItems='center'>
        <Image src={imageSrc} alt={alt} width={imageSize} height={imageSize} />
        <Typography variant='body2' fontWeight='bold' color='white' sx={{ lineHeight: 1 }}>
          {text}
        </Typography>
      </Stack>
    </Button>
  );
};
export default AppDownloadButton;
