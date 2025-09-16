import CompanyHistory from '@/components/Introduce/CompanyHistory';
import Contact from '@/components/Introduce/Contact';
import MainIntro from '@/components/Introduce/MainIntro';
import WithCompany from '@/components/Introduce/WithCompany';

export default function Introduce() {
  return (
    <>
      <MainIntro></MainIntro>
      <CompanyHistory></CompanyHistory>
      <WithCompany></WithCompany>
      <Contact></Contact>
    </>
  );
}
