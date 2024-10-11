import React from "react";

function Header() {
  return (
    <header className="flex flex-col items-start font-bold leading-none max-md:max-w-full">
      <h1 className="text-8xl text-white leading-[104px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
        ALABAY GUARDIAN
        <br />
        <span className="text-5xl text-indigo-300 tracking-[11.04px]">SHEPHERD OF THE STEPPES</span>
      </h1>
      <h2 className="mt-20 text-3xl text-indigo-300 max-md:mt-10">FEATURES</h2>
    </header>
  );
}

export default Header;