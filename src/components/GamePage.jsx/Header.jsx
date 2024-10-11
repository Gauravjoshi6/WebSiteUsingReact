import React from "react";

function Header() {
  return (
    <header className="flex flex-col font-bold leading-none text-white max-md:max-w-full">
      <h1 className="text-6xl leading-[70px] mt-10 max-md:max-w-full max-md:text-3xl max-md:leading-10">
        ALABAY HERITAGE
        <br />
        <span className="text-3xl text-green-300 tracking-[11.04px]">THE LOST ADVENTURE</span>
      </h1>
      <p className="mt-10 mr-10 text-2xl leading-6 max-md:mr-2.5 max-md:max-w-full">
        Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors.
        <br />
        <br />
      </p>
      <button className="flex gap-8 self-start px-4 py-2 2xl:mt-14 m-10 text-xl whitespace-nowrap bg-green-300 rounded-[34px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-neutral-800 max-md:mt-10">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/68b558f9a7a9dafa0695d7d1eb6b04b06f1ce31c97326e5f62d59e32b28ae185?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a"
         alt="" className="object-contain shrink-0 aspect-square w-[42px]" />
        <span className="my-auto basis-auto">PLAY</span>
      </button>
      <h2 className="self-start  text-2xl max-md:mt-10">
        <span className="text-green-300">GAME</span> PREVIEW
      </h2>
    </header>
  );
}

export default Header;