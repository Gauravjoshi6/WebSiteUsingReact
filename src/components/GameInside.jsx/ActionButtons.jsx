import React from "react";
import { useNavigate } from 'react-router-dom';
function ActionButtons() {

    const navigate = useNavigate();

  const handleDoubleClick = () => {
    navigate('/');
  };
  return (
    <div className="flex flex-wrap gap-10 mt-24 max-w-full text-xl whitespace-nowrap w-[490px] max-md:mt-10">
      <div className="flex flex-col flex-1 text-neutral-800">
        <button className="flex gap-8 px-4 py-3 bg-white rounded-[34px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/68b558f9a7a9dafa0695d7d1eb6b04b06f1ce31c97326e5f62d59e32b28ae185?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a" alt="" className="object-contain shrink-0 aspect-square w-[42px]" />
          <span className="grow shrink my-auto w-[103px]">PLAY</span>
        </button>
      </div>
      <div className="flex flex-col flex-1 text-white">
        <button onClick={handleDoubleClick} className="px-16 py-6 border-4 border-white border-solid rounded-[34px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
          EXIT
        </button>
      </div>
    </div>
  );
}

export default ActionButtons;