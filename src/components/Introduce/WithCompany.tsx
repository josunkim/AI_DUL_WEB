'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';

const companies = Array(10)
  .fill(null)
  .map((_, i) => ({
    id: i,
    name: `회사 이름 ${i + 1}`,
    image: '회사 이미지', // 실제 이미지 URL로 교체하세요
  }));

export default function WithCompany() {
  return (
    <section className='flex h-screen flex-col gap-20'>
      <h2 className='text-center text-7xl font-bold'>
        <span className='text-[80px] font-extrabold'>AI.DUL</span>의 가치를 믿고 함께 합니다
      </h2>

      {/* marquee가 좌우로 무한 이동하도록 설정 */}
      <div className='w-screen overflow-hidden'>
        <Marquee gradient={false} speed={50} pauseOnHover={false} pauseOnClick={false} loop={0} direction='left' className='flex'>
          {companies.map(({ id, name, image }) => (
            <div
              key={id}
              className='mr-8 flex flex-col items-center justify-center rounded-lg bg-amber-100 p-6 shadow-md' // 여기 mr-8 추가
              style={{ minWidth: 250 }}
            >
              <h2 className='font-bold'>{name}</h2>
              <p>{image}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
