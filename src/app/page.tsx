import { BiWalletAlt } from 'react-icons/bi';
import { MdOutlineAccountBalance } from 'react-icons/md';

export default function Home() {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='col-span-1 bg-white rounded-xl p-6'>
        <div className='flex gap-2 items-center'>
          <BiWalletAlt size={30} />
          <h1 className='text-2xl font-bold'>Buy NGC</h1>
        </div>
        <div className='mt-2 font-semibold text-slate-400'>
          If you are a beginner, we recommend following our step-by-step
          tutorial: How to Buy KLIMA. Otherwise, if you already have a wallet
          with MATIC on Polygon, the best way to get KLIMA is to swap on
          Sushi.com. If you prefer to pay with a credit card instead, you can
          use Transak to buy KLIMA directly.
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
      </div>
    </div>
  );
}
