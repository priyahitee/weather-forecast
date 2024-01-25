import thuderstorm from '../../../assets/weatherIcons/thunderstorm.png'
import drizzle from '../../../assets/weatherIcons/drizzle.png'
import rain from '../../../assets/weatherIcons/heavy-rain.png'
import snow from '../../../assets/weatherIcons/snow.png'
import atmosphere from '../../../assets/weatherIcons/atmosphere.png'
import clear from '../../../assets/weatherIcons/clear-sky.png'
import cloud from '../../../assets/weatherIcons/cloudy.png'

const getWeatherIcon = (weatherCode) => {

    const weatherTypes = [
        {isThunderstorm: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232], img:thuderstorm },
        {isDrizzle: [300, 301, 302, 310, 311, 312, 313, 314, 321], img:drizzle },
        {isRain: [500, 501, 502, 503, 504, 511, 520, 521, 522, 531], img:rain },
        {isSnow: [600, 601, 611, 602, 612, 613, 615, 616, 620, 621, 622], img:snow },
        {isAtmosphere: [701, 711, 721, 731, 741, 751, 761, 762, 781], img:atmosphere },
        {isClear: [800], img:clear},
        {isClouds: [801, 802, 803, 804], img:cloud}
    ]

    const matchingWeatherType = weatherTypes.find((weatherType) => {
        const weatherCodes = Object.values(weatherType)[0];
        return weatherCodes.includes(weatherCode);
      });
    
      if (matchingWeatherType) {
        return matchingWeatherType.img;
      }
    
      return clear;
};

export default getWeatherIcon;