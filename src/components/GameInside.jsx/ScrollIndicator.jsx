import React from "react";

function ScrollIndicator() {
  return (
    <div className="flex flex-col my-auto max-md:hidden">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c9ee732bdc2fdcfa27d8d435dd40dedf79137d5e069c794b0bb89d2f084d058?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a" alt="" className="object-contain aspect-square w-[34px]" />
      <div className="flex flex-col self-center mt-3 w-[22px] max-md:hidden">
        <div className="flex flex-col pt-36 rounded-2xl bg-zinc-300 bg-opacity-30 max-md:hidden max-md:pt-24">
          <div className="flex shrink-0 bg-indigo-300 rounded-2xl h-[148px]" />
        </div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a16989ad648818b15ce0c3df1425877fdd7e138ae0926167ec59250a437f455f?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a" alt="" className="object-contain mt-3 aspect-square w-[34px]" />
    </div>
  );
}

export default ScrollIndicator;