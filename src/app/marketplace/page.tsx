import { BuyOrConnect, SolarCard } from '@/components';
import Balances from '@/components/Balances';
import { BiSolidCollection } from 'react-icons/bi';

const page = () => {
  return (
    <div className='grid grid-cols-2 gap-4 overflow-y-scroll'>
      <Balances />
      <BuyOrConnect />

      <div className='col-span-2 bg-white rounded-xl p-6'>
        <div className='flex gap-2'>
          <BiSolidCollection size={30} />
          <h1 className='text-2xl font-bold items-center'>Marketplace</h1>
        </div>
        <div className='mt-8 grid grid-cols-6 gap-4'>
          <SolarCard
            name='standard'
            price={100}
            availableNumber={100}
            imagePath='/1.png'
            href='/'
            location='Perpignan, France'
            reseller='0x1A2cDc9Ea7dFc55aeaDb314bB8C3b09E938c989b'
          />
          <SolarCard
            name='premium'
            price={500}
            availableNumber={100}
            imagePath='/5.png'
            href='/'
            location='Perpignan, France'
            reseller='0x1A2cDc9Ea7dFc55aeaDb314bB8C3b09E938c989b'
          />
          <SolarCard
            name='epic'
            price={1000}
            availableNumber={100}
            imagePath='/3.png'
            href='/'
            location='Perpignan, France'
            reseller='0x1A2cDc9Ea7dFc55aeaDb314bB8C3b09E938c989b'
          />
          <SolarCard
            name='legendary'
            price={10000}
            availableNumber={100}
            imagePath='/4.png'
            href='/'
            location='Perpignan, France'
            reseller='0x1A2cDc9Ea7dFc55aeaDb314bB8C3b09E938c989b'
          />
        </div>
      </div>
    </div>
  );
};

export default page;
