'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useState } from 'react';
import { useContractRead } from 'wagmi';
import { helloSunchineAbi } from '@/utils/helloSunChain.abi';

const Modal = () => {
  const [modal, setModal] = useState(false);
  if (modal) document.body.style.overflow = 'hidden';

  const { data: getTokenURI } = useContractRead({
    address: process.env.NEXT_PUBLIC_NFT1_CONTRACT_ADDRESS! as `0x${string}`,
    abi: helloSunchineAbi,
    functionName: 'baseTokenURI',
  });

  const convertUriToJson = async (uri: string) => {
    const res = await fetch(uri);
    const json = await res.json();
    return json;
  };

  return (
    <>
      <div className='p-4'>
        <button
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          onClick={() => setModal(true)}
        >
          Buy
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
                  <CardDescription>test</CardDescription>
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
              <div></div>
            </CardContent>

            <CardFooter className='flex flex-wrap justify-end gap-4'>
              <button
                className='px-4 py-2 bg-blue-600 text-white text-xl rounded-lg 
                flex justify-center items-center hover:bg-blue-900 ease-in-out duration-300'
                onClick={() => {
                  console.log(getTokenURI);
                  convertUriToJson(getTokenURI!);
                }}
              >
                Buy
              </button>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default Modal;
