'use client';

import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { GiPlantsAndAnimals } from 'react-icons/gi';
import { RxDashboard } from 'react-icons/rx';
import Link from 'next/link';
import {
  BsCashCoin,
  BsDiscord,
  BsGithub,
  BsInfoCircle,
  BsLinkedin,
  BsTelegram,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs';
import { BiSolidCoinStack } from 'react-icons/bi';
import { Buttonconnect } from '.';
import { RiNftFill } from 'react-icons/ri';
import Image from 'next/image';

const Menu = () => {
  const [menu, setMenu] = useState(false);
  if (menu) document.body.style.overflow = 'hidden';

  const closeMenu = () => {
    setMenu(false);
    document.body.style.overflow = 'auto';
  };
  return (
    <>
      {!menu && (
        <div className='flex sm:hidden absolute right-8 top-8'>
          <button className='cursor-pointer' onClick={() => setMenu(true)}>
            <HiMenuAlt3 size={40} />
          </button>
        </div>
      )}
      {menu && (
        <div className='bg-slate-400 h-screen min-w-[260px] flex sm:hidden absolute z-50'>
          <div className='p-4 flex flex-col justify-between h-screen fixed min-w-[260px] overflow-auto'>
            <div className='flex flex-col overflow-auto'>
              <Link
                href='/'
                className='flex gap-4 items-center'
                onClick={() => closeMenu()}
              >
                {/* <div className='bg-green-800 text-white p-3 rounded-lg'>
                  <GiPlantsAndAnimals size={30} />
                </div>
                <h1 className='text-xl font-bold'>Hello SunChain</h1> */}
                <Image src='/logo.png' width={180} height={50} alt='logo' />
              </Link>
              <span className='border-b-[1px] border-gray-200 w-full mx-auto mt-4 mb-2 flex'></span>
              <Link href='/' onClick={() => closeMenu()}>
                <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg flex gap-4 items-center'>
                  <RxDashboard size={30} />
                  Buy HSC
                </div>
              </Link>
              <Link href='/marketplace' onClick={() => closeMenu()}>
                <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg flex gap-4 items-center'>
                  <BsCashCoin size={30} />
                  Resell Marketplace
                </div>
              </Link>
              <Link href='/stake' onClick={() => closeMenu()}>
                <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg flex gap-4 items-center'>
                  <BiSolidCoinStack size={30} />
                  Stake NGC
                </div>
              </Link>
              <Link href='/my-nft' onClick={() => closeMenu()}>
                <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg flex gap-4 items-center'>
                  <RiNftFill size={30} />
                  My Nfts
                </div>
              </Link>
              {/* <Link href='/offset'>
              <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg flex gap-4 items-center'>
                <RiHandCoinFill size={30} />
                Offset
              </div>
            </Link> */}
              <Link href='/info' onClick={() => closeMenu()}>
                <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg flex gap-4 items-center'>
                  <BsInfoCircle size={30} />
                  Info
                </div>
              </Link>
              <button onClick={() => closeMenu()}>
                <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg flex gap-4 items-center'>
                  <AiFillCloseCircle size={30} />
                  Quittez menu
                </div>
              </button>
            </div>

            <div className='flex flex-col'>
              <span className='border-b-[1px] border-gray-200 w-full mx-auto pt-3 flex mb-4'></span>
              <div className='flex gap-3 mb-2'>
                <div className='rounded-lg bg-gray-800 hover:bg-gray-600 duration-300 ease-in-out p-3 text-white cursor-pointer'>
                  <BsTwitter size={20} className='text-white' />
                </div>
                <div className='rounded-lg bg-gray-800 hover:bg-gray-600 duration-300 ease-in-out p-3 text-white cursor-pointer'>
                  <BsYoutube size={20} className='text-white' />
                </div>
                <div className='rounded-lg bg-gray-800 hover:bg-gray-600 duration-300 ease-in-out p-3 text-white cursor-pointer'>
                  <BsDiscord size={20} className='text-white' />
                </div>
              </div>
              <div className='flex justify-end gap-3 mb-4'>
                <div className='rounded-lg bg-gray-800 hover:bg-gray-600 duration-300 ease-in-out p-3 text-white cursor-pointer'>
                  <BsGithub size={20} className='text-white' />
                </div>
                <div className='rounded-lg bg-gray-800 hover:bg-gray-600 duration-300 ease-in-out p-3 text-white cursor-pointer'>
                  <BsLinkedin size={20} className='text-white' />
                </div>
                <div className='rounded-lg bg-gray-800 hover:bg-gray-600 duration-300 ease-in-out p-3 text-white cursor-pointer'>
                  <BsTelegram size={20} className='text-white' />
                </div>
              </div>
              <Buttonconnect />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
