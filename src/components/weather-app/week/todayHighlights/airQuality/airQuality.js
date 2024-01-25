import React from 'react'

const airQuality = () => {
  return (
    <div className="flex flex-col justify-between items-start rounded-xl bg-white shadow-md p-5">
            <p className="mb-2 text-[#2d335c] text-base font-medium">Air Quality:</p>
            <p className="mb-2 text-[#2d335c] text-3xl font-medium">128</p>
            <p className='text-xs font-medium text-[#2d335c]'><span className='font-medium text-neutral-400 text-xs'>Status: </span>Good Quality</p>
    </div>
  )
}

export default airQuality