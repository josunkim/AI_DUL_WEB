'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import calendarImg from '@/assets/img/calendarImg.png';

export default function AdultCareCoParenting() {
  const greenBoxRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(greenBoxRef, { once: true, amount: 0.3 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });

  const imageGroups = [
    [calendarImg, calendarImg],
    [calendarImg, calendarImg],
  ];

  return (
    <section className='flex min-h-screen w-full flex-col items-center justify-center bg-white px-4 py-[clamp(40px,5vw,100px)] md:flex-row'>
      {/* 텍스트 영역 */}
      <motion.div
        ref={textRef}
        className='mb-32 flex max-w-[800px] flex-1 flex-col items-center text-center'
        initial={{ opacity: 0, x: -60 }}
        animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h2
          className='mb-[clamp(24px,4vw,32px)] w-full leading-tight font-bold'
          style={{ fontSize: 'clamp(28px, 3.125vw, 60px)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
        >
          Co-Parenting
        </motion.h2>

        <motion.div
          className='mb-[clamp(16px,2.5vw,32px)] leading-relaxed font-semibold'
          style={{ fontSize: 'clamp(20px, 1.875vw, 36px)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
        >
          AI.DUL은 부부가 함께 실천하는
          <br />
          공동양육(Co-parenting)을 안내합니다
        </motion.div>

        <motion.div
          className='leading-relaxed'
          style={{ fontSize: 'clamp(1rem, 1.5625vw, 30px)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
        >
          가족 일정과 일상을 공유하고,
          <br />
          기질 기반의 맞춤 역할 팁과 전문 양육 정보를 통해
          <br />
          일관된 양육과 정서 연결이 이루어지도록
          <br />
          설계되어 있습니다
        </motion.div>
      </motion.div>

      {/* 이미지 영역 */}
      <div className='mt-[clamp(40px,7vw,450px)] flex flex-1 flex-col items-center'>
        <motion.div
          ref={greenBoxRef}
          className='py-[clamp(20px, 3vw, 40px)] flex w-full items-center justify-center overflow-visible rounded-3xl bg-[#133f3c]'
          style={{ height: 'clamp(220px, 20.8vw, 400px)' }}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className='flex w-full items-center justify-center gap-[clamp(20px,4vw,80px)]'>
            {imageGroups.map((group, i) => (
              <div key={i} className='flex flex-col items-center'>
                <div className='relative' style={{ height: 'clamp(220px, 20.8vw, 400px)', width: 'clamp(220px, 20.8vw, 400px)' }}>
                  {/* 이미지 A */}
                  <motion.div
                    className='absolute z-10'
                    style={{
                      bottom: i === 0 ? '-30px' : undefined,
                      top: i === 1 ? '-75px' : undefined,
                      left: i === 1 ? '0' : '-80px',
                      right: i === 0 ? '0' : '-80px',
                      transform: `translateY(${i === 0 ? '60px' : '-60px'})`,
                    }}
                    initial={{ opacity: 0, y: i === 0 ? 60 : -60 }}
                    animate={isInView ? { opacity: 1, y: i === 0 ? 60 : -60 } : { opacity: 0, y: i === 0 ? 60 : -60 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: 'easeOut' }}
                  >
                    <Image src={group[0]} alt={`Group ${i + 1} Img A`} className='rounded-2xl object-cover shadow-xl' height={600} />
                  </motion.div>
                  {/* 이미지 B */}
                  <motion.div
                    className='absolute z-20'
                    style={{
                      top: i === 0 ? '-75px' : undefined,
                      bottom: i === 1 ? '-30px' : undefined,
                      left: i === 0 ? undefined : undefined,
                      right: i === 0 ? '0' : '-80px',
                      transform: `translateY(${i === 0 ? '-60px' : '60px'})`,
                    }}
                    initial={{ opacity: 0, y: i === 0 ? -60 : 60 }}
                    animate={isInView ? { opacity: 1, y: i === 0 ? -60 : 60 } : { opacity: 0, y: i === 0 ? -60 : 60 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: 'easeOut' }}
                  >
                    <Image src={group[1]} alt={`Group ${i + 1} Img B`} className='rounded-2xl object-cover shadow-xl' height={600} />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 네이밍 */}
        <div className='mt-[clamp(32px,7vw,360px)] flex w-full items-center justify-center gap-80'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
            className='flex flex-col items-center'
          >
            <div className='text-xs font-semibold sm:text-base md:text-lg lg:text-xl xl:text-3xl'>Mother&apos;s AI.DUL</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
            className='flex flex-col items-center'
          >
            <div className='text-xs font-semibold sm:text-base md:text-lg lg:text-xl xl:text-3xl'>Father&apos;s AI.DUL</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
