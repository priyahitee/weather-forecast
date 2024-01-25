import React from 'react'
import uvImage from '../../../../../assets/todayHighlights/uv-index.png'

const uvIndex = () => {
  return (
    <div className="flex flex-col items-start rounded-xl bg-white shadow-md p-5">
      <p className="mb-2 text-[#2d335c] text-base font-medium">UV Index:</p>
      <img src={uvImage} alt="Image" className="mb-4 mt-2 w-16 h-16 object-cover"/>
        <p className='text-xs font-medium text-[#2d335c]'><span className='font-medium text-neutral-400 text-xs'>Status: </span>Moderate</p>
    </div>
  );
};

export default uvIndex;