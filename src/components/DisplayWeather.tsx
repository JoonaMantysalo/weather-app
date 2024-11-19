import { WeatherAPIResponse } from "../types/Weather.d";

interface DisplayWeatherProps {
  weather: WeatherAPIResponse | null;
}

const DisplayWeather = ({ weather }: DisplayWeatherProps) => {
  return <>{weather && <h2>Temperature: {weather?.current.temp_c}</h2>}</>;
};

export default DisplayWeather;
