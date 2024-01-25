import React from 'react'
import CityImage from '../../../assets/images/place.jpg';
import { useSelector } from 'react-redux';

const WeatherLocation = () => {
    const apiData = useSelector((state) => state);
    const { data, isLoading, error } = apiData;

    return (
        <div className='pt-8'>
            <div className="relative h-24 w-full bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url(${CityImage})` }}>
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl backdrop-brightness-50">
                    <p className="text-base font-light text-slate-200">{data?.name}</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherLocation