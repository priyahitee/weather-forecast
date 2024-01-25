import React from 'react'
import { useSelector } from 'react-redux';

const WindStatus = () => {
    const apiData = useSelector((state) => state);
    const { data, isLoading, error } = apiData;
    return (
        <div className="flex flex-col justify-between items-start rounded-xl bg-white shadow-md p-5">
            <p className="mb-2 text-[#2d335c] text-base font-medium">Wind Status:</p>
            <p className="mb-2 text-[#2d335c] text-3xl font-medium">{data?.wind.speed} <span className='text-xs font-medium'>km/h</span></p>
            <p className='text-xs font-medium text-[#2d335c]'><span className='font-medium text-neutral-400 text-xs'>Status: </span>Moderate</p>
        </div>
    )
}

export default WindStatus