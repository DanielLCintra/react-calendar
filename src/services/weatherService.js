import axios from "axios";

const apiKey = process.env.REACT_APP_API_WEATHER_KEY;

export const weatherApi =  (city, minDate, maxDate) => axios.create({
  baseURL: `${process.env.REACT_APP_API_WEATHER_URL}/${city}/${minDate}/${maxDate}/?unitGroup=metric&key=${apiKey}&contentType=json`
});


