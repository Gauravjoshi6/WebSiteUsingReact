import React from 'react';

const TokenomicsItem = ({ title, value }) => (
  <div className="flex flex-col items-start px-20 py-5 mt-10 bg-neutral-700 rounded-[35px] shadow-[17px_20px_36px_rgba(168,125,41,1)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <div className="text-4xl text-white">{title}</div>
    <div className="  text-4xl text-yellow-200 max-md:text-4xl">{value}</div>
  </div>
);

const Tokenomics = () => (
  <>
  <section className="flex relative flex-col pt-72 pl-16 mt-0 w-full  max-md:pt-24 max-md:pl-5 ">
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/53f683c50f9da85b134ff835cd83b692843c1f60b3505b4d6f5d5a9918def6f5?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a" alt="" 
    className="object-cover absolute inset-0 w-full h-[1600px]" />
    <h2 className="relative self-start text-white text-[150px] font-cheeseburger max-md:max-w-full max-md:text-4xl">TOKENOMICS</h2>
    <div className="relative z-10 -mt-4 mb-0 ml-3.5 max-md:mb-2.5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
          <div className="flex relative flex-col mt-44 font-black whitespace-nowrap max-md:mt-10 max-md:max-w-full">
            <TokenomicsItem title="LIQUIDITY" value="LOCKED" />
            <TokenomicsItem title="CONTRACT" value="RENOUNCED" />
            <TokenomicsItem title="TAXES" value="0%" />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 ">
          <div className="flex relative flex-col grow  text-amber-500 whitespace-nowrap  text-[220px]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/906b5d0acef1242674605b9dc4c1038d4fa68c803fc60bb5cda01ab38e3367f1?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a" alt="" 
            className="object-cover absolute inset-0  w-[800px]" />
   

 
          </div>
        </div>
      </div>
      
    </div>

  </section>

<div className='w-[1292px] h-[300px] mx-auto text-center text-[#FFA800]
 text-[150px] leoding-[300px] font-[400] font-cheeseburger  mt-[500px]'>merchandise</div>
</>
);

export default Tokenomics;