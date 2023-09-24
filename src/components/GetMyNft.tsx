'use client';
import { helloSunchineAbi } from '@/utils/helloSunChain.abi';
import { useEffect, useState } from 'react';
import { useContractRead } from 'wagmi';

const GetMyNft = ({ wallet }: { wallet: `0x${string}` }) => {
  const [nftsIds, setNftsIds] = useState<bigint[] | undefined>(undefined);
  const { data } = useContractRead({
    address: process.env.NEXT_PUBLIC_NFT1_CONTRACT_ADDRESS! as `0x${string}`,
    abi: helloSunchineAbi,
    functionName: 'getUserNFTs',
    args: [wallet],
    onSuccess: (data) => {
      console.log('test');
      console.log(data);
      const modifiableData = Array.from(data);
      setNftsIds(modifiableData);
    },
    onError: (error) => {
      console.log('testerror');
      console.log(error);
    },
  });

  const convertUriToJson = async (uri: string) => {
    const res = await fetch(uri);
    const json = await res.json();
    return json;
  };

  return (
    <>
      {/* {nftsIds &&
        nftsIds.map((item) => (
          <SolarCard
            name='standard'
            price={100}
            availableNumber={100}
            imagePath='/1.png'
            href='/'
            location='Perpignan, France'
          />
        ))} */}
    </>
  );
};

export default GetMyNft;
