import React from 'react'
import MinimumTemperature from '../../../../../assets/todayHighlights/down-arrow.png'
import MaximumTemperature from '../../../../../assets/todayHighlights/up-arrow.png'
import { useSelector } from 'react-redux'

const SunRiseSet = () => {
    const apiData = useSelector((state) => state);
    const { data, isLoading, error } = apiData;

// Convert Unix timestamps to HH:MM time format

function timeConversion(timestamp){

// Convert to milliseconds and then create a new Date object
let dateObj = new Date(timestamp * 1000);

// Hours and Minutes part from the timestamp
let hours = dateObj.getUTCHours();
let minutes = dateObj.getUTCMinutes();

// Format the time as HH:mm
let formattedTime = hours.toString().padStart(2, '0')
		+ ':' + minutes.toString().padStart(2, '0');

return formattedTime;
}

// Read the "sunrise" and "sunset" data
const sunriseTimestamp = data?.sys.sunrise;
const sunsetTimestamp = data?.sys.sunset;

//calling the function 
const sunriseTiming =  timeConversion(`${sunriseTimestamp}`);
const sunsetTiming =  timeConversion(`${sunsetTimestamp}`);

    return (
        <div className="flex flex-col justify-between items-start rounded-xl bg-white shadow-md p-5">
            <p className="mb-2 text-[#2d335c] text-base font-medium">Sunrise and Sunset:</p>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div className="flex flex-row items-center">
                        <img src={MaximumTemperature} alt="weatherimage" className="w-10 h-10 object-cover rounded-full mr-2" />
                        <div className='flex flex-col'>
                            <p className="text-neutral-400 text-xs font-medium">Sunrise: </p>
                            <p className="text-[#2d335c] text-xs font-medium">{sunriseTiming} AM</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row mt-3">
                    <div className="flex flex-row items-center">
                        <img src={MinimumTemperature} alt="weatherimage" className="w-10 h-10 object-cover rounded-full mr-2" />
                        <div className='flex flex-col'>
                            <p className="text-neutral-400 text-xs font-medium">Sunset: </p>
                            <p className="text-[#2d335c] text-xs font-medium">{sunsetTiming} PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SunRiseSet