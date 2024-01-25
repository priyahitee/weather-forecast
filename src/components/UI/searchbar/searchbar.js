import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveCity } from '../../../redux/action/actionCreators';
import { UilSearch } from '@iconscout/react-unicons'
import { UilTimesCircle } from '@iconscout/react-unicons'

const Searchbar = (props) => {

    const [data, setData] = useState({
        name: 'Location',
        temp: '22',
        description: 'haze',
        min_temp: '18',
        max_temp: '30',
        speed: '1',
        humidity: '54',
        sunset: '5:00',
        sunrise: '18:00',
        icon: 'clear'
      });

    //Dispatching the action we created
    const dispatch = useDispatch();

    //Reading a data from store
    const city = props.currentCity;    

    const searchEvent = (e) => {        
        const key = e.keyCode;
        if(key==13) {            
            dispatch(saveCity(e.target.value))
        }
    }

    const clearCity = (e) => dispatch(saveCity(''))

    return (
        <div className="relative">
            <input
                type="text"
                onKeyUp={searchEvent}
                defaultValue={city}
                placeholder="Type and press Enter key"
                className="w-full text-white text-sm pl-6 pr-4 py-2 focus:outline-none focus:text-slate-200 bg-transparent"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-auto">
                <UilSearch className="h-4 w-4 text-gray-400" />
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-auto" onClick={clearCity}>
                <UilTimesCircle className="h-4 w-4 text-gray-400 cursor-pointer" />
            </div>
        </div>

    )
}

export default Searchbar