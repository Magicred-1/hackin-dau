'use client';

import Link from 'next/link';
import { RxDashboard, RxPerson } from 'react-icons/rx';
import { GiPlantsAndAnimals } from 'react-icons/gi';
import { FiSettings } from 'react-icons/fi';
import { useState } from 'react';
import ButtonConnect from './ButtonConnect';

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState({
    dashboard: false,
    profile: false,
    settings: false,
  });
  return (
    <div className='flex'>
      <div className='h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between min-w-[260px]'>
        <div className='flex flex-col'>
          <Link href='/' className='flex gap-4 items-center'>
            <div className='bg-green-800 text-white p-3 rounded-lg'>
              <GiPlantsAndAnimals size={25} />
            </div>
            <h1 className='text-xl font-bold'>Negative Carbon</h1>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full mx-auto pt-4 flex mb-4'></span>
          <ButtonConnect />
          <span className='border-b-[1px] border-gray-200 w-full mx-auto pt-4 flex'></span>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex gap-4 items-center'>
              <RxDashboard size={20} />
              Buy KLIMA
            </div>
          </Link>
          <Link href='/profile'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FiSettings size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className='w-fit p-4'>{children}</main>
    </div>
  );
};

export default Sidebar;
