import React, { useEffect } from "react";
import { useHistory } from "react-router";
import useWeatherQuery from "../../hooks/useWeatherQuery";
import Search from "./CurrentWeather/Search/Search";
import CurrentWeatherParent from "./CurrentWeather/CurrentWeatherParentComp";
import WeatherForecastParent from "./WeatherForecast/WeatherForecastParent";
import { useSelector } from "react-redux";
import MainSearch from "../MainSearch/MainSearch";
import classes from "./Weather.module.css";
import WeatherDailyForecastParent from "./WeatherDailyForecast/WeatherDailyForecastParent";

const Weather = () => {
  const searchState = useSelector((state) => state.searchStatus);
  const { loading } = useSelector((state) => state.weatherApi);
  const { fetchWeatherDataPointer } = useWeatherQuery();
  const history = useHistory();

  useEffect(() => {
    if (searchState.city === null && !searchState.searchBegan) {
      history.replace("/");
    }

    if (searchState.city !== null) {
      fetchWeatherDataPointer(searchState.city);
    }
    // eslint-disable-next-line
  }, [searchState.city, searchState.searchBegan]);

  //TODO handle this with react router to avoid page blinking
  let weatherComponent = <MainSearch />;
  if (searchState.initialRequest) {
    weatherComponent = <h1>Loading...</h1>;
    if (!loading) {
      weatherComponent = (
        <div>
          <div className={classes.searchAndCurrentWeather}>
            <Search />
            <CurrentWeatherParent isInitialReq={searchState.initialRequest} />
          </div>
          <WeatherForecastParent isInitialReq={searchState.initialRequest} />
          <WeatherDailyForecastParent/>
        </div>
      );
    }
  } else {
    weatherComponent = (
      <div>
        <div className={classes.searchAndCurrentWeather}>
          <Search />
          <CurrentWeatherParent isInitialReq={searchState.initialRequest} />
        </div>
        <WeatherForecastParent isInitialReq={searchState.initialRequest} />
        <WeatherDailyForecastParent/>
      </div>
    );
  }

  return weatherComponent;
};

export default Weather;
