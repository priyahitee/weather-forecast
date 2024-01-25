import React, { useEffect } from 'react';
import BgImage from '../../assets/images/bg-image-1.jpg';
import SearchBar from '../UI/searchbar/searchbar';
import ForecastDetails from '../weather-app/forecastDetails/forecastDetails';
import WeatherLocation from '../weather-app/weatherLocation/weatherLocation';
import Toggle from '../UI/toggle/toggle';
import Week from '../weather-app/week/week';
import TodayHighlights from '../weather-app/week/todayHighlights/todayHighlights';
import { useSelector, useDispatch } from 'react-redux'
import { getWeatherForcast, fetchWeatherData, saveCity } from "../../redux/action/actionCreators";

function Layout(props) {
  const dispatch = useDispatch()
  const state = useSelector((state) => state);
  const forcast = useSelector((state) => state.forcast);
  const weatherData = useSelector((state) => state.data);
  
  useEffect(() => {
    if (weatherData) {
      dispatch(getWeatherForcast(weatherData?.coord?.lat, weatherData?.coord?.lon));
    }
  }, [weatherData]);

  useEffect(() => {
    dispatch(fetchWeatherData(state.currentCity, state.temperatureUnit));
  }, [state.currentCity, state.temperatureUnit, dispatch]);

  console.log(state);
  return (
    <>
      <div className="grid grid-cols-4">
        <div className="col-span-1 flex flex-col justify-between p-10 border rounded-l-3xl bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${BgImage})` }}>
          <SearchBar currentCity={state.currentCity} />
          <ForecastDetails />
          <WeatherLocation />
        </div>
        <div className="col-span-3 p-10 border rounded-r-3xl flex flex-col justify-between">
          <Toggle />
          <Week forcast={forcast}/>
          <TodayHighlights />
        </div>
      </div>
    </>

  );
};

export default Layout;