import Image from 'next/image';
import { HiLocationMarker } from 'react-icons/hi';
import { Badge } from '@/components/ui/badge';
import { TiFlash } from 'react-icons/ti';
import { shortenAddress } from '@/utils/local';
interface SolarCardProps {
  name: string;
  imagePath: string;
  href: string;
  availableNumber: number;
  price: number;
  location: string;
  reseller?: string;
}

const SolarCard = ({
  name,
  imagePath,
  href,
  availableNumber,
  price,
  location,
  reseller,
}: SolarCardProps) => {
  return (
    <div className='bg-white border border-gray-200 rounded-lg shadow col-span-6 md:col-span-3 xl:col-span-2 relative'>
      {!reseller && (
        <div className='absolute z-30 bg-slate-200 rounded-tl-lg rounded-r-full pr-2'>
          <div className='p-2'>
            <span className='text-xl font-bold'>
              {availableNumber} remaining
            </span>
          </div>
        </div>
      )}
      <div className='w-full relative h-[350px]'>
        <Image
          className='rounded-t-lg'
          src={imagePath}
          alt='img'
          fill
          priority
        />
      </div>
      <div className='p-4 flex flex-col'>
        <div className='flex gap-2 items-center'>
          <HiLocationMarker className='inline-block mr-1' size={25} />
          <h3 className='font-semibold text-xl'>{location}</h3>
        </div>
        <div className='flex justify-between mt-4'>
          <div className='font-semibold text-green-600 text-lg flex items-center'>
            <TiFlash size={25} />
            {price} MATIC
          </div>
          <Badge className='text-normal text-white'>{name}</Badge>
        </div>
        {reseller && (
          <p className='mt-4'>
            <span className='font-semibold italic text-slate-400 cursor-pointer'>
              Seller :
            </span>{' '}
            {shortenAddress(reseller)}
          </p>
        )}
      </div>
      <div className='p-4'>
        <a
          href='#'
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
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
        </a>
      </div>
    </div>
  );
};

export default SolarCard;
