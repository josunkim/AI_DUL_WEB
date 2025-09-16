import Image from 'next/image';
import TeachingImg from '@/assets/img/teachingImg.png';

export const ServiceMechanism = () => {
  return (
    <section className='flex min-h-screen w-full flex-col bg-black p-20 lg:flex-row'>
      <div className='flex flex-1 flex-col gap-8 text-white'>
        <p>아이마다 환경에 반응하는 민감도가 다릅니다.</p>
        <p>어떤 아이는 스트레스에 더 약한 대신, 따뜻한 지지 속에서 더 놀라운 성장을 이룹니다.</p>
        <p>AI.DUL은 “차별적 민감성(Differential Susceptibility) 이론을 기반으로 아기부터 성장 가능성을 예측하고, 부모에게 맞춤형 양육 솔루션을 제공합니다.</p>
        <p>아기부터 노인까지 인간의 삶의 균형을 지켜주며 정신적 건강과 행복을 함께 합니다.</p>
        <p>“탄생부터 노년까지, 민감한 뇌를 위한 맞춤 성장, AI.DUL이 전 생애를 돌봅니다”</p>
      </div>
      <div className='mt-10 flex flex-1 items-center justify-center lg:mt-0'>
        <Image src={TeachingImg} alt='Service Mechanism Diagram' width={700} height={400} className='h-auto w-full max-w-xl rounded-xl object-cover shadow-2xl' />
      </div>
    </section>
  );
};
