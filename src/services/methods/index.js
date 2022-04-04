import { weatherApi } from "../weatherService";

export const getWeatherForecastByAddressAndDate = async (address, minDate, maxDate) => {
      try {
        const {status, data} = await weatherApi(address, minDate, maxDate).get()
        
        if (status === 200) {
          return {data, message: "Success"}
        } else {
            return {data: {}, message: "Error on weather api request. Status returned is diferent from 200 - Success -> " + status}
         
        }
      } catch (error) {
       return {message: "Error on weather api request. error: " + error, data: {}} 
      }
       
    }