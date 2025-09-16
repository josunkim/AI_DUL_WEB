'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import DULImg from '@/assets/img/DULImg.png';
import whiteArrowImg from '@/assets/img/whiteArrowImg.svg';
import logoImg from '@/assets/img/logoImg.png';

export default function ParentSchool() {
  const greenBoxRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(greenBoxRef, { once: true, amount: 0.3 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });

  return (
    <section className='flex h-screen w-full items-center bg-white'>
      {/* 왼쪽: 텍스트 영역 */}
      <motion.div
        ref={textRef}
        className='mb-12 flex h-[640px] max-w-[45%] flex-1 flex-col items-center pr-16 text-center'
        initial={{ opacity: 0, x: -60 }}
        animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h2
          className='mb-8 w-full font-bold'
          style={{ fontSize: 'clamp(1.2rem, 3.125vw, 60px)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
        >
          Parent-School
        </motion.h2>
        <motion.div
          className='mb-8 font-semibold'
          style={{ fontSize: 'clamp(1rem, 1.875vw, 36px)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
        >
          AI.DUL을 통한 부모 - 교사 연동
        </motion.div>
        <motion.div
          className='leading-relaxed'
          style={{ fontSize: 'clamp(1rem, 1.5625vw, 30px)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
        >
          담당 원아의 개별 특성을 이해하고
          <br />
          맞춤 지도 솔루션을 제공합니다
          <br />
          AI 전문가가 교육기관과 가정을 중재하고,
          <br />
          교사의 정신건강을 관리합니다
        </motion.div>
      </motion.div>
      {/* 오른쪽: 이미지+네이밍 영역 */}
      <div className='flex flex-1 flex-col items-center'>
        {/* 초록색 박스(이미지 영역) */}
        <motion.div
          ref={greenBoxRef}
          className='relative flex h-[400px] w-full min-w-[600px] items-center justify-center overflow-visible rounded-3xl bg-[#133f3c]'
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* 왼쪽: 어플 이미지 */}
          <div className='relative flex h-full w-[250px] flex-col items-center justify-center'>
            <Image src={DULImg} alt='어플1' width={300} className='rounded-xl' />
          </div>
          {/* 왼쪽 앱 ↔ 로고: 좌우 화살표 */}
          <div className='mx-4 flex flex-col items-center justify-center gap-2'>
            <Image src={whiteArrowImg} alt='왼쪽 화살표' width={40} className='-scale-x-100' />
            <Image src={whiteArrowImg} alt='오른쪽 화살표' width={40} />
          </div>
          {/* 중앙: 회사 로고 */}
          <div className='relative flex h-full w-[240px] flex-col items-center justify-center'>
            <Image src={logoImg} width={100} height={100} alt='로고'></Image>
            <p className='mt-2 text-lg font-bold text-white'>AI 기반 예측 및 솔루션</p>
          </div>
          {/* 로고 ↔ 오른쪽 앱: 좌우 화살표 */}
          <div className='mx-4 flex flex-col items-center justify-center gap-2'>
            <Image src={whiteArrowImg} alt='왼쪽 화살표' width={40} className='-scale-x-100' />
            <Image src={whiteArrowImg} alt='오른쪽 화살표' width={40} />
          </div>
          {/* 오른쪽: 어플 이미지 3개(세로 겹침, 퍼짐) */}
          <div className='relative flex h-full w-[240px] flex-col items-center justify-center'>
            <Image src={DULImg} alt='어플2' width={200} className='absolute -top-20 left-10 rotate-[-10deg]' />
            <Image src={DULImg} alt='어플3' width={200} className='absolute -top-0 left-14 rotate-[5deg]' />
            <Image src={DULImg} alt='어플4' width={200} className='absolute top-15 left-6 rotate-[25deg]' />
          </div>
        </motion.div>
        {/* 네이밍: 초록색 박스 밖, 각 그룹 하단에 위치 */}
        <div className='mt-24 flex w-full items-center justify-center gap-95'>
          <div className='text-3xl font-bold'>Teacher&apos;s AI.DUL</div>
          <div className='text-3xl font-bold'>Parent&apos;s AI.DUL</div>
        </div>
      </div>
    </section>
  );
}
