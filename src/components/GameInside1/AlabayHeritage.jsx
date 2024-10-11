import React, { useState } from "react";
import Header from "./Header";
import Features from "./Features";
import ImageGallery from "./ImageGallery";
import NavigationButtons from "./NavigationButtons";


function AlabayHeritage() {


    
  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <div  
      className="flex relative flex-col w-full cursor-pointer min-h-[1080px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea36a28b5cf59296785f33e67d8cf2532ec4bbfe7bee7f3f30061b43aa0a191a?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a"
          alt="Alabay Heritage background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col items-start px-20 pt-14 pb-32 w-full max-md:px-5 max-md:pb-24 max-md:max-w-full">
          <Header />
          <Features />
          <ImageGallery />
          <NavigationButtons />
        </div>
      </div>
    </main>
  );
}

export default AlabayHeritage;