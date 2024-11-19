import { useState } from "react";
import "./App.css";
import useWeather from "./hooks/useWeather";
import SearchBar from "./components/SearchBar";
import DisplayWeather from "./components/DisplayWeather";

function App() {
  const [city, setCity] = useState("");
  const { weather, fetchWeather } = useWeather(city);

  return (
    <>
      <div>
        <SearchBar
          city={city}
          setCity={setCity}
          fetchWeather={fetchWeather}
        ></SearchBar>
      </div>
      <div>
        <DisplayWeather weather={weather}></DisplayWeather>
      </div>
    </>
  );
}

export default App;
