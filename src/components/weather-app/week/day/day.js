import React from 'react'


const day = (props) => {
  return (
    <div className="w-15 flex flex-col items-center rounded-xl bg-white shadow-md p-4">
            <p className="text-base font-medium text-[#2d335c]">{props.day}</p>
            <img src={props.image} alt="weatherimage" className="w-9 h-9 mt-2 items-center object-cover" />
            <p className="text-sm font-medium text-[#2d335c] mt-3">{props.temperature}</p>
    </div>
  )
}

export default day;