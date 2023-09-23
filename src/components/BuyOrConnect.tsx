'use client';

import { BiWalletAlt } from 'react-icons/bi';
import { IoExitOutline } from 'react-icons/io5';
import { useAccount } from 'wagmi';

const BuyOrConnect = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  return (
    <div className='col-span-2 lg:col-span-1 bg-white rounded-xl p-6 lg:max-h-[250px]'>
      {!isDisconnected && (
        <div className='flex flex-col'>
          <div className='flex gap-2 items-center'>
            <BiWalletAlt size={30} />
            <h1 className='text-2xl font-bold'>Buy HSC</h1>
          </div>
          <p className='mt-4'>
            If you are a beginner, we recommend following our step-by-step
            tutorial: How to Buy HSC Nft.
          </p>
          <p className='mt-2'>
            Otherwise, if you already have a wallet with CRC on Polygon, you can
            buy Nft directly on our collection page or in the resell
            marketplace.
          </p>
        </div>
      )}
      {isDisconnected && (
        <div className='flex flex-col'>
          <div className='flex gap-2 items-center'>
            <IoExitOutline size={40} />
            <p className='text-2xl font-bold'>
              Please Log In Or Connect A Wallet
            </p>
          </div>
          <p className='mt-4'>
            Some features are available only to users who are logged in. You can
            connect to your wallet via the button below.
          </p>
        </div>
      )}
      <div className='mt-2 font-semibold text-slate-400'></div>
    </div>
  );
};

export default BuyOrConnect;
