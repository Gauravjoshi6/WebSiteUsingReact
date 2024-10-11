import React from "react";

function ImageGallery() {
  const images = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d52deed534119bd80d6f1b3ec1512fe42fd03af64f20b37bf87bf2344b697715?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a", alt: "Alabay Heritage game scene 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d52deed534119bd80d6f1b3ec1512fe42fd03af64f20b37bf87bf2344b697715?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a", alt: "Alabay Heritage game scene 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d52deed534119bd80d6f1b3ec1512fe42fd03af64f20b37bf87bf2344b697715?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a", alt: "Alabay Heritage game scene 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d52deed534119bd80d6f1b3ec1512fe42fd03af64f20b37bf87bf2344b697715?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a", alt: "Alabay Heritage game scene 4" },
  ];

  return (
    <section className="mt-0 max-w-full w-[1163px] max-md:mt-0">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[0%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={images[0].src}
            alt={images[0].alt}
            className="object-contain grow w-full rounded-3xl aspect-[1.94] max-md:mt-10 max-md:max-w-full"
          />
        </div>
       
      </div>
    </section>
  );
}

export default ImageGallery;