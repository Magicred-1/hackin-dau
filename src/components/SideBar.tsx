import Link from 'next/link';
import { GiPlantsAndAnimals, GiJamesBondAperture } from 'react-icons/gi';
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
import { RiHandCoinFill } from 'react-icons/ri';
import { BiSolidCoinStack, BiWalletAlt } from 'react-icons/bi';
import ButtonConnect from './ButtonConnect';

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <div className='h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between min-w-[280px]'>
        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-col'>
            <Link href='/' className='flex gap-4 items-center'>
              <div className='bg-green-800 text-white p-3 rounded-lg'>
                <GiPlantsAndAnimals size={30} />
              </div>
              <h1 className='text-xl font-bold'>Negative Carbon</h1>
            </Link>
            <span className='border-b-[1px] border-gray-200 w-full mx-auto mt-4 mb-2 flex'></span>
            <Link href='/'>
              <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg flex gap-4 items-center'>
                <BiWalletAlt size={30} />
                Buy NGC
              </div>
            </Link>
            <Link href='/stake'>
              <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg flex gap-4 items-center'>
                <BiSolidCoinStack size={30} />
                Stake NGC
              </div>
            </Link>
            <Link href='/bonds'>
              <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg flex gap-4 items-center'>
                <GiJamesBondAperture size={30} />
                Bond Carbon
              </div>
            </Link>
            {/* <Link href='/wrap'>
              <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg flex gap-4 items-center'>
                <GrNewWindow size={30} />
                Wrap sKLIMA
              </div>
            </Link> */}
            <Link href='/offset'>
              <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg flex gap-4 items-center'>
                <RiHandCoinFill size={30} />
                Offset
              </div>
            </Link>
            <Link href='/redeem'>
              <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg flex gap-4 items-center'>
                <BsCashCoin size={30} />
                Buy
              </div>
            </Link>
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
      <main className='w-full p-4 bg-slate-200'>{children}</main>
    </div>
  );
};

export default Sidebar;
