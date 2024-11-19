import React from "react";

interface SearchBarProps {
  city: string;
  setCity: (city: string) => void;
  fetchWeather: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  city,
  setCity,
  fetchWeather,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            City
          </label>
          <input
            type="search-bar"
            className="form-control"
            id="weatherSearch"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Get weather
        </button>
      </form>
    </>
  );
};

export default SearchBar;
