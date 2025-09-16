import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface BackgroundImageSectionProps {
  imageSrc: StaticImageData;
  logoSrc?: string;
  children: React.ReactNode;
  className?: string;
}

const BackgroundImage: React.FC<BackgroundImageSectionProps> = ({ imageSrc, logoSrc, children, className }) => {
  return (
    <section className={`relative min-h-screen w-full overflow-hidden ${className}`}>
      <Image src={imageSrc} alt='배경 이미지' fill className='absolute inset-0 z-0 object-cover' sizes='100vw' priority />
      {logoSrc && (
        <header className='absolute top-4 right-4 z-10'>
          <Image src={logoSrc} alt='회사 로고' width={128} height={40} className='h-auto w-24 md:w-32' />
        </header>
      )}
      {children}
    </section>
  );
};

export default BackgroundImage;
