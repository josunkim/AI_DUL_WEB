'use client';

import { Stack } from '@mui/system';
import BackgroundVideo from '@/shared/components/BackgroundVideo';
import Footer from '@/shared/components/Footer';
import { Contact } from '@/components/Introduce/Contact';
import { Section1Text } from './_components/Section1Text';
import { Section2Text } from './_components/Section2Text';
import { MainSlogan } from './_components/MainSlogan';
import { GenerationCareIntro } from './_components/GenerationCareIntro';
import SectionWhatWeDo from './_components/SectionWhatWeDo';
import { NicheSection } from './_components/NicheSection';

export default function Home() {
  return (
    <Stack width={'100%'} spacing={0}>
      {/* Section 1: Background Video with Text Overlay */}
      <BackgroundVideo videoSrc='/assets/video/section1Video.mp4'>
        <Section1Text />
      </BackgroundVideo>
      {/* Section 2: Background Video with Text Overlay */}
      <BackgroundVideo videoSrc='/assets/video/section2Video.mp4' playbackRate={2}>
        <Section2Text />
      </BackgroundVideo>
      {/* Other Sections */}
      <SectionWhatWeDo />
      <MainSlogan />
      <GenerationCareIntro />
      <NicheSection />
      <Stack spacing={4}>
        <Contact />
        <Footer />
      </Stack>
    </Stack>
  );
}
