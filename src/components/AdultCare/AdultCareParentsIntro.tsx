'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import calendarImg from '@/assets/img/calendarImg.png';
import DULImg from '@/assets/img/DULImg.png';
import akaiveImg from '@/assets/img/akaiveImg.png';

export default function AdultCareParentsIntro() {
  const greenBoxRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(greenBoxRef, { once: true, amount: 0.3 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });

  // 이미지 배열 (예시로 모두 appImage1 사용)
  const images = [calendarImg, DULImg, akaiveImg, calendarImg];

  // 각 이미지의 translateY, zIndex, marginLeft 값 (1,3번 아래, 2,4번 위)
  const imageStyles = [
    { y: 24, z: 10, ml: 0 }, // 1번: 아래로
    { y: -24, z: 20, ml: -60 }, // 2번: 위로
    { y: 24, z: 30, ml: -60 }, // 3번: 아래로
    { y: -24, z: 40, ml: -60 }, // 4번: 위로
  ];

  return (
    <section className='flex h-screen w-full items-center bg-white'>
      {/* 왼쪽: 이미지 영역 - framer-motion 적용 */}
      <motion.div
        ref={greenBoxRef}
        className='flex h-[400px] min-w-[600px] flex-1 items-center justify-center overflow-visible rounded-3xl bg-[#133f3c] pb-5'
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* 4개 이미지 가로 일직선, 중앙정렬, 겹침 */}
        <div className='flex items-center justify-center'>
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`relative z-[${imageStyles[i].z}] ${i !== 0 ? '-ml-12' : ''}`}
              initial={{ opacity: 0, y: imageStyles[i].y + 40 }}
              animate={isInView ? { opacity: 1, y: imageStyles[i].y } : { opacity: 0, y: imageStyles[i].y + 40 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05, ease: 'easeOut' }}
              style={{ zIndex: imageStyles[i].z, marginLeft: i !== 0 ? imageStyles[i].ml : 0 }}
            >
              <Image src={img} alt={`Adult's AI.DUL ${i + 1}`} className='rounded-2xl object-cover shadow-xl' height={600} />
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* 오른쪽: 텍스트 영역 */}
      <motion.div
        ref={textRef}
        className='mb-8 flex h-[520px] max-w-[800px] flex-1 flex-col items-center text-center'
        initial={{ opacity: 0, x: 60 }}
        animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h2
          className='mb-8 w-full font-bold'
          style={{ fontSize: 'clamp(28px, 3.125vw, 60px)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
        >
          Parent&apos;s AI.DUL
        </motion.h2>
        <motion.p
          className='mb-2 leading-relaxed'
          style={{ fontSize: 'clamp(1rem, 1.5625vw, 30px)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
        >
          전문 검사를 기반으로 분석된
          <br />
          가족 개개인의 특성을 통해
          <br />
          잠재된 문제를 예측하고
          <br />
          맞춤형 데일리 양육 코칭과
          <br />
          24시간 전문 AI 상담을 제공합니다
        </motion.p>
      </motion.div>
    </section>
  );
}
