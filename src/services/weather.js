import axios from 'axios';
import {API_URL, API_KEY} from "../constants";
export async function getDailyForcast(lat, long) {
    try {
        const response = await axios.get(`${API_URL}/forecast/daily?lat=${lat}&lon=${long}&cnt=7&appid=${API_KEY}&units=metric`);        
        return response.data;     
      } catch (error) {
        console.log("failed get data");
        return {}
      }
}