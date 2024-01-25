import { SAVE_FORCAST, SAVE_CITY, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, CONVERT_CELSIUS_TO_FAHRENHEIT, CONVERT_FAHRENHEIT_TO_CELSIUS } from '../action/actionTypes'

const initialState = {
  name: 'reducer',
  isLoading: false,
  data: null,
  error: null,
  temperature: {
    celsius: 0,
    fahrenheit: 32,
  },
  currentCity: "Chennai",
  forcast: null,
  unit: "metric"
};

const apiDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: null, error:
          action.payload
      };
    case CONVERT_CELSIUS_TO_FAHRENHEIT:
      return {
        ...state,
        temperature: {
          ...state.temperature,
          celsius: action.payload,
          fahrenheit: (action.payload * 9) / 5 + 32,
        },
      };
    case CONVERT_FAHRENHEIT_TO_CELSIUS:
      return {
        ...state,
        temperature: {
          ...state.temperature,
          fahrenheit: action.payload,
          celsius: ((action.payload - 32) * 5) / 9,
        },
      };
    case SAVE_CITY:
      return {
        ...state,
        currentCity: action.payload
      }
    case SAVE_FORCAST:
      return {
        ...state,
        forcast: action.payload
      }
    default:
      return state;
  }
};

export default apiDataReducer;