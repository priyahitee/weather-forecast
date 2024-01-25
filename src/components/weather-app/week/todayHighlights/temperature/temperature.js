import React from 'react'
import { useSelector } from 'react-redux'
import MinimumTemperature from '../../../../../assets/todayHighlights/down-arrow.png'
import MaximumTemperature from '../../../../../assets/todayHighlights/up-arrow.png'

const Temperature = () => {
    const apiData = useSelector((state) => state);
    const { data, isLoading, error } = apiData;

    const minTemp = data?.main.temp_min;
    const roundedMinTemp = Math.ceil(minTemp) ;
    const maxTemp= data?.main.temp_max;
    const roundedMaxTemp = Math.ceil( maxTemp);

    return (
        <div className="flex flex-col justify-between items-start rounded-xl bg-white shadow-md p-5">
        <p className="mb-2 text-[#2d335c] text-base font-medium">Temperature:</p>
        <div className="flex flex-col">
            <div className="flex flex-row">
                <div className="flex flex-row items-center">
                    <img src={MaximumTemperature} alt="weatherimage" className="w-10 h-10 object-cover rounded-full mr-2" />
                    <div className='flex flex-col'>
                        <p className="text-neutral-400 text-xs font-medium">Maximum: </p>
                        <p className="text-[#2d335c] text-xs font-medium">{roundedMaxTemp}° C</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row mt-3">
                <div className="flex flex-row items-center">
                    <img src={MinimumTemperature} alt="weatherimage" className="w-10 h-10 object-cover rounded-full mr-2" />
                    <div className='flex flex-col'>
                        <p className="text-neutral-400 text-xs font-medium">Minimum: </p>
                        <p className="text-[#2d335c] text-xs font-medium">{roundedMinTemp}° C</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Temperature