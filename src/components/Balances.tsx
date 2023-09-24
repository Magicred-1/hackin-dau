'use client';

import { helloSunchineAbi } from '@/utils/helloSunChain.abi';
import { useState } from 'react';
import { MdOutlineAccountBalance } from 'react-icons/md';
import { useContractRead } from 'wagmi';
import { useAccount } from 'wagmi';

const Balances = () => {
  const [standardNFTNumber, setStandardNFTNumber] = useState<number>(0);
  const { address, isConnecting, isDisconnected } = useAccount();
  const { data, refetch } = useContractRead({
    address: process.env.NEXT_PUBLIC_NFT1_CONTRACT_ADDRESS! as `0x${string}`,
    abi: helloSunchineAbi,
    functionName: 'getUserTokenURIs',
    args: [address!],
    onSuccess: (data) => {
      console.log('SUCCESS');
      setStandardNFTNumber(data.length);
    },
    onError: (error) => {
      console.log('testerror');
      console.log(error);
      setTimeout(() => {
        refetch();
      }, 600);
    },
  });
  return (
    <div className='lg:col-span-1 col-span-2 bg-white rounded-xl p-6 max-h-[350px]'>
      <div className='flex gap-2'>
        <MdOutlineAccountBalance size={30} />
        <h1 className='text-2xl font-bold items-center'>Balances</h1>
      </div>
      <div className='mt-6'>
        <div>
          <span className='text-2xl font-bold'>{standardNFTNumber}</span>
          <h2 className='text-xl font-bold text-slate-400'>Standard HSC</h2>
        </div>
        <div>
          <span className='text-2xl font-bold'>0</span>
          <h2 className='text-xl font-bold text-slate-400'>Premium HSC</h2>
        </div>
        <div>
          <span className='text-2xl font-bold'>0</span>
          <h2 className='text-xl font-bold text-slate-400'>Epic HSC</h2>
        </div>
        <div>
          <span className='text-2xl font-bold'>0</span>
          <h2 className='text-xl font-bold text-slate-400'>Legendary HSC</h2>
        </div>
      </div>
    </div>
  );
};

export default Balances;
