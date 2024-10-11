import React, { useState } from 'react';
import img12 from '../assets/img12.png';

function Video() {
  const [activeTab, setActiveTab] = useState('all');

  const renderContent = () => {
    switch (activeTab) {
      case 'videos':
        return (
          <div className="flex gap-5 overflow-x-auto">
            <video width="350" height="250" controls>
              <source src="your-video-url-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video width="350" height="250" controls>
              <source src="your-video-url-2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        );
      case 'photos':
        return (
          <div className="flex gap-7 overflow-x-auto">
            <img src={img12} alt="Photo 1" className="w-[350px] h-[250px] rounded-[30px]" />
            <img src={img12} alt="Photo 2" className="w-[350px] h-[250px] rounded-[30px]" />
          </div>
        );
      case 'all':
      default:
        return (
          <div className="flex gap-7 overflow-x-auto">
            <img src={img12} alt="All 1" className="w-[350px] h-[250px] rounded-[30px]" />
            <video width="350" height="250" controls>
              <source src="your-video-url-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img src={img12} alt="All 2" className="w-[350px] h-[250px] rounded-[30px]" />
            <video width="350" height="250" controls>
              <source src="your-video-url-2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        );
    }
  };

  return (
    <>
      <div className="text-red-700 w-[429px] flex flex-row h-[34px] absolute top-[900px]">
        <ul className="flex flex-row gap-[43px] justify-center text-3xl font-[900]">
          <li>
            <button
              onClick={() => setActiveTab('all')}
              className={activeTab === 'all' ? 'text-[#FFA800]' : 'text-[#353535]'}
            >
              ALL
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('photos')}
              className={activeTab === 'photos' ? 'text-[#FFA800]' : 'text-[#353535]'}
            >
              Photos
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('videos')}
              className={activeTab === 'videos' ? 'text-[#FFA800]' : 'text-[#353535]'}
            >
              Videos
            </button>
          </li>
        </ul>
      </div>

      <div className="w-[1200px] h-[369px] absolute top-[950px] flex justify-center items-center">
        {renderContent()}
      </div>

      <div className="h-[100px] relative  w-[60px] -right-[600px] -top-[150px] rounded-[33.86px] bg-black text-white mt-4">
      <img src='https://cdn.builder.io/api/v1/image/assets/TEMP/b8f0e0aaa6f96f06fa5d1b2153277792d17cf8ffb8c685683e3772f9448dd480?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a'
        className='h-[80px] w-[60px] my-3 rounded-3xl cursor-pointer bg-black'/>
      </div>

      <div className="w-[1513px] h-[230px] mt-60">
        <p className="text-9xl font-cheeseburger text-[#FFA800]">MISSION PROJECT</p>
      </div>
    </>
  );
}

export default Video;
