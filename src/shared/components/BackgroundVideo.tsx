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
    <section style={{ position: 'relative', width: '100%', height: '100%' }}>
      <video
        ref={videoRef}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
        }}
        src={videoSrc}
        autoPlay
        loop
        preload='auto'
        muted
        playsInline
      />
      {children}
    </section>
  );
}
