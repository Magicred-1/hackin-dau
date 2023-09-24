import { BuyOrConnect, Balances, SolarCard } from '@/components';
import { BiSolidCollection } from 'react-icons/bi';

export default function Home() {
  return (
    <div className='grid grid-cols-2 gap-4 overflow-y-scroll'>
      <Balances />
      <BuyOrConnect />

      <div className='col-span-2 bg-white rounded-xl p-6'>
        <div className='flex gap-2'>
          <BiSolidCollection size={30} />
          <h1 className='text-2xl font-bold items-center'>Collection</h1>
        </div>
        <div className='mt-8 grid grid-cols-6 gap-4'>
          <SolarCard
            name='standard'
            price={0.001}
            availableNumber={100}
            imagePath='https://emerald-impressive-salmon-919.mypinata.cloud/ipfs/QmeY8oXzqxxzzFxrV5S1Q46BEhufQsyXsw1vcSLJ2QYC6W'
            href='/'
            location='Perpignan, France'
          />
          <SolarCard
            name='premium'
            price={0.01}
            availableNumber={100}
            imagePath='/5.png'
            href='/'
            location='Perpignan, France'
          />
          <SolarCard
            name='epic'
            price={0.1}
            availableNumber={100}
            imagePath='/3.png'
            href='/'
            location='Perpignan, France'
          />
          <SolarCard
            name='legendary'
            price={1}
            availableNumber={100}
            imagePath='/4.png'
            href='/'
            location='Perpignan, France'
          />
        </div>
      </div>
    </div>
  );
}
