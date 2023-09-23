import Link from 'next/link';
import { GiPlantsAndAnimals } from 'react-icons/gi';
import {
  BsTwitter,
  BsYoutube,
  BsDiscord,
  BsGithub,
  BsLinkedin,
  BsTelegram,
  BsInfoCircle,
  BsCashCoin,
} from 'react-icons/bs';
import { RxDashboard } from 'react-icons/rx';
import { BiSolidCoinStack } from 'react-icons/bi';
import ButtonConnect from './ButtonConnect';
import Menu from './Menu';

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col sm:flex-row'>
      <div className='bg-white border-r-[1px] sm:flex hidden flex-col justify-between min-w-[260px] h-screen z-50'>
        <div className='p-4 flex flex-col justify-between h-screen fixed min-w-[260px]'>
          <div className='flex flex-col'>
            <Link href='/' className='flex gap-4 items-center'>
              <div className='bg-green-800 text-white p-3 rounded-lg'>
                <GiPlantsAndAnimals size={30} />
              </div>
              <h1 className='text-xl font-bold'>Hello SunChain</h1>
            </Link>
            <span className='border-b-[1px] border-gray-200 w-full mx-auto mt-4 mb-2 flex'></span>
            <Link href='/'>
              <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg flex gap-4 items-center'>
                <RxDashboard size={30} />
                Buy HSC
              </div>
            </Link>
            <Link href='/marketplace'>
              <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg flex gap-4 items-center'>
                <BsCashCoin size={30} />
                Resell Marketplace
              </div>
            </Link>
            <Link href='/stake'>
              <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg flex gap-4 items-center'>
                <BiSolidCoinStack size={30} />
                Stake HSC
              </div>
            </Link>
            {/* <Link href='/offset'>
              <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg flex gap-4 items-center'>
                <RiHandCoinFill size={30} />
                Offset
              </div>
            </Link> */}
            <Link href='/info'>
              <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg flex gap-4 items-center'>
                <BsInfoCircle size={30} />
                Info
              </div>
            </Link>
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
            <ButtonConnect />
          </div>
        </div>
      </div>
      <Menu />
      <main className='w-full p-4 bg-slate-200'>{children}</main>
    </div>
  );
};

export default Sidebar;
