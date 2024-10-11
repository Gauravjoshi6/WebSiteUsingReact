import React , {useState, useEffect}from 'react'
import img11 from '../assets/img11.png';
import img10 from '../assets/img10.png';

function Games() {
    const images = [
        {
          src: img11,
          link: '/GamePage', // Link for Discover button
        },
        {
          src: img10,
          link: '/about', // Link for Discover button
        },
      ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    const goLeft = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };
  
    const handleDiscoverClick = (link) => {
      window.open(link, '_blank'); // Open link in a new window
    };
  return (
    <>
    <div className=''>
<div className=' mt-[300px] flex  h-[1000px]  flex-col items-center justify-center'>
<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/53f683c50f9da85b134ff835cd83b692843c1f60b3505b4d6f5d5a9918def6f5?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a" alt="" 
    className="object-cover  w-full h-[1600px]" />

    <div className='h-[300px] absolute top-[7550px] font-cheeseburger leading-[200px] text-center text-[150px] font-[400] text-white mx-auto w-[600px]'>GAMES</div>
    <div className='absolute top-[7800px]'>
  <p className='text-[54px] font-[900] leading-[70px]'>Stay tuned for upcoming games !</p>  
    </div>

    <div className='flex  items-center justify-center relative -top-[600px]'>
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
     

      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full flex flex-col items-center justify-center  rounded-[70px] ">
            <img src={image.src} alt={`Image ${index + 1}`} className="w-[1000px] rounded-[70px] border-[#ffffff] border-[14px]" />
          <div className='-mt-[100px]'>
            <button
              onClick={() => handleDiscoverClick(image.link)}
              className=" bg-[#843AFC] text-2xl font-bold px-11 text-white rounded-2xl p-2"
            >
              Discover
            </button>
            
            </div>
          </div>
        ))}


      </div>

      {/* <button  className="absolute right-[200px] top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded p-2">
        Left
      </button> */}
      
      <img  onClick={goLeft} src='https://cdn.builder.io/api/v1/image/assets/TEMP/b8f0e0aaa6f96f06fa5d1b2153277792d17cf8ffb8c685683e3772f9448dd480?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a'
        className='h-[80px]  w-[60px] rounded-3xl absolute right-[200px] top-1/2 transform -translate-y-1/2 cursor-pointer bg-[#353535] p-2'/>
    </div>
    </div>
</div>

    </div>
    
    </>
  )
}

export default Games