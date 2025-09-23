'use client';

import ResponsiveContainer from '@/shared/ResponsiveContainer';
import MainIntro from './_components/MainIntro';
import SeniorService from './_components/SeniorService';

export default function SeniorCarePage() {
  return (
    <>
      <ResponsiveContainer>
        <MainIntro />
      </ResponsiveContainer>
      <ResponsiveContainer>
        <SeniorService />
      </ResponsiveContainer>
    </>
  );
}
