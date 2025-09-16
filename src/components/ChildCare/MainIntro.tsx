'use client';

import { motion } from 'framer-motion';

const title = '인생의 출발점, 아이들의 가능성을 여는 교육';

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
    <section className='bg-[#ffffff]'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className='mt-20 flex min-h-[400px] flex-col justify-start gap-8 p-4 text-center md:mt-40 md:min-h-[600px] md:gap-12 md:p-10 xl:mt-72 xl:min-h-screen xl:gap-16 xl:p-8'
      >
        {/* ✅ h1: 1920px 기준 72px 유지, 최소 24px, 최대 72px */}
        <h1
          className='mb-8 font-bold md:mb-10 xl:mb-12'
          style={{
            fontSize: 'clamp(1.5rem, 4.1667vw, 5rem)', // min: 24px, max: 80px at 1920px
          }}
        >
          {title.split('').map((char, i) => (
            <motion.span key={i} custom={i} variants={letterVariants} initial='hidden' animate='visible' className='inline-block'>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        {/* ✅ p: 1920px 기준 36px 유지, 최소 16px, 최대 36px */}
        <p
          className='leading-10'
          style={{
            fontSize: 'clamp(1rem, 2.083vw, 2.5rem)', // min: 16px, base: 40px at 1920px, max: 40px
          }}
        >
          아동의 인지, 정서, 행동 성장을 촉진하는 디지털 교육 서비스
        </p>
      </motion.div>
    </section>
  );
}
