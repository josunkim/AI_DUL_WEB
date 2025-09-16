'use client';

import { motion } from 'framer-motion';

const title = '함께 성장하는 부모 솔루션';

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
    },
  }),
};

export default function MainIntro() {
  return (
    <section className='flex h-screen flex-col items-center justify-center bg-[#ffffff]'>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className='flex flex-col items-center gap-16 p-8'>
        {/* ✅ clamp 적용: 최소 24px, 기준 72px, 최대 72px */}
        <h1
          className='mb-4 font-bold'
          style={{
            fontSize: 'clamp(1.5rem, 4.17vw, 5rem)', // min: 24px, base: 80px @1920px, max: 80px
          }}
        >
          {title.split('').map((char, i) => (
            <motion.span key={i} custom={i} variants={letterVariants} initial='hidden' animate='visible' className='inline-block'>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        {/* ✅ clamp 적용: 최소 16px, 기준 36px, 최대 36px */}
        <p
          className='text-center leading-6 md:leading-10 xl:leading-16'
          style={{
            fontSize: 'clamp(0.7rem, 2.083vw, 2.5rem)', // min 약 11.2px, base 40px at 1920px, max 40px
          }}
        >
          데이터 기반의 기질 조합과 가족 간 상호작용을 과학적으로 분석한
          <br />
          자녀 성장에 최적화된 가족 전담 AI 상담 및 관리 서비스
        </p>
      </motion.div>
    </section>
  );
}
