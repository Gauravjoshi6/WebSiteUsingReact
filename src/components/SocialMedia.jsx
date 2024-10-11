import React from 'react';

const SocialMedia = () => (
  <section className="mt-[200px]  max-md:max-w-full">
    <h2 className="self-start ml-28 font-cheeseburger text-amber-500 text-start text-[150px] max-md:text-4xl">
      social media <br /> links
    </h2>
    <div className="mr-14 max-md:mr-2.5 -mt-[150px] max-md:max-w-full">
      <div className="flex gap-9 justify-center max-md:flex-col">
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5153e395b5dc796ebaf372fdf1b9b69cb2ed7bd448f03b7515988bba290a2b7?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a" alt="Social media links" className="object-contain self-stretch my-auto w-full aspect-[1.45] max-md:mt-10 max-md:max-w-full" />
        </div>
        <div className="flex flex-col ml-5 w-[50%] ">
          <div className="flex flex-col grow max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/83c19ceb3f35297980e1db370f271fbb8e87dc5ef30ac0b92a099d3318b2e5d0?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a" alt="Social media icon 1" 
            className="object-contain z-10 w-full aspect-square " />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/016b73f1a8ce5a0d48c757735552b3a95cd125cb048271d0a00f7dc7146c2e22?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a" alt="Social media icon 2"
             className="object-contain w-[600px]  " />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SocialMedia;