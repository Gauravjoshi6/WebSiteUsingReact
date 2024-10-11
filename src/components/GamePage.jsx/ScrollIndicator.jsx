import React from "react";

function ScrollIndicator() {
  return (
    <div className="flex flex-col self-end mt-30 max-md:hidden max-md:mt-10">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a3a7306c2a2420f84544b5520013278ba34fe39d09a9f0c81fb0bde51c1f634?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a" alt="" className="object-contain aspect-square w-[34px]" />
      <div className="flex flex-col self-center mt-3 w-[22px] max-md:hidden">
        <div className="flex flex-col pb-36 rounded-2xl bg-zinc-300 bg-opacity-30 max-md:hidden max-md:pb-24">
          <div className="flex shrink-0 -mb-7 bg-green-300 rounded-2xl h-[148px] max-md:mb-2.5" />
        </div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/136e4862ed85e57097140f2b488406732a8f601a8cf50a4a91f41facca912e40?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a" alt="" className="object-contain mt-3 aspect-square w-[34px]" />
    </div>
  );
}

export default ScrollIndicator;