import React from 'react'
import { useSelector } from 'react-redux'

const Humidity = () => {
    const apiData = useSelector((state) => state);
    const { data, isLoading, error } = apiData;
    return (
        <div className="flex flex-col justify-between items-start rounded-xl bg-white shadow-md p-5">
            <p className="mb-2 text-[#2d335c] text-base font-medium">Humidity:</p>
            <p className="mb-2 text-[#2d335c] text-3xl font-medium">{data?.main.humidity} %</p>
            <p className='text-xs font-medium text-[#2d335c]'><span className='font-medium text-neutral-400 text-xs'>Status: </span>Moderate</p>
        </div>
    )
}

export default Humidity;