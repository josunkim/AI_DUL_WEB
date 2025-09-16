'use client';

import { motion } from 'framer-motion';

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
  const titleParts = ['가족의 삶을 연구하는 전문가가 만든 기업, ', 'AI.DUL'];

  return (
    <section className='flex h-screen flex-col items-center justify-center bg-[#ffffff] text-center'>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className='flex flex-col items-center p-8'>
        {/* ✅ 제목 */}
        <h1
          className='mb-20 font-bold'
          style={{
            fontSize: 'clamp(1.5rem, 4.17vw, 72px)', // 전체 제목은 최대 72px
          }}
        >
          {titleParts[0].split('').map((char, i) => (
            <motion.span key={`part1-${i}`} custom={i} variants={letterVariants} initial='hidden' animate='visible' className='inline-block'>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
          <motion.span
            custom={titleParts[0].length}
            variants={letterVariants}
            initial='hidden'
            animate='visible'
            className='inline-block font-extrabold'
            style={{
              fontSize: 'clamp(1.5rem, 4.17vw, 80px)', // ✅ AI.DUL 부분만 최대 80px
            }}
          >
            {titleParts[1]}
          </motion.span>
        </h1>

        {/* ✅ 본문 */}
        <p className='mb-10 leading-6 md:leading-10 xl:leading-16' style={{ fontSize: 'clamp(0.7rem, 2.083vw, 2.5rem)' }}>
          아동·가족·심리상담 분야의 교수, 전문상담사가 개발자와 함께 만든
          <br />
          과학 기반의 정서·성장케어 플랫폼입니다
        </p>
        <p className='mb-10 leading-6 md:leading-10 xl:leading-16' style={{ fontSize: 'clamp(0.7rem, 2.083vw, 2.5rem)' }}>
          연구로 검증된 이론, 데이터, 심리측정 기반 알고리즘을 통해
          <br />
          가족의 효과적인 변화에 필요한 솔루션만을 담았습니다
        </p>
        <p className='leading-6 md:leading-10 xl:leading-16' style={{ fontSize: 'clamp(0.7rem, 2.083vw, 2.5rem)' }}>
          성장은 하루로 끝나지 않습니다.
        </p>
        <p className='leading-6 md:leading-10 xl:leading-16' style={{ fontSize: 'clamp(0.7rem, 2.083vw, 2.5rem)' }}>
          <span className='font-bold'>AI.DUL</span>은 한 사람의 생애를, 한 가족의 시간을
          <br />
          기술로 기록하고 예측하여 맞춤형 개입을 합니다
        </p>
      </motion.div>
    </section>
  );
}
