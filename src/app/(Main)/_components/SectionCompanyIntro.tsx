import React from 'react';
import CircleContent from '@/shared/components/CircleContent';
import Image from 'next/image';
import SolutionImg from '@/assets/img/solution.png';

export const SectionCompanyIntro = () => {
  return (
    <div className='box-border flex size-full min-h-screen flex-col justify-center p-6 md:p-10 lg:gap-16 lg:p-20'>
      <div className='z-10 flex flex-col gap-4 text-base leading-relaxed text-white md:text-2xl'>
        <div className='mb-2 font-bold'>AI.DUL Inc.(아이들아이앤씨)는</div>
        <div>
          AI 기반 다양한 AX 솔루션으로 &apos;아이들&apos;의 성장 케어부터 노인 웰빙까지
          <br />
          인간의 긍정적이고 에너지 넘치는(&apos;DUL&apos;의 뜻) 건강한 삶을 책임지는 기업
        </div>
      </div>
      <div className='flex w-full items-center justify-between'>
        <CircleContent className='z-10 h-40 w-40 border-4 border-white md:h-56 md:w-56 lg:left-24 lg:h-96 lg:w-96' bgColor=''>
          <div className='px-4 text-center text-base font-bold whitespace-pre-line text-white md:text-xl lg:text-3xl'>
            {`개인의 특성은\n환경에 반응하는 방식,\n더 나은 성장을 위한\n개인 맞춤형\n최적화 솔루션`}
          </div>
        </CircleContent>
        <Image
          src={SolutionImg}
          alt='companyIntro'
          width={600}
          height={600}
          sizes='(max-width: 768px) 120px, (max-width: 1024px) 220px, 600px'
          className='z-10 ml-4 h-[120px] w-[120px] flex-shrink-0 object-contain md:ml-8 md:h-[220px] md:w-[220px] lg:h-[600px] lg:w-[600px]'
        />
      </div>
    </div>
  );
};
