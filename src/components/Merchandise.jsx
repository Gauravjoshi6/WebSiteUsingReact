import React, { useState, useEffect } from 'react';
import yellow from '../assets/yellow tshirt.png';
import yellows from '../assets/yellow tee bck.png';
import cap from '../assets/cap mockup.png';
import capback from '../assets/blue cap bck.png';
import hoodie from '../assets/black hoodie.png';
import hoodiebck from '../assets/black hoodie bck.png';

function Merchandise() {
  const clothes = [
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/40e7e43d936a852a08c8b678d13fef7ad669998886011e8a8609a04c1ae802e6?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a',
      bg: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d56f7a5172809177e4b8af7eadfe7889622f35aef16cf8a8a494103178076f15?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a',
    },
    {
      src: yellow,
      bg: yellows,
    },
    {
      src: hoodie,
      bg: hoodiebck,
    },
    {
      src: cap,
      bg: capback,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clothes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goLeft = () => {
    setCurrentIndex((prev) => (prev - 1 + clothes.length) % clothes.length);
  };

  const goRight = () => {
    setCurrentIndex((prev) => (prev + 1) % clothes.length);
  };

  return (
    <div
      className="relative flex items-center justify-center -mt-[50px] h-[700px] overflow-hidden"
      style={{
        backgroundImage: `url(${clothes[currentIndex].bg})`,
        backgroundSize: 'cover',
        transition: 'background-image 0.5s ease-in-out',
        width: '1000px',
      }}
    >
      {/* <button onClick={goLeft} className="p-2 bg-blue-500 text-white rounded mr-2 z-10">
        Left
      </button> */}
      <img  onClick={goLeft} src='https://cdn.builder.io/api/v1/image/assets/TEMP/b8f0e0aaa6f96f06fa5d1b2153277792d17cf8ffb8c685683e3772f9448dd480?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a'
        className='h-[80px]  w-[80px] rounded-full rotate-180 cursor-pointer mr-2 z-10 bg-[#353535] p-2'/>

      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {clothes.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-full flex justify-center">
            <img src={item.src} alt={`Clothes ${index + 1}`} className="w-[800px] transition-opacity duration-500" />
          </div>
        ))}
      </div>

      {/* <button onClick='goRight' className="p-2 bg-blue-500 text-white rounded ml-2 z-10">
        Right
      </button> */}

      <img  onClick={goRight} src='https://cdn.builder.io/api/v1/image/assets/TEMP/b8f0e0aaa6f96f06fa5d1b2153277792d17cf8ffb8c685683e3772f9448dd480?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a'
        className='h-[80px]  w-[80px] rounded-full cursor-pointer bg-[#353535] p-2 ml-2 z-10'/>
    </div>
  );
}

export default Merchandise;
