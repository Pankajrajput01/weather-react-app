import { DateTime } from "luxon";
import formatForecastWeather from './hourly_daily';


const API_KEY = "6a611f56d116bdc0fa381951e14cec23";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  // console.log(url);
  const res = await fetch(url);
  return await res.json();
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
   
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    timezone,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];
  // console.log(timezone);
 
  
 
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
    timezone
  };
   
 
};



  

  // return {daily};

// formatForecastWeather();
const getFormattedWeatherData = async (searchParams) => {
 

  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  return { ...formattedCurrentWeather , formatForecastWeather };

  
};

const formatToLocalTime = (
	secs,
	zone,
	format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);



const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;





  export default getFormattedWeatherData;

export { formatToLocalTime , iconUrlFromCode };



