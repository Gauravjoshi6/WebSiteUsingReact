import React from "react";
import Header from "./Header";

import ScrollIndicator from "./ScrollIndicator";
import ImageGallery from "./ImageGallery";
import { useNavigate } from 'react-router-dom';
function AlabaySite() {

  
  const navigate = useNavigate();

  const handleDoubleClick = () => {
    navigate('/about/GamePage');
  };
  return (
    <main onDoubleClick={handleDoubleClick} 
     className="flex overflow-hidden flex-col bg-white">
      <div className="flex relative flex-col px-20 pt-20 pb-16  w-screen h-screen max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/18970388df54dbd9fc4814d5ca8fab2d27c125f94feaed0cf69b3b7696a9150b?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a" 
        alt="" className="object-cover absolute inset-0 size-full" />
        <Header />
        <ScrollIndicator />
        <ImageGallery />
      </div>
    </main>
  );
}

export default AlabaySite;