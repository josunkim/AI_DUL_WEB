'use client';

// @ts-expect-error: no type definitions for @ap.cx/react-fullpage
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import MainIntro from '@/components/SeniorCare/MainIntro';
import SeniorService from '@/components/SeniorCare/SeniorService';
import ResponsiveContainer from '@/shared/ResponsiveContainer';

export default function SeniorCarePage() {
  return (
    <main>
      <Fullpage>
        <FullPageSections>
          <FullpageSection style={{ height: '100vh' }}>
            <ResponsiveContainer>
              <MainIntro />
            </ResponsiveContainer>
          </FullpageSection>
          <FullpageSection style={{ height: '100vh' }}>
            <ResponsiveContainer>
              <SeniorService />
            </ResponsiveContainer>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </main>
  );
}
