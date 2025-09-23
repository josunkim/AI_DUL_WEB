'use client';

import React from 'react';
import MainIntro from './_components/MainIntro';
import AdultCareParentsIntro from './_components/AdultCareParentsIntro';
import AdultCareCoParenting from './_components/AdultCareCoParenting';
import AdultCareArchive from './_components/AdultCareArchive';
import AdultCareAgentAi from './_components/AdultCareAgentAi';
import AdultCareGoodFit from './_components/AdultCareGoodFit';
import AdultCareTiptalk from './_components/AdultCareTiptalk';
import AdultCareNote from './_components/AdultCareNote';

export default function AdultCarePage() {
  return (
    <>
      <MainIntro />
      <AdultCareParentsIntro />
      <AdultCareCoParenting />
      <AdultCareArchive />
      <AdultCareAgentAi />
      <AdultCareGoodFit />
      <AdultCareTiptalk />
      <AdultCareNote />
    </>
  );
}
