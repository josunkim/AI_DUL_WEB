'use client';

import React from 'react';
import AnimatedText from '@/shared/components/AnimatedText';

export const PuzzleHero = () => {
  return (
    <div className='flex flex-1 flex-col'>
      <div className='relative z-10'>
        <AnimatedText delay={0.3}>
          <h1 className='mt-[305px] max-w-[1200px] text-left text-7xl leading-tight font-bold'>
            AI.DUL은 다름을 읽고,
            <br />
            <span className='block text-right'>맞춤 환경을 만들어갑니다.</span>
          </h1>
        </AnimatedText>
      </div>
      <div className='relative z-10 mt-auto mb-8 w-full text-center font-semibold'>
        <p>
          * 발달적 적소(Niche)를 들어 보셨나요? 개인의 특성에 맞는 적합한 환경을 의미합니다. 
          <br />
          AI.DUL은 개인의 차이를 이해하고 맞춤 환경을 만들어갑니다.
        </p>
      </div>
    </div>
  );
};
