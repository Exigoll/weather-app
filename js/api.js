export const getWeatherData = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe76d59fdbf7579d5aadae264a9aa0cb&lang=ru&units=metric`);

    return await response.json();
  } catch (error) {
      console.error(error);
  }
}
