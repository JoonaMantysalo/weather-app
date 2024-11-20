import { useState } from "react";
import { WeatherAPIResponse } from "../types/Weather.d";
import axios from "axios";
import { API_BASE_URL } from "../config";

const useWeather = (city: string) => {
  const [weather, setWeather] = useState<WeatherAPIResponse | null>(null);

  const fetchWeather = async () => {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    try {
      const response = await axios.get<WeatherAPIResponse>(
        `${API_BASE_URL}/current.json?key=${API_KEY}&q=${city}&aqi=no`
      );
      setWeather(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error while trying to fetch weather data: " + error);
      setWeather(null);
    }
  };

  return { weather, fetchWeather };
};

export default useWeather;
