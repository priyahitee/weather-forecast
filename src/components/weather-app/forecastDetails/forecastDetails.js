import React from 'react'
import Rainimage from '../../../assets/weather/rain.png'
import { useSelector } from 'react-redux';
import getWeatherIcon from '../../UI/weatherTypes/weatherTypes';

const ForecastDetails = () => {

    const apiData = useSelector((state) => state);
    const { data, isLoading, error } = apiData;

    // Get the weather condition code from the API response
    const weatherCode = data?.weather[0]?.id || 0;

    // Use the getWeatherIcon function to get the appropriate weather icon
    const weatherIcon = getWeatherIcon(weatherCode);

    if (isLoading) {
        return <div>Loading...</div>; // Replace this with a loading spinner or component
    }

    if (error || !data) {
        return <div>Error: Failed to fetch data</div>; // Handle the error state
    }

    //To show temperature
    const temperature = data?.main.temp.toFixed(1);

    //To capitalize the description
    const weatherDescription = data?.weather[0]?.description || "N/A";
    const capitalizedDescription = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);

    // To get day and time of requested location

    const { timezone } = data;
    const { dt } = data;
    const dateTime = new Date(dt * 1000);
    const toUtc = dateTime.getTime() + dateTime.getTimezoneOffset() * 60000;
    const currentLocalTime = toUtc + 1000 * timezone;
    const selectedDate = new Date(currentLocalTime);

    const date = selectedDate.toLocaleString("en-GB", {
        day: "numeric",
        weekday: "short",
        month: "short",
    });
    const year = selectedDate.toLocaleString("en-GB", {
        year: "numeric",
    });
    const hour = selectedDate.toLocaleString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });
    const dayTime = `${date} ${year} ${hour}`;

    return (
        <div className="flex flex-col mt-8">
            <div className="flex flex-col p-4 mb-4 items-center">
                <img src={weatherIcon} alt="weatherimage" className="w-28 h-28 items-center object-cover rounded-lg shadow-lg" />
            </div>
            <div className="flex flex-col mb-4 items-start">
                <p className='text-slate-200 text-3xl font-medium'> {temperature} C°</p>
                <p className='text-slate-200 text-xs t-2'>{dayTime}</p>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row mt-2">
                    <div className="flex flex-row items-center">
                        <img src={weatherIcon} alt="weatherimage" className="w-5 h-5 object-cover rounded-full mr-2" />
                        <p className="text-slate-200 text-xs">{capitalizedDescription}</p>
                    </div>
                </div>
                <div className="flex flex-row  mt-2 mb-4">
                    <div className="flex flex-row items-center">
                        <img src={Rainimage} alt="weatherimage" className="w-5 h-5 object-cover rounded-full mr-2" />
                        <p className="text-slate-200 text-xs">Rain - 2%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForecastDetails;