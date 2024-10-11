import React from 'react'

function RoadMap() {
  return (
    <>
    <div>
    <section className="flex relative flex-col mt-14 w-full min-h-[1500px] max-md:mt-10 max-md:max-w-full">
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8dd3d17be8c119cfd3eea301083afdaef4c9a4990f9ffd315f8bc047239d12d?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a" alt="" 
    className="object-cover absolute inset-0 h-[2000px]" />
    <div className="flex relative z-10 flex-col px-20  mt-0 w-full pt-[1114px] max-md:px-5  max-md:mt-0 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a380f215f823f5346daf69eefa35c59ad4630ee9eba9330ee17d755131aa641?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a" alt=""
       className="object-cover absolute inset-0 -mt-[100px] w-[1400px]" />
      <p className="relative -top-[222px] ml-3 text-5xl font-bold text-center leading-[50px] text-neutral-700 max-md:max-w-full max-md:text-4xl max-md:leading-10">
        Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.
      </p>
      <h2 className="relative self-start font-cheeseburger -mb-11 text-white text-[150px] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full max-md:text-4xl">
        ROAD MAP
      </h2>
    </div>
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5d78e7ed9422e083ba62d5f633b66b2aed5db7472c25d2263c43c586c976c9c?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a" alt="Road Map Illustration" 
    className="object-contain  z-10 self-end -mt-[100px] mr-2 mb-0  aspect-[0.95] w-[800px] max-md:mt-0 max-md:mr-2.5 max-md:mb-2.5" />
  </section>
    </div>
    </>
  )
}

export default RoadMap