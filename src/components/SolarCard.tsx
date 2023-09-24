import Image from 'next/image';
import { HiLocationMarker } from 'react-icons/hi';
import { Badge } from '@/components/ui/badge';
import { TiFlash } from 'react-icons/ti';
import { shortenAddress } from '@/utils/local';
import Modal from './Modal';
interface SolarCardProps {
  name: string;
  imagePath: string;
  href: string;
  availableNumber: number;
  price: number;
  location: string;
  reseller?: string;
  myWallet?: string;
  howMuch?: number;
}

const SolarCard = ({
  name,
  imagePath,
  href,
  availableNumber,
  price,
  location,
  reseller,
  myWallet,
  howMuch,
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
        {!howMuch && (
          <>
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
          </>
        )}
        {howMuch && (
          <div>
            <span>You have {howMuch} of it</span>
          </div>
        )}
        {reseller && (
          <p className='mt-4'>
            <span className='font-semibold italic text-slate-400 cursor-pointer'>
              Seller :
            </span>{' '}
            {shortenAddress(reseller)}
          </p>
        )}
      </div>
      {!howMuch && <Modal location={location} price={price} name={name} />}
    </div>
  );
};

export default SolarCard;
