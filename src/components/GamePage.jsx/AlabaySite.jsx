import React, {useState} from "react";
import Header from "./Header";
import GamePreview from "./GamePreview";

import ScrollIndicator from "./ScrollIndicator";
import { useNavigate } from 'react-router-dom';

function AlabaySite() {

  const navigate = useNavigate();

  const handleDoubleClick = () => {
    navigate('/about/GamePage1');
  };
  
  return (
    <main onDoubleClick={handleDoubleClick}  className="flex  overflow-clip flex-col h-screen w-screen ">
      <div className="flex relative flex-col px-20 cursor-pointer w-full 2xl:min-h-[1080px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea36a28b5cf59296785f33e67d8cf2532ec4bbfe7bee7f3f30061b43aa0a191a?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a" alt="" 
        className="object-cover absolute inset-0 w-screen h-screen" />
        <div className="flex relative flex-wrap gap-5 justify-between max-md:max-w-full">
          <Header />
          <ScrollIndicator />
        </div>
        <GamePreview />
      </div>
    </main>
  );
}

export default AlabaySite;