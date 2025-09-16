'use client';

import Image from 'next/image';
import ArrowUpImg from '@/assets/img/arrow_up.png';
import CircleGraph from './CircleGraph';
import studyingImg from '@/assets/img/familyImg.png';
import exportImg from '@/assets/img/exportImg.png';
import teachingImg from '@/assets/img/teachingImg.png';
import familyImg from '@/assets/img/familyImg.png';
import friendImg from '@/assets/img/friendImg.png';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

export const SuccessGraph = () => {
  // 왼쪽 원 데이터
  const leftImages = [
    { src: studyingImg, alt: '커뮤니티', label: '커뮤니티' },
    { src: familyImg, alt: '가족', label: '가족' },
    { src: exportImg, alt: '전문가', label: '전문가' },
    { src: friendImg, alt: '또래', label: '또래' },
    { src: teachingImg, alt: '학교', label: '학교' },
  ];
  // 오른쪽 원 데이터
  const rightImages = [
    { src: studyingImg, alt: '생리적 반응성', label: '생리적 반응성' },
    { src: familyImg, alt: '뇌 회로', label: '뇌 회로' },
    { src: exportImg, alt: '유전 & 후성 유전', label: '유전 & 후성 유전' },
    { src: friendImg, alt: '기질과 행동', label: '기질과 행동' },
    { src: teachingImg, alt: '기질과 행동', label: '기질과 행동' },
  ];

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.5, once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <motion.section ref={sectionRef} className='flex flex-col items-center gap-40 p-40' initial='hidden' animate={controls} viewport={{ once: true, amount: 0.5 }}>
      <motion.h2
        className='flex w-[1000px] flex-col items-stretch text-7xl font-bold'
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.2 } },
        }}
      >
        <span className='text-left'>“For Better or For Worse”</span>
      </motion.h2>
      <div className='relative flex w-full items-center justify-center gap-[440px]'>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0 } },
          }}
        >
          <CircleGraph centerText='유전' images={leftImages} />
        </motion.div>
        <motion.div
          className='absolute -top-1/6 left-1/3 z-10'
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } },
          }}
        >
          <Image src={ArrowUpImg} alt='상승 화살표' width={500} />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 } },
          }}
        >
          <CircleGraph centerText='환경' images={rightImages} />
        </motion.div>
      </div>
    </motion.section>
  );
};
