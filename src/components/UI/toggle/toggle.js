import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {convertCelsiusToFahrenheit, convertFahrenheitToCelsius} from '../../../redux/action/actionCreators'

const Toggle = () => {

    const weatherData = useSelector((state) => state.temperature);
    const { celsius,fahrenheit } = weatherData;

    const dispatch = useDispatch();

    const handleCelsiusToFahrenheit = () => {
        dispatch(convertCelsiusToFahrenheit(celsius));
      };
    
      const handleFahrenheitToCelsius = () => {
        dispatch(convertFahrenheitToCelsius(fahrenheit));
      };

    return (
        <div className="flex flex-row justify-between py-2">
            <div>
                <h2 className="text-base font-medium text-[#2d335c]">Week</h2>
            </div>
            <div className='flex flex-row gap-1'>
                <div className="w-8 h-8 cursor-pointer hover:bg-[#2d335c] hover:text-slate-200 bg-[#E2E8F0] rounded-full flex justify-center items-center" onClick={handleCelsiusToFahrenheit}>
                    <p className='text-[#2d335c] hover:text-slate-200 text-xs cursor-pointer'>C°</p>
                </div>
                <div className="w-8 h-8 cursor-pointer bg-[#2d335c]  hover:bg-[#E2E8F0] hover:text-[#2d335c] rounded-full flex justify-center items-center" onClick={handleFahrenheitToCelsius}>
                    <p className='text-slate-200 hover:text-[#2d335c] text-xs cursor-pointer'>F°</p>
                </div>
            </div>
        </div>
    )
}

export default Toggle