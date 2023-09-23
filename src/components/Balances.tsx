import { MdOutlineAccountBalance } from 'react-icons/md';

const Balances = () => {
  return (
    <div className='col-span-1 bg-white rounded-xl p-6 max-h-[200px]'>
      <div className='flex gap-2'>
        <MdOutlineAccountBalance size={30} />
        <h1 className='text-2xl font-bold items-center'>Balances</h1>
      </div>
      <div className='mt-6'>
        <div>
          <span className='text-2xl font-bold'>0</span>
          <h2 className='text-xl font-bold text-slate-400'>HSC</h2>
        </div>
      </div>
    </div>
  );
};

export default Balances;
