import React from "react";

function ImageGallery({ images }) {
  return (
    <>
      {images.map((image, index) => (
        <img key={index} loading="lazy" src={image.src} alt={image.alt} className={image.className} />
      ))}
    </>
  );
}

export default ImageGallery;