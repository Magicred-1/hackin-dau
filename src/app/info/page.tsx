import Balances from '@/components/Balances';
import { BsInfoCircle } from 'react-icons/bs';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';
import { shortenAddress } from '@/utils/local';

const page = () => {
  return (
    <div className='grid grid-cols-2 gap-4 overflow-y-scroll'>
      <div className='col-span-1 bg-white rounded-xl p-6'>
        <div className='flex gap-2'>
          <BsInfoCircle size={30} />
          <h1 className='text-2xl font-bold items-center'>Info & FAQ</h1>
        </div>
        <h2 className='mt-2 font-semibold text-slate-400'>
          Common app-related questions and useful links. For comprehensive
          reading on HelloSunChain.
        </h2>

        <Accordion type='single' collapsible>
          <AccordionItem value='item-1'>
            <AccordionTrigger>1. How do I buy solar cells?</AccordionTrigger>
            <AccordionContent>
              Buying HSC NFT is simple. Simply connect, add funds to your
              wallet, head to the Buy HSC page, select the NFT you want.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>2. How do I get paid ?</AccordionTrigger>
            <AccordionContent>
              Your monthly income is paid into your Wallet directly. The monthly
              income you accumulate can be used immediately to do what you want.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>3. Can I sell my solar cells ?</AccordionTrigger>
            <AccordionContent>
              Yes you can sell it at any time on the resell Marketplace to
              another user.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger>10. Are my solar assets safe ?</AccordionTrigger>
            <AccordionContent>
              Yes. All solar assets are stored on the blockchain and are
              therefore safe from any form of manipulation. They are completely
              yours and cannot be taken away from you.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className='mt-8'>
          <h1 className='text-2xl font-bold items-center'>
            Official Contract Addresses
          </h1>

          <div className='flex flex-col mt-4'>
            <div className='flex items-center gap-4 tracking-wider font-bold'>
              <Image
                width={30}
                height={30}
                src='/test.png'
                alt='img'
                className='rounded-full'
              />
              HSC token
            </div>
            <span className='text-slate-400 underline underline-offset-2 mt-2 cursor-pointer'>
              {shortenAddress('0xE1E71b5FeA42cBa159fF3f12C4C104eE38a33a2F')}
            </span>
          </div>
          <div className='flex flex-col mt-4'>
            <div className='flex items-center gap-4 tracking-wider font-bold'>
              <Image
                width={30}
                height={30}
                src='/test.png'
                alt='img'
                className='rounded-full'
              />
              HSC stacking
            </div>
            <span className='text-slate-400 underline underline-offset-2 mt-2 cursor-pointer'>
              {shortenAddress('0xE1E71b5FeA42cBa159fF3f12C4C104eE38a33a2F')}
            </span>
          </div>
        </div>
      </div>
      <Balances />
    </div>
  );
};

export default page;
