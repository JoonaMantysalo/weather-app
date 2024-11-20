import { WeatherAPIResponse } from "../types/Weather.d";

interface DisplayWeatherProps {
  weather: WeatherAPIResponse | null;
}

const DisplayWeather = ({ weather }: DisplayWeatherProps) => {
  return (
    <>
      {weather && (
        <div className="weather-display">
          <h2>Temperature: {weather?.current.temp_c}°C</h2>
          <img src={weather?.current.condition.icon} alt="Weather condition" />
        </div>
      )}
    </>
  );
};

export default DisplayWeather;
