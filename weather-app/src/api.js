import axios from "axios";

const apiKey = "f93eee19841a1cfc96a0d72e8147f357";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        q: city,
        appid: apiKey,
        units: "metric", // Change to "imperial" for Fahrenheit
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch weather data");
  }
};

export default getWeatherByCity;
