import React from 'react'
import UvIndex from './UV-index/uvIndex'
import WindStatus from './windStatus/windStatus'
import Temperature from './temperature/temperature'
import Humidity from './humidity/humidity'
import AirQuality from './airQuality/airQuality'
import SunRiseSet from './sunRiseSet/sunRiseSet'

const todayHighlights = () => {
  return (
    <div className='mt-12'>
      <h2 className="text-base font-medium text-[#2d335c]">Today Highlights</h2>
      <div className='grid grid-cols-3 gap-8 mt-3'>
        <UvIndex />
        <WindStatus />
        <Temperature />
        <Humidity />
        <AirQuality />
        <SunRiseSet />
      </div>
    </div>
  )
}

export default todayHighlights