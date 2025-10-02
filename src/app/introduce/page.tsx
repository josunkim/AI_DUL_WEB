import { Stack } from '@mui/system';
import { CompanyHistory } from './_components/CompanyHistory';
import { MainIntro } from './_components/MainIntro';
import { WithCompany } from './_components/WithCompany';

const Introduce = () => {
  return (
    <Stack pt={'64px'}>
      <MainIntro />
      <CompanyHistory />
      <WithCompany />
    </Stack>
  );
};
export default Introduce;
