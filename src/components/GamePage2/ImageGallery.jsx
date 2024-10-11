import React from "react";

function ImageGallery() {
  const images = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a5e041f6d14bba35b922082d71ca181fd08568c99409be95f0bbf226ca8a0cdc?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a", alt: "Game preview image 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/968fa28c734ede8898c9a0100dcc9b3b9dddeaf339d0bbdf299bf77549e45f15?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a", alt: "Game preview image 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c21b8a2e86b987b30ce6549ba513453b78b3fab0ec3d18bb84869086f276ed9?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a", alt: "Game preview image 3" },
  ];

  return (
    <section className="relative max-w-full  w-[1069px]">
      <div className="flex gap-5 max-md:flex-col">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col w-[20%]  h-14  max-md:ml-0 ">
            <img
              loading="lazy"
              src={image.src}
              alt={image.alt}
              className="object-contain w-full rounded-3xl aspect-square "
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ImageGallery;