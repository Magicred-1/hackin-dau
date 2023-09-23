'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import { Buttonconnect } from '.';
import { shortenAddress } from '../utils/local';

const Stake = () => {
  const [stake, setStake] = useState(true);
  const { address, isConnecting, isDisconnected } = useAccount();
  return (
    <div>
      <div className='border rounded-lg grid grid-cols-2 bg-slate-200'>
        <button
          className={`font-bold uppercase col-span-1 text-lg text-center rounded-lg py-2 ${
            stake ? 'bg-green-800 text-white' : 'hover:text-black/50'
          } duration-300 ease-in-out`}
          onClick={() => setStake((prev) => !prev)}
        >
          Stake
        </button>
        <button
          className={`font-bold uppercase col-span-1 text-lg text-center rounded-lg py-2 ${
            !stake ? 'bg-green-800 text-white' : 'hover:text-black/50'
          }  duration-300 ease-in-out`}
          onClick={() => setStake((prev) => !prev)}
        >
          Unstake
        </button>
      </div>

      <div className='relative mt-6'>
        <input
          type='number'
          id='Search'
          placeholder='Amount to stake'
          className='w-full rounded-md border-gray-200 py-3 pe-20 shadow-sm sm:text-sm focus:!outline-none !outline-none'
        />

        <span className='absolute inset-y-0 end-0 grid w-16 place-content-center bg-gray-400 rounded-r-md'>
          <button type='button' className='text-gray-600 hover:text-gray-700'>
            MAX
          </button>
        </span>
      </div>

      {!isDisconnected && (
        <div className='m-4 text-center text-slate-500 font-semibold'>
          {shortenAddress(address)}
        </div>
      )}

      <span
        className={`border-b-[1px] border-gray-200 w-full mx-auto flex ${
          isDisconnected ? 'm-8' : 'mb-8'
        }`}
      />

      {isDisconnected && <Buttonconnect />}
    </div>
  );
};

export default Stake;
