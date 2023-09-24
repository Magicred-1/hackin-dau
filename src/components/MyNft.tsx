'use client';

import { useAccount } from 'wagmi';
import { GetMyNft } from '.';

const MyNft = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  if (isDisconnected) return;
  if (isConnecting) return <div>Connecting...</div>;
  return address && <GetMyNft wallet={address} />;
};

export default MyNft;
