'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import calendarImg from '@/assets/img/calendarImg.png';

export default function AdultCareGoodFit() {
  const greenBoxRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(greenBoxRef, { once: true, amount: 0.3 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });

  return (
    <section className='flex h-screen w-full items-center bg-white'>
      {/* 왼쪽: 이미지 영역 - framer-motion 적용 */}
      <motion.div
        ref={greenBoxRef}
        className='flex h-[clamp(200px,20.8vw,400px)] w-[clamp(200px,20.8vw,400px)] flex-1 items-center justify-center overflow-visible rounded-3xl bg-[#133f3c]'
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div
          className='relative z-10 h-[clamp(180px,31.25vw,600px)] w-[clamp(120px,20.8vw,400px)]'
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        >
          <Image src={calendarImg} alt='AdultCareGoodFit 이미지' fill className='rounded-2xl object-contain drop-shadow-2xl' />
        </motion.div>
      </motion.div>
      {/* 오른쪽: 텍스트 영역 */}
      <motion.div
        ref={textRef}
        className='mb-8 flex flex-1 flex-col items-center text-center'
        style={{
          maxWidth: 'clamp(300px, 60vw, 1152px)',
          height: 'clamp(200px, 27.08vw, 520px)',
          paddingRight: 'clamp(1rem, 4vw, 4rem)',
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
          굿핏(Good Fit): 맞춤형 솔루션
        </motion.h2>
        <motion.div
          className='mb-8 font-semibold'
          style={{ fontSize: 'clamp(20px, 1.875vw, 36px)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
        >
          &quot;나와는 다른 아이, 어떻게 대해야 하죠?&quot;
        </motion.div>
        <motion.div
          className='leading-relaxed'
          style={{ fontSize: 'clamp(1rem, 1.5625vw, 30px)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
        >
          &apos;굿핏&apos;은 우리 가족 기질 조합에 꼭 맞는 루틴을 제안합니다
          <br />
          가족의 조화는 &apos;하루 한 걸음&apos;의 실천과 노력으로 완성됩니다
          <br />
          데이터 분석을 통한 데일리 활동, 대화법, 대응 전략을 제시해
          <br />
          갈등은 줄이고, 연결은 더 깊어지는 일상을 함께합니다
        </motion.div>
      </motion.div>
    </section>
  );
}
