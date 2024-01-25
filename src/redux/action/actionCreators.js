import axios from 'axios';
import {getDailyForcast} from '../../services/weather';
import {API_KEY, API_URL} from "../../constants";
import { SAVE_CITY, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, CONVERT_CELSIUS_TO_FAHRENHEIT, CONVERT_FAHRENHEIT_TO_CELSIUS, SAVE_FORCAST } from '../action/actionTypes';

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const saveCity = (city) => ({
  type: SAVE_CITY,
  payload: city
});

export const saveForcast = (data) => ({
  type: SAVE_FORCAST,
  payload: data
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const convertCelsiusToFahrenheit = (celsius) => ({
  type: CONVERT_CELSIUS_TO_FAHRENHEIT,
  payload: celsius,
});

export const convertFahrenheitToCelsius = (fahrenheit) => ({
  type: CONVERT_FAHRENHEIT_TO_CELSIUS,
  payload: fahrenheit,
});

export const fetchWeatherData = (location) => async (dispatch) => {  
  dispatch(fetchDataRequest());
  try {
    const response = await axios.get(`${API_URL}/weather?q=${location}&appid=${API_KEY}&units=metric`);
    // const data = setWeatherInfo(response.data);
    const data = response.data;
    const temperatureInCelsius = data.main.temp;
    dispatch(fetchDataSuccess(data));
    dispatch(convertCelsiusToFahrenheit(temperatureInCelsius));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};

export const getWeatherForcast = (lat, long) => async (dispatch) => {
  const data = await getDailyForcast(lat, long)
  console.log(data);
  dispatch(saveForcast(data))
}




