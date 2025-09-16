'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import calendarImg from '@/assets/img/calendarImg.png';

export default function AdultCareArchive() {
  const greenBoxRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(greenBoxRef, { once: true, amount: 0.3 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });

  return (
    <section className='flex h-screen w-full items-center bg-white'>
      {/* 왼쪽: 이미지 영역 - framer-motion 적용 */}
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
          <Image src={calendarImg} alt='아카이브 앱 화면' fill className='rounded-2xl object-contain drop-shadow-2xl' />
        </motion.div>
      </motion.div>
      {/* 오른쪽: 텍스트 영역 */}
      <motion.div
        ref={textRef}
        className='mb-8 flex flex-1 flex-col items-center text-center'
        style={{
          maxWidth: 'clamp(300px, 60vw, 1152px)', // 60vw, 최대 1152px(1920px*0.6)
          height: 'clamp(200px, 27.08vw, 520px)', // 520px/1920px = 27.08vw
          paddingRight: 'clamp(1rem, 4vw, 4rem)', // 4rem=64px
        }}
        initial={{ opacity: 0, x: 60 }}
        animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h2
          className='mb-8 w-full font-bold'
          style={{ fontSize: 'clamp(1.2rem, 3.125vw, 60px)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
        >
          아카이브: 가족 성장 모니터링
        </motion.h2>
        <motion.div
          className='mb-8 font-semibold'
          style={{ fontSize: 'clamp(1rem, 1.875vw, 36px)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
        >
          “도대체 왜 그러는 걸까?”
          <br />
          이제 감이 아닌 과학으로, 가족을 이해하세요
        </motion.div>
        <motion.div
          className='leading-relaxed'
          style={{ fontSize: 'clamp(1rem, 1.5625vw, 30px)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
        >
          &apos;아카이브&apos;는
          <br />
          가족의 기질 조합, 정서, 행동, 인지,
          <br />
          생활의 변화가 정밀하게 모니터링됩니다
        </motion.div>
      </motion.div>
    </section>
  );
}
