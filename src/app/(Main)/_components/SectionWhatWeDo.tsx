'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: '휴먼지능', desc: '발달-상담-임상심리 전문가' },
  { title: '멀티 모달 DATA', desc: '검사-Text-음성-영상' },
  { title: '전문연구 DATA', desc: '사회과학 분야 1억 2천만 건 이상' },
  { title: 'AI / AX', desc: '학습-예측-전문상담 에이전트' },
];

const SectionWhatWeDo = () => {
  const [step, setStep] = useState(-1); // -1이면 아직 시작 안함
  const sectionRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startedRef = useRef(false); // 애니메이션 시작 여부

  // step 증가용 타이머 관리
  useEffect(() => {
    if (step >= 0 && step < features.length) {
      timerRef.current = setTimeout(() => {
        setStep((prev) => prev + 1);
      }, 800);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [step]);

  // viewport 진입 감지 - 한 번만 실행
  useEffect(() => {
    const onScroll = () => {
      if (startedRef.current) return; // 이미 시작했으면 무시
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.7) {
        startedRef.current = true;
        setTimeout(() => setStep(0), 1000); // 1초 뒤 시작
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // 최초 체크

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={sectionRef} className='flex min-h-[650px] w-full flex-col gap-10 bg-white p-4 md:min-h-screen md:gap-16 md:py-10 xl:gap-20 xl:py-0'>
      <motion.div
        className='mt-4 text-center text-[clamp(1.25rem,4vw,4rem)] leading-[clamp(2em,4vw,2.8em)] font-bold md:mt-24'
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        전문가가 개발한 멀티 모달 데이터 기반의 AI 케어 파트너
      </motion.div>

      <div className='relative flex min-h-[400px] items-center justify-center md:min-h-[500px] xl:min-h-[600px]'>
        {/* 카드 애니메이션: step < features.length 일 때 */}
        {step >= 0 && step < features.length && (
          <div className='absolute top-0 left-0 flex h-full w-full items-center justify-center transition-all duration-500' style={{ zIndex: 2 }}>
            {features.map((f, i) => {
              // 현재 step 카드와 이전 카드만 렌더링 (나머지는 렌더링하지 않음)
              if (i > step) return null;
              return (
                <motion.div
                  key={i}
                  layout
                  initial={{ opacity: 0, scale: 0.8, x: 0, y: 0 }}
                  animate={step === i ? { opacity: 1, scale: 1, x: 0, y: 0 } : { opacity: 0, scale: 0.8, x: 0, y: 0 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className={`absolute flex min-h-[150px] w-full max-w-xs flex-col items-center justify-center bg-white p-6 text-center text-base font-bold md:min-h-[200px] md:max-w-lg md:p-10 md:text-2xl xl:min-h-[250px] xl:max-w-xl xl:p-16 xl:text-3xl ${
                    step === i ? '' : 'pointer-events-none'
                  }`}
                  style={{ zIndex: step === i ? 2 : 1 }}
                >
                  <h3 className='mb-2 text-2xl md:mb-4 md:text-3xl xl:text-6xl'>{f.title}</h3>
                  <p className='text-base font-normal whitespace-pre-line md:text-xl xl:text-3xl'>{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* 마지막: 네 개가 그리드로 이동 */}
        {step >= features.length && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='mx-auto mt-10 grid max-w-xs grid-cols-1 place-items-center gap-8 md:-mt-8 md:max-w-3xl md:grid-cols-2 md:gap-16 xl:max-w-7xl xl:gap-16'
            style={{ zIndex: 3 }}
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className='flex w-full max-w-xs flex-col items-center justify-center bg-white p-4 text-center text-base font-bold md:h-40 md:max-w-md md:p-6 md:text-xl xl:h-60 xl:max-w-[500px] xl:p-6 xl:text-xl'
              >
                <h3 className='mb-2 text-xl md:mb-4 md:text-3xl xl:text-6xl'>{f.title}</h3>
                <p className='text-sm font-normal whitespace-pre-line md:text-lg xl:text-3xl'>{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SectionWhatWeDo;
