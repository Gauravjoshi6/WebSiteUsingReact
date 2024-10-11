import React from "react";

function ScrollIndicator() {
  return (
    
    <div className="flex flex-col self-end  max-md:hidden max-md:mt-10">
      
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a3a7306c2a2420f84544b5520013278ba34fe39d09a9f0c81fb0bde51c1f634?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a" 
      alt="" className="object-contain aspect-square w-[34px]" />
      <div className="flex flex-col self-center  w-[22px] max-md:hidden">
        <div className="flex flex-col pb-36 rounded-2xl bg-zinc-300 bg-opacity-30 max-md:hidden max-md:pb-24">
          <div className="flex shrink-0  bg-indigo-300 rounded-2xl max-md:mb-2.5" />
        </div>
        
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/19ee662908b9cf859b12a3ae4d1390cb916ec73347154b259f5657f7e4a89f8e?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a" 
      alt="" className="object-contain -mt-48 h-8 aspect-square w-[20px]" />
    </div>
  );
}

export default ScrollIndicator;