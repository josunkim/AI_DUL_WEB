'use client';

import 'swiper/css';
import 'swiper/css/pagination';
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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

export default function Home() {
  return (
    <Stack spacing={4}>
      <Swiper
        direction='horizontal'
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        grabCursor
        speed={1000}
        autoplay={{ delay: 5200, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        style={{ width: '100%', height: 'calc(100vh - 64px)' }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <BackgroundVideo videoSrc='/assets/video/section1Video.mp4'>
            <Section1Text />
          </BackgroundVideo>
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <BackgroundVideo videoSrc='/assets/video/section2Video.mp4' playbackRate={2}>
            <Section2Text />
          </BackgroundVideo>
        </SwiperSlide>
      </Swiper>
      {/* Other Sections */}
      <SectionWhatWeDo />
      <MainSlogan />
      <GenerationCareIntro />
      <NicheSection />
      <Stack pt={4} justifyContent={'center'} alignContent={'center'} justifyItems={'center'} alignItems={'center'} pb={4}>
        <Contact />
      </Stack>
      <Footer />
    </Stack>
  );
}
