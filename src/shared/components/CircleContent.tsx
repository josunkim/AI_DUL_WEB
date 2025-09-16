interface CircleContentProps {
  backgroundVideoSrc?: string;
  bgColor?: string;
  className?: string;
  children: React.ReactNode;
}

export default function CircleContent({ backgroundVideoSrc, bgColor, className, children }: CircleContentProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-full p-4 text-center text-lg font-bold text-gray-900 shadow-lg ${bgColor} ${className}`}
      style={{ aspectRatio: '1/1' }}
    >
      {backgroundVideoSrc && <video src={backgroundVideoSrc} autoPlay loop muted playsInline className='absolute inset-0 z-0 h-full w-full object-cover' />}
      {backgroundVideoSrc && <div className='absolute inset-0 z-5 rounded-full bg-black/30' />}
      <div className={`relative z-10 flex h-full w-full items-center justify-center ${backgroundVideoSrc ? 'text-white drop-shadow-lg' : ''}`}>{children}</div>
    </div>
  );
}
