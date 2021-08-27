import React from "react";
import CardsForecast from "./CardsForecast";
import { useSelector } from "react-redux";

const WeatherForecastParent = (props) => {
  const { loading, error, forecastData } = useSelector(
    (state) => state.weatherApi
  );

  return (
    <div>
      <h1>Weather Forecast</h1>
      {/* //{" "}
      <div className="weather">
        // <CardsForecast data={forecastData} />
        //{" "}
      </div> */}
      <CardsForecast />
    </div>
  );
};

export default WeatherForecastParent;
