'use client';

import { useRef, useEffect } from 'react';

interface BackgroundVideoSectionProps {
  videoSrc: string;
  children?: React.ReactNode;
  playbackRate?: number;
}

export default function BackgroundVideo({ videoSrc, children, playbackRate = 1 }: BackgroundVideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  return (
    <section className='relative min-h-screen w-full overflow-hidden'>
      <video ref={videoRef} className='absolute inset-0 z-0 h-full w-full object-fill' src={videoSrc} autoPlay loop muted playsInline />

      {children}
    </section>
  );
}
