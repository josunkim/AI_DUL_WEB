'use client';

import { motion } from 'framer-motion';

const title = '함께 살아가는 노년, 스스로 지키는 웰빙';

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
        className='mx-auto mt-20 flex min-h-[400px] flex-col justify-start gap-8 px-4 text-center text-[#333] md:mt-40 md:min-h-[600px] md:gap-12 md:px-10 xl:mt-80 xl:min-h-screen xl:gap-16 xl:px-8'
      >
        <h1
          className='mb-4 font-bold md:mb-10 xl:mb-12'
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

        <p
          className='leading-10'
          style={{
            fontSize: 'clamp(1rem, 2.083vw, 2.5rem)', // min: 16px, base 40px at 1920px, max: 40px
          }}
        >
          행동, 감정, 인지를 정밀하게 분석하고 제공하는 자기관리 및 정서케어 서비스
        </p>
      </motion.div>
    </section>
  );
}
