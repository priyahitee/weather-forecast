import { configureStore } from '@reduxjs/toolkit'
import  Reducer  from '../slices/apiDataReducer'

const store = configureStore({
  reducer: Reducer,
})

export default store;

