'use client';
import { helloSunchineAbi } from '@/utils/helloSunChain.abi';
import { useEffect, useState } from 'react';
import { useContractRead } from 'wagmi';
import { SolarCard } from '.';

interface NFTProp {
  name: string;
  description: string;
  image: string;
}

const GetMyNft = ({ wallet }: { wallet: `0x${string}` }) => {
  const [standardNFTNumber, setStandardNFTNumber] = useState<number>(0);
  const [standardNFTJson, setStandardNFTJson] = useState<NFTProp>();
  const { data, refetch } = useContractRead({
    address: process.env.NEXT_PUBLIC_NFT1_CONTRACT_ADDRESS! as `0x${string}`,
    abi: helloSunchineAbi,
    functionName: 'getUserTokenURIs',
    args: [wallet],
    onSuccess: (data) => {
      console.log('SUCCESS');
      if (data) {
        convertUriToJson(data[0]).then((res) => {
          setStandardNFTJson(res);
        });
        setStandardNFTNumber(data.length);
        console.log(data.length);
      }
    },
    onError: (error) => {
      console.log('testerror');
      console.log(error);
      setTimeout(() => {
        refetch();
      }, 600);
    },
  });

  const convertUriToJson = async (uri: string): Promise<NFTProp> => {
    const res = await fetch(uri);
    const json = await res.json();
    return json;
  };

  return (
    <>
      {standardNFTJson && standardNFTNumber && (
        <SolarCard
          key={standardNFTJson.name}
          name='standard'
          price={100}
          availableNumber={100}
          imagePath={standardNFTJson.image}
          href='/'
          location='Perpignan, France'
          howMuch={standardNFTNumber}
        />
      )}
    </>
  );
};

export default GetMyNft;
