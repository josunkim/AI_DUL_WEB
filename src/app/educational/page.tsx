'use client';

// @ts-expect-error: no type definitions for @ap.cx/react-fullpage
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import ParentSchool from '@/components/Educational/ParentSchool';
import VisionStatement from '@/components/Educational/VisionStatement';
import ResponsiveContainer from '@/shared/ResponsiveContainer';

export default function EducationalPage() {
  return (
    <main>
      <Fullpage>
        <FullPageSections>
          <FullpageSection style={{ height: '100vh' }}>
            <ResponsiveContainer>
              <VisionStatement></VisionStatement>
            </ResponsiveContainer>
          </FullpageSection>
          <FullpageSection style={{ height: '100vh' }}>
            <ResponsiveContainer>
              <ParentSchool></ParentSchool>
            </ResponsiveContainer>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </main>
  );
}
