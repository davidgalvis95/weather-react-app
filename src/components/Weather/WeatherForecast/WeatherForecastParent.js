import React from "react";
import CardsForecast from "./CardsForecast";
import { useSelector } from "react-redux";
import classes from './WeatherForecastParent.module.css'

const WeatherForecastParent = (props) => {
  const { loading, error, forecastData } = useSelector(
    (state) => state.weatherApi
  );

  return (
    <div className={classes.weatherForecastParentContainer}>
      <h2 className={classes.header}>Weather Forecast</h2>
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
