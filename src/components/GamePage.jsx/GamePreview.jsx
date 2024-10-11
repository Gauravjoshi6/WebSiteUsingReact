import React from "react";
import ImageGallery from "./ImageGallery";

function GamePreview() {
  const images = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b502d4513864f8cd8cc38fc9aa53e1abc381b76feccf7d96a9f18f0873d8043e?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a", alt: "Game preview image 1", className: "object-contain rounded-3xl aspect-[1.94] min-w-[240px] w-[531px] max-md:max-w-full" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/00e067e3b2016a6ef887fd16c48b7d34d6dc78ff097e621cf54fdbf73794a924?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a", alt: "Game preview image 2", className: "object-contain shrink-0 rounded-3xl aspect-square xl:h-[200px] min-w-[240px] w-[274px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b3379257b7a4784c7725287f0ebb3f5a0aea8d56d323e91206cc7e58b8ce28ae?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a", alt: "Game preview image 3", className: "object-contain shrink-0 rounded-3xl aspect-square xl:h-[200px] min-w-[240px] w-[274px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ef723878c58ef0ef8f9327a7e273bdddac3e61187047b302b91158c3532b1cf?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a", alt: "Game preview image 4", className: "object-contain rounded-3xl aspect-[2] min-w-[240px] w-[554px] max-md:max-w-full" },
  ];

  return (
    <section className="flex relative flex-nowrap gap-5 items-start mt-10 max-md:mr-1.5   max-md:max-w-full">
      <ImageGallery images={images}  />
    </section>
  );
}

export default GamePreview;