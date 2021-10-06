import React, { useEffect } from "react";
import WeatherDailyForecast from "./WeatherDailyForecast";
import { useSelector } from "react-redux";
import classes from "./WeatherDailyForecastParent.module.css";
import sampleData from '../../../util/SimulatedApiData/simulated2WeeksDailyForecast.json'
// import {}

const WeatherDailyForecastParent = (props) => {
  const { loading, error, forecastData } = useSelector(
    (state) => state.weatherApi
  );

  useEffect(()=>{
    init();
  },[]);

  //read the sample JSON file as the response that is needed
  function loadJSON(callback) {
    var request = new XMLHttpRequest();
    request.overrideMimeType("application/json");
    request.open("GET", "../../../util/SimulatedApiData/simulated2WeeksDailyForecast.json", true);
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == "200") {
        callback(request.responseText);
      }
    };
    request.send(null);
  }

  function init() {

    // fetch("../../../util/SimulatedApiData/simulated2WeeksDailyForecast.json")
    // .then((response) => {response.json()}).then((data) => console.log(data));

    // // var x = loadJSON(function (response) {
    // //   // Parse JSON string into object
    // //   console.log(response);
    // //   var actual_JSON = JSON.parse(response);
    // //   return actual_JSON;
    // // });
    var actual_JSON = JSON.parse(JSON.stringify(sampleData));
    console.log(actual_JSON);

    // console.log(x);
  }

  return (
    <div className={classes.weatherForecastParentContainer}>
      <h2 className={classes.title}>Daily Weather Forecast</h2>
      <WeatherDailyForecast />
    </div>
  );
};

export default WeatherDailyForecastParent;
