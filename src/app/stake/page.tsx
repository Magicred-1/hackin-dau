import Image from 'next/image';
import { Stake } from '@/components';
import { BiReset, BiSolidCoinStack } from 'react-icons/bi';
import { MdOutlineAccountBalance } from 'react-icons/md';

const page = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='col-span-1 bg-white rounded-xl p-6'>
        <div className='flex gap-2 items-center'>
          <BiSolidCoinStack size={30} />
          <h1 className='text-2xl font-bold'>Stake NGC</h1>
        </div>
        <div className='mt-2 font-semibold text-slate-400'>
          Stake, hold, and earn compounding NGC.
        </div>

        <div className='mt-8 border rounded-xl p-6'>
          <Stake />
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='col-span-1 bg-white rounded-xl p-6'>
          <div className='flex gap-2'>
            <MdOutlineAccountBalance size={30} />
            <h1 className='text-2xl font-bold items-center'>Balances</h1>
          </div>
          <div className='mt-6'>
            <span className='text-3xl font-bold'>0</span>
            <h2 className='text-2xl font-bold text-slate-400'>NGC</h2>
          </div>
          <div className='mt-6'>
            <span className='text-3xl font-bold'>0</span>
            <h2 className='text-2xl font-bold text-slate-400'>sNGC</h2>
          </div>
        </div>

        <div className='col-span-1 bg-white rounded-xl p-6'>
          <div className='flex gap-2'>
            <BiReset size={30} />
            <h1 className='text-2xl font-bold items-center'>Rebase</h1>
          </div>
          <div className='mt-6'>
            <span className='text-3xl font-bold'>In 2.2 Hours</span>
            <h2 className='text-2xl font-bold text-slate-400'>
              Approx. next rebase
            </h2>
          </div>
          <div className='mt-6'>
            <span className='text-3xl font-bold'>0.02%</span>
            <h2 className='text-2xl font-bold text-slate-400'>
              Percent payout
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
