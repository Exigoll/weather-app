import { getWeatherData } from "./api.js";
import { resetWeatherContent } from "./helper.js";

export const handleWeatherByGeolocation = () => {
  const options = {
    enableHighAccuracy: true, 
    timeout: 5000, 
    maximumAge: 0,
  };

  const sucess = async (pos) => {
    const crd = pos.coords;

    const response = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${crd.latitude}&lon=${crd.longitude}&lang=ru&apiKey=2766fcd6313e454fa9e1e320b5c83089`);

    const result = await response.json();
    
    const weather = await getWeatherData(result.features[0].properties.city);
    resetWeatherContent(result.features[0].properties.city, weather);
  }

  const error = (err) => {
    console.log(err.code + " " + err.message);
  }

  navigator.geolocation.getCurrentPosition(sucess, error, options);
}
