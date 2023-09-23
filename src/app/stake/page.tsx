import { Stake } from '@/components';
import Balances from '@/components/Balances';
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
        <h2 className='mt-2 font-semibold text-slate-400'>
          Stake, hold, and earn compounding NGC.
        </h2>

        <div className='mt-8 border rounded-xl p-6'>
          <Stake />
        </div>
      </div>

      <Balances />

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
          <h2 className='text-2xl font-bold text-slate-400'>Percent payout</h2>
        </div>
      </div>
    </div>
  );
};

export default page;
