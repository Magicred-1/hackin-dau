'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';

const Buttonconnect = () => {
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
                    className='bg-[#FFB811] hover:bg-[#ffbc11d3] duration-300 ease-in-out cursor-pointer text-white
                    px-6 uppercase font-semibold p-3 rounded-lg w-full text-center'
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
                  <div className='flex gap-3'>
                    <button
                      onClick={openAccountModal}
                      type='button'
                      className='px-4 py-3 text-white rounded-lg bg-[#FFB811] hover:bg-[#ffbc11d3] duration-300 ease-in-out'
                    >
                      <span>{account.displayName}</span>
                    </button>
                    <span className='px-4 py-2 rounded-lg bg-[#FFB811] font-bold text-white flex items-center'>
                      {account.displayBalance
                        ? `${account.displayBalance}`
                        : ''}
                    </span>
                  </div>
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
