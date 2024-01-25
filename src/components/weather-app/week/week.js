import React from 'react';
import Day from './day/day';
import rain from '../../../assets/weather/rain.png'
import cloudy from '../../../assets/weather/cloudy.png'
import cloud from '../../../assets/weather/cloud.png'
import thunder from '../../../assets/weather/storm.png'
import wind from '../../../assets/weather/wind.png'
import storm from '../../../assets/weather/storm.png'
import { useSelector } from 'react-redux';

const Week = () => {

  const apiData = useSelector((state) => state);
  const { data, isLoading, error } = apiData;

  const temperature = data?.main.temp.toFixed(1);

  return (
    <div className='grid grid-cols-7 gap-8 mt-6'>
      <Day day="Sun" temperature={temperature + "° C"} image={rain} />
      <Day day="Mon" temperature={temperature + "° C"} image={cloudy} />
      <Day day="Tue" temperature={temperature + "° C"} image={thunder} />
      <Day day="Wed" temperature={temperature + "° C"} image={wind} />
      <Day day="Thu" temperature={temperature + "° C"} image={rain} />
      <Day day="Fri" temperature={temperature + "° C"} image={storm} />
      <Day day="Sat" temperature={temperature + "° C"} image={cloud} />
    </div>
  )
}

export default Week