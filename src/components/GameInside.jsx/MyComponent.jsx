import React from "react";
import Header from "./Header";
import Features from "./Features";
import ActionButtons from "./ActionButtons";
import ScrollIndicator from "./ScrollIndicator";


function MyComponent() {

  
  return (
    <main 
     className="flex overflow-hidden cursor-pointer flex-col bg-white">
      <div className="flex relative flex-col w-full min-h-[1080px] max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca8d24583eb0d1c263b664969306911a3441159e25b94e7bd11981caaa45825a?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a" alt="" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative flex-wrap gap-5 justify-between px-20 pt-14 pb-32 w-full max-md:px-5 max-md:pb-24 max-md:max-w-full">
          <Header />
          <Features />
          <ActionButtons />
          <ScrollIndicator />
        </div>
      </div>
    </main>
  );
}

export default MyComponent;