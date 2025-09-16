'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import smartWatch from '@/assets/img/smartWatch.png';
import seniorAi from '@/assets/img/seniorAi.png';
import seniorTablet from '@/assets/img/seniorTablet.png';
import calendarImg from '@/assets/img/calendarImg.png';
import whiteArrowImg from '@/assets/img/whiteArrowImg.svg';

export default function SeniorCareIntroSection() {
  const greenBoxRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(greenBoxRef, { once: true, amount: 0.3 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });

  return (
    <section className='flex h-screen w-full items-center bg-white'>
      {/* 초록색 박스: 내부 3분할 구조 */}
      <motion.div
        ref={greenBoxRef}
        className='flex h-[400px] min-w-[600px] flex-1 items-center justify-center overflow-visible rounded-3xl bg-[#133f3c] pb-5'
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* 상단 2개, 하단 1개 역삼각형 이미지 */}
        <div className='relative flex h-full min-w-1/2 flex-col items-center justify-center'>
          {/* 상단 왼쪽: 스마트워치 */}
          <motion.div
            className='absolute -top-20 -left-0 z-10'
            initial={{ opacity: 0, y: 24 + 40 }}
            animate={isInView ? { opacity: 1, y: 24 } : { opacity: 0, y: 24 + 40 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            style={{ zIndex: 10 }}
          >
            <Image src={smartWatch} alt='스마트밴드' width={300} height={300} className='object-contain' />
          </motion.div>
          {/* 상단 오른쪽: seniorAi */}
          <motion.div
            className='absolute -top-10 -right-0 z-10'
            initial={{ opacity: 0, y: 24 + 40 }}
            animate={isInView ? { opacity: 1, y: 24 } : { opacity: 0, y: 24 + 40 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            style={{ zIndex: 10 }}
          >
            <Image src={seniorAi} alt='노부부와 로봇' width={300} height={300} className='object-contain' />
          </motion.div>
          {/* 하단 중앙: seniorTablet */}
          <motion.div
            className='absolute -bottom-20 left-1/2 z-10 -translate-x-1/2'
            initial={{ opacity: 0, y: 24 + 40 }}
            animate={isInView ? { opacity: 1, y: 24 } : { opacity: 0, y: 24 + 40 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            style={{ zIndex: 10 }}
          >
            <Image src={seniorTablet} alt='벤치에 앉은 노부부' width={300} height={300} className='object-contain' />
          </motion.div>
        </div>
        {/* 중앙: 양방향 화살표 2개 */}
        <div className='flex min-w-[80px] flex-col items-center justify-center gap-4'>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}>
            <Image src={whiteArrowImg} alt='왼쪽에서 오른쪽 화살표' width={52} height={30} className='rotate-0' />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}>
            <Image src={whiteArrowImg} alt='오른쪽에서 왼쪽 화살표' width={52} height={30} className='rotate-180' />
          </motion.div>
        </div>
        {/* 오른쪽: 스마트폰 이미지 */}
        <motion.div
          className='flex min-w-[180px] flex-col items-center justify-center'
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
        >
          <Image src={calendarImg} alt={"Family's AI.DUL"} height={500} className='object-cover' />
        </motion.div>
      </motion.div>
      {/* 오른쪽: 텍스트 설명 */}
      <motion.div
        ref={textRef}
        className='flex h-[520px] max-w-[800px] flex-1 flex-col items-center text-center'
        style={{ fontSize: 'clamp(28px, 3.125vw, 60px)' }}
        initial={{ opacity: 0, x: 60 }}
        animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h2
          className='mb-16 w-full text-6xl font-bold'
          initial={{ opacity: 0, y: 30 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
        >
          Senior&apos;s AI.DUL
        </motion.h2>
        <motion.p
          className='leading-relaxed'
          style={{ fontSize: 'clamp(1rem, 1.5625vw, 30px)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
        >
          노인 전문 심리 검사와 멀티모달 데이터 기반의
          <br />
          정서케어 서비스를 제공합니다
          <br />
          가족, 돌봄 전문가, 커뮤니티 및 의료기관과 연계하여
          <br />
          노년의 웰빙(well-being)을 지원합니다
        </motion.p>
      </motion.div>
    </section>
  );
}
