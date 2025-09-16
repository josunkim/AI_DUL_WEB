'use client';

// @ts-expect-error: no type definitions for @ap.cx/react-fullpage
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import MainIntro from '@/components/ChildCare/MainIntro';
import ChildApp from '@/components/ChildCare/ChildApp';
import ResponsiveContainer from '@/shared/ResponsiveContainer';

export default function ChildCarePage() {
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
              <ChildApp />
            </ResponsiveContainer>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </main>
  );
}
