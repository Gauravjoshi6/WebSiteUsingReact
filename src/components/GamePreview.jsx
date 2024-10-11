import React from 'react'
import img12 from '../assets/img11.png';
import img13 from '../assets/img10.png';
import img14 from '../assets/img14.png';
function GamePreview() {
  return (
    <>
    

<div >
    <div className='h-[78px] mt-11 relative -left-[300px] w-[594px] text-[64px] font-[900] text-[#FFA800] leading-[78px]'>
    <p className=''> Game <span className='text-black'>Preview</span> </p>
    </div>

   
</div>
<div>
<div className='w-[1150px] h-[350px] flex flex-row mt-20 gap-10 -ml-10 items-center justify-center '>
        <img  src={img12} className='h-[350px] w-[350px] rounded-[27px]'/>
        <img  src={img13} className='h-[350px] w-[350px] rounded-[27px]'/>
        <img  src={img14} className='h-[350px] w-[350px] rounded-[27px]'/>
        
        <img src='https://cdn.builder.io/api/v1/image/assets/TEMP/b8f0e0aaa6f96f06fa5d1b2153277792d17cf8ffb8c685683e3772f9448dd480?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a'
        className='h-[80px] w-[60px] rounded-3xl cursor-pointer bg-black'/>
        
        
    </div>
    
</div>

    </>
  )
}

export default GamePreview