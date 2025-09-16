'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import childTabletImg from '@/assets/img/childTabletImg.png';
import whiteArrowImg from '@/assets/img/whiteArrowImg.svg';
import calendarImg from '@/assets/img/calendarImg.png';

export default function ChildApp() {
  const greenBoxRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(greenBoxRef, { once: true, amount: 0.3 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });

  return (
    <section className='flex h-auto w-full flex-col items-center bg-white px-2 py-6 sm:px-4 sm:py-8 md:px-8 lg:flex-row xl:h-screen xl:px-0 xl:py-0'>
      {/* 왼쪽: 텍스트 영역 */}
      <motion.div
        ref={textRef}
        className='mb-6 flex h-[180px] w-full flex-1 flex-col items-center text-center sm:h-[260px] md:h-[340px] lg:mb-0 lg:h-[480px] xl:mt-16 xl:h-[680px] xl:max-w-[850px]'
        initial={{ opacity: 0, x: -60 }}
        animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h2
          className='mb-24 text-lg font-bold sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl'
          initial={{ opacity: 0, y: 30 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
        >
          Kid&apos;s AI.DUL
        </motion.h2>
        <motion.div
          className='text-xs leading-6 sm:text-base sm:leading-8 md:text-lg md:leading-10 lg:text-2xl lg:leading-12 xl:text-3xl'
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
        >
          자녀 성장 멀티 모달 데이터 기반
          <br />
          연령 맞춤형 성장 촉진
          <br />
          프로그램과 교구를 제공합니다.
        </motion.div>
      </motion.div>
      {/* 오른쪽: 초록색 컨텐츠 + 네이밍 */}
      <div className='mt-16 flex w-full flex-1 flex-col items-center'>
        <motion.div
          ref={greenBoxRef}
          className='relative flex h-[120px] w-full flex-col items-center justify-center gap-2 overflow-visible rounded-3xl bg-[#133f3c] py-4 sm:h-[180px] sm:gap-4 sm:py-6 md:h-[240px] md:gap-8 lg:h-[320px] lg:flex-row lg:gap-10 lg:py-10 xl:h-[400px]'
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* 이미지 그룹 */}
          <div className='flex w-full flex-row items-center justify-center gap-8 pr-8 sm:gap-12 md:gap-12 md:pr-14 lg:gap-16 lg:pl-6'>
            {/* 왼쪽: 태블릿 */}
            <div className='flex flex-col items-center'>
              <div className='relative flex h-[100px] w-[100px] items-center justify-center sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px] lg:h-[220px] lg:w-[220px] xl:h-[400px] xl:w-[400px]'>
                <Image src={childTabletImg} alt="Kid's AI.DUL" className='rounded-2xl object-contain shadow-xl' height={600} />
              </div>
            </div>
            {/* 오른쪽: 캘린더 */}
            <div className='flex flex-col items-center'>
              <div className='relative flex h-[60px] w-[60px] items-center justify-center sm:h-[100px] sm:w-[100px] md:h-[140px] md:w-[140px] lg:h-[180px] lg:w-[180px] xl:h-[400px] xl:w-[400px]'>
                <Image src={calendarImg} alt="Parents's AI.DUL" className='rounded-2xl object-contain shadow-xl' height={600} />
              </div>
            </div>
          </div>
          {/* 중앙: 양방향 화살표 (절대위치) */}
          <div
            style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 30, pointerEvents: 'none' }}
            className='flex flex-col items-center justify-center gap-1 sm:gap-2'
          >
            <Image src={whiteArrowImg} alt='arrow-left' width={14} height={6} className='-scale-x-100 lg:h-[12px] lg:w-[32px] xl:h-[20px] xl:w-[52px]' />
            <Image src={whiteArrowImg} alt='arrow-right' width={14} height={6} className='lg:h-[12px] lg:w-[32px] xl:h-[20px] xl:w-[52px]' />
          </div>
        </motion.div>
        {/* 네이밍: 초록색 박스 밖, 각 그룹 하단에 위치 */}
        <div className='mt-4 mr-10 flex w-full items-center justify-center gap-8 sm:mt-8 sm:gap-12 sm:pl-6 lg:mt-12 lg:gap-28 xl:mt-32 xl:gap-70'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
            className='flex flex-col items-center'
          >
            <div className='text-xs font-semibold sm:text-base md:text-lg lg:text-xl xl:text-3xl'>Kid&apos;s AI.DUL</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
            className='flex flex-col items-center'
          >
            <div className='text-xs font-semibold sm:text-base md:text-lg lg:text-xl xl:text-3xl'>Parents&apos; AI.DUL</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
