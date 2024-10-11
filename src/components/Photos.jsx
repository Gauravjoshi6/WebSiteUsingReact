import React from 'react'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img6 from '../assets/img6.png'
import img5 from '../assets/img5.png'
function Photos() {
  return (
    <>
   
 
    <div className='w-[1200px]  flex justify-center items-center -mt-[150px] h-[500px] gap-9 rounded-t-[45px] text-[#ffffff] '>
        <div className='w-[275px] h-[500px] rounded-tl-[45px] bg-gradient-to-b from-[#DBC70C] to-transparent'>
            <p className='text-[30px] leading-8 mt-4 font-[900]'>Community Building 
       <br/>  <span className='text-[25px]'>and Initial Launch</span>   </p>
          <img className='w-[230px] h-[350px] mx-auto' src={img3}/>
        </div>

        <div className='w-[275px] h-[500px]  bg-gradient-to-b from-[#00D4D4] to-transparent'>
        <p className='text-[30px] leading-8 mt-4 font-[900]'> Merchandise 
        <br/> <span className='text-[25px]'>Store Launch</span>   </p>
       
          <img className='w-[230px] h-[350px] mx-auto mt-7' src={img6}/>
        </div>

        <div className='w-[275px] h-[500px]  bg-gradient-to-b from-[#D427FF] to-transparent'>
        <p className='text-[30px] leading-8 mt-4 font-[900]'>Community
Events
<br/> <span className='text-[25px]'>and contests</span></p>
          <img className='w-[230px] h-[350px] mx-auto ' src={img5}/>
        </div>

        <div className='w-[275px] h-[500px] rounded-tr-[45px] bg-gradient-to-b from-[#8F3A3C] to-transparent'>
        <p className='text-[30px] leading-8 mt-4 font-[900]'>Expansion 
and New 
<br/> <span className='text-[25px]'>Features</span></p>
          <img className='w-[230px] h-[350px] mx-auto' src={img4}/>
        </div>
    </div>

 
    </>
  )
}

export default Photos