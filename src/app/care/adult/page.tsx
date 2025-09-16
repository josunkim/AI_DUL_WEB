'use client';

import React from 'react';
// @ts-expect-error: no type definitions for @ap.cx/react-fullpage
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import MainIntro from '@/components/AdultCare/MainIntro';
import AdultCareParentsIntro from '@/components/AdultCare/AdultCareParentsIntro';
import AdultCareCoParenting from '@/components/AdultCare/AdultCareCoParenting';
import AdultCareArchive from '@/components/AdultCare/AdultCareArchive';
import AdultCareAgentAi from '@/components/AdultCare/AdultCareAgentAi';
import AdultCareGoodFit from '@/components/AdultCare/AdultCareGoodFit';
import AdultCareTiptalk from '@/components/AdultCare/AdultCareTiptalk';
import AdultCareNote from '@/components/AdultCare/AdultCareNote';
import ResponsiveContainer from '@/shared/ResponsiveContainer';

export default function AdultCarePage() {
  return (
    <main>
      <ResponsiveContainer>
        <Fullpage>
          <FullPageSections>
            <FullpageSection style={{ height: '100vh' }}>
              <MainIntro />
            </FullpageSection>
            <FullpageSection style={{ height: '100vh' }}>
              <AdultCareParentsIntro />
            </FullpageSection>
            <FullpageSection style={{ height: '100vh' }}>
              <AdultCareCoParenting />
            </FullpageSection>
            <FullpageSection style={{ height: '100vh' }}>
              <AdultCareArchive />
            </FullpageSection>
            <FullpageSection style={{ height: '100vh' }}>
              <AdultCareAgentAi />
            </FullpageSection>
            <FullpageSection style={{ height: '100vh' }}>
              <AdultCareGoodFit />
            </FullpageSection>
            <FullpageSection style={{ height: '100vh' }}>
              <AdultCareTiptalk />
            </FullpageSection>
            <FullpageSection style={{ height: '100vh' }}>
              <AdultCareNote />
            </FullpageSection>
          </FullPageSections>
        </Fullpage>
      </ResponsiveContainer>
    </main>
  );
}
