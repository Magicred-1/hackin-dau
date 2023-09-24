'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { usePrepareContractWrite, useContractWrite } from 'wagmi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useState } from 'react';
import { useContractRead } from 'wagmi';
import { helloSunchineAbi } from '@/utils/helloSunChain.abi';
import { TiFlash } from 'react-icons/ti';
import { Badge } from './ui/badge';
import { HiLocationMarker } from 'react-icons/hi';
import { parseEther } from 'viem';
import { useAccount } from 'wagmi';
import toast from 'react-hot-toast';

interface ModalProps {
  location: string;
  price: number;
  name: string;
}

const Modal = ({ location, price, name }: ModalProps) => {
  const [modal, setModal] = useState(false);
  if (modal) document.body.style.overflow = 'hidden';

  const { address, isConnecting, isDisconnected } = useAccount();

  const { data: getTokenURI } = useContractRead({
    address: process.env.NEXT_PUBLIC_NFT1_CONTRACT_ADDRESS! as `0x${string}`,
    abi: helloSunchineAbi,
    functionName: 'baseTokenURI',
  });

  const { config, error } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_NFT1_CONTRACT_ADDRESS! as `0x${string}`,
    abi: helloSunchineAbi,
    functionName: 'mint',
    value: parseEther('0.001'),
  });
  const {
    write: mintNft,
    data,
    isLoading,
    isSuccess,
  } = useContractWrite({
    ...config,
    onSuccess: () => {
      setModal(false);
      document.body.style.overflow = 'auto';
      toast.success('NFT minted successfully');
    },
  });

  const convertUriToJson = async (uri: string) => {
    const res = await fetch(uri);
    const json = await res.json();
    return json;
  };

  const handleMint = async () => {
    if (!getTokenURI) return console.log('no token uri');
    const json = await convertUriToJson(getTokenURI);
    mintNft?.();
  };

  return (
    <>
      <div className='p-4'>
        <button
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          onClick={() => setModal(true)}
          disabled={isConnecting || isDisconnected}
        >
          {isDisconnected ? 'Connect to wallet' : 'Mint'}
          <svg
            className='w-3.5 h-3.5 ml-2'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 5h12m0 0L9 1m4 4L9 9'
            />
          </svg>
        </button>
      </div>
      {modal && (
        <div className='fixed flex justify-center items-center z-50 left-0 right-0 top-0 bottom-0 bg-[#5d5d5d1d]'>
          <Card className='w-3/4 lg:w-[600px]'>
            <CardHeader>
              <div className='flex justify-between'>
                <div>
                  <CardTitle>Minter un NFT</CardTitle>
                  <CardDescription>{location}</CardDescription>
                </div>
                <AiFillCloseCircle
                  className='text-3xl cursor-pointer text-red-600 hover:text-red-900 duration-300 ease-in-out'
                  onClick={() => {
                    setModal(false);
                    document.body.style.overflow = 'auto';
                  }}
                />
              </div>
            </CardHeader>

            <CardContent>
              <div className='flex flex-col'>
                <div className='flex gap-2 items-center'>
                  <HiLocationMarker className='inline-block mr-1' size={25} />
                  <h3 className='font-semibold text-xl'>{location}</h3>
                </div>
                <div className='flex justify-between mt-4'>
                  <div className='font-semibold text-green-600 text-lg flex items-center'>
                    <TiFlash size={25} />
                    {price} CRC
                  </div>
                  <Badge className='text-normal text-white'>{name}</Badge>
                </div>
              </div>
            </CardContent>

            <CardFooter className='flex flex-wrap justify-end gap-4'>
              {!isLoading ? (
                <button
                  className='px-4 py-2 bg-blue-600 text-white text-xl rounded-lg 
                flex justify-center items-center hover:bg-blue-900 ease-in-out duration-300'
                  onClick={() => handleMint()}
                >
                  Mint
                </button>
              ) : (
                <div className='flex justify-center items-center'>
                  <div
                    className={`animate-spin rounded-full h-8 w-8 border-b-2 border-red-700`}
                  />
                </div>
              )}
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default Modal;
