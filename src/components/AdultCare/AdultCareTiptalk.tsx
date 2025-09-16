'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import calendarImg from '@/assets/img/calendarImg.png';

export default function AdultCareTiptalk() {
  const greenBoxRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(greenBoxRef, { once: true, amount: 0.3 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });

  return (
    <section className='flex h-screen w-full items-center bg-white'>
      {/* 왼쪽: 텍스트 영역 */}
      <motion.div
        ref={textRef}
        className='mb-8 flex h-[clamp(200px,27.08vw,520px)] max-w-[clamp(300px,60vw,1152px)] flex-1 flex-col items-center pl-[clamp(1rem,4vw,4rem)] text-center'
        initial={{ opacity: 0, x: -60 }}
        animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h2
          className='mb-8 w-full text-[clamp(1.2rem,3.125vw,60px)] font-bold'
          initial={{ opacity: 0, y: 30 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
        >
          팁톡(Tiptalk): 커뮤니티
        </motion.h2>
        <motion.div
          className='mb-8 font-semibold'
          style={{ fontSize: 'clamp(20px, 1.875vw, 36px)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
        >
          &quot;육아정보가 흩어져 있어서 바쁜 날은 그냥 포기해요&quot;
          <br />
          &quot;수다방은 많은데 믿을만한 조언이 없어요&quot;
        </motion.div>
        <motion.div
          className='leading-relaxed'
          style={{ fontSize: 'clamp(1rem, 1.5625vw, 30px)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
        >
          &apos;팁톡&apos;은 다양한 소통을 하는 공간입니다
          <br />
          유사한 문제를 경험하고 관심사를 공유하는 가정을 연결합니다
          <br />
          부모 간 육아 팁, 최신 아이템, 다양한 고민을 공유하고,
          <br />
          맞춤형으로 검증된 정보를 제공합니다
        </motion.div>
      </motion.div>
      {/* 오른쪽: 이미지 영역 - framer-motion 적용 */}
      <motion.div
        ref={greenBoxRef}
        className='flex flex-1 items-center justify-center overflow-visible rounded-3xl bg-[#133f3c]'
        style={{ width: 'clamp(200px, 20.8vw, 400px)', height: 'clamp(200px, 20.8vw, 400px)' }}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div
          className='relative z-10'
          style={{ width: 'clamp(120px, 20.8vw, 400px)', height: 'clamp(180px, 31.25vw, 600px)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        >
          <Image src={calendarImg} alt='AdultCareTiptalk 이미지' fill className='rounded-2xl object-contain drop-shadow-2xl' />
        </motion.div>
      </motion.div>
    </section>
  );
}
