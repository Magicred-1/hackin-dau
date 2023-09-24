import { Balances, BuyOrConnect, SolarCard, MyNft } from '@/components';
import { BiSolidCollection } from 'react-icons/bi';

const page = () => {
  return (
    <div className='grid grid-cols-2 gap-4 overflow-y-scroll'>
      <Balances />
      <BuyOrConnect />

      <div className='col-span-2 bg-white rounded-xl p-6'>
        <div className='flex gap-2'>
          <BiSolidCollection size={30} />
          <h1 className='text-2xl font-bold items-center'>My Nfts</h1>
        </div>
        <div className='mt-8 grid grid-cols-6 gap-4'>
          <MyNft />
        </div>
      </div>
    </div>
  );
};

export default page;
