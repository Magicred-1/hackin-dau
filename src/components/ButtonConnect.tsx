'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { BiSolidUserCircle } from 'react-icons/bi';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Buttonconnect = () => {
  const router = useRouter();
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    className='bg-green-800 hover:bg-green-600 cursor-pointer text-white
                    text-left px-6 uppercase font-semibold p-3 rounded-lg w-full'
                    onClick={openConnectModal}
                  >
                    Login / Connect
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type='button'>
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  {/* <button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type='button'
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button> */}

                  {/* TODO: Adding the design to the button */}
                  <div className='flex flex-col gap-1'>
                    <button
                      onClick={openAccountModal}
                      type='button'
                      className='px-4 py-2 text-white rounded-lg bg-[#E9B384] gap-4 items-center justify-center'
                    >
                      <span>{account.displayName}</span>
                      <span>
                        {account.displayBalance
                          ? `(${account.displayBalance})`
                          : ''}
                      </span>
                    </button>
                    <Link
                      href={'/play/stake'}
                      className='rounded-lg bg-[#F0B90B] justify-center items-center px-4 py-2 text-white text-center text-sm'
                    >
                      STAKE AND EARN
                    </Link>
                  </div>

                  <button
                    className='flex rounded-lg bg-[#E9B384] gap-4 items-center justify-center sm:pr-6 text-white font-bold'
                    onClick={() => router.push('/play')}
                  >
                    <Image
                      src='/play-icon.png'
                      alt='coin-icon'
                      width={80}
                      height={80}
                    />
                    <span className='sm:flex hidden'>Play</span>
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default Buttonconnect;
