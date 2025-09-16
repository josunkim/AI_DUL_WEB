'use client';

import Image, { StaticImageData } from 'next/image';

interface AppDownloadButtonProps {
  imgClassName?: string;
  url: string;
  imageSrc: StaticImageData;
  alt: string;
  text: string;
}
export default function AppDownloadButton({ url, imgClassName, imageSrc, alt, text }: AppDownloadButtonProps) {
  const handleClick = () => {
    window.open(`${url}`, '_blank');
  };
  return (
    <button onClick={handleClick} className='box-border flex cursor-pointer items-center justify-center gap-2 rounded-[40px] bg-amber-700 p-3'>
      <Image src={imageSrc} alt={alt} className={`${imgClassName} object-fill`} />
      <p className='text-sm font-bold text-white'>{text}</p>
    </button>
  );
}
