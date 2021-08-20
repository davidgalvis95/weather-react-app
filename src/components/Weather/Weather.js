import React, {useEffect} from "react";
import { useHistory } from "react-router";
import useWeatherQuery from "../../hooks/useWeatherQuery";
import Search from './CurrentWeather/Search/Search';
import CurrentWeatherParent from './CurrentWeather/CurrentWeatherParentComp';
import WeatherForecastParent from './WeatherForecast/WeatherForecastParent';
import { useSelector } from "react-redux";


const Weather = () => {
  const searchState = useSelector((state) => state.searchState)
  const { loading } = useSelector((state) => state.weatherApi);
  const { fetchWeatherDataPointer } = useWeatherQuery();
  const history = useHistory();

  useEffect(() => {
    if (!searchState.searchBegan && searchState.city === null) {
      history.replace("/");
    }

    if (searchState.city !== null) {
      fetchWeatherDataPointer(searchState.city);
    }
  // eslint-disable-next-line
  }, [searchState.city, fetchWeatherDataPointer, searchState.searchBegan]);

  let weatherComponent = <h1>Loading...</h1>;
  if (searchState.initialRequest && !loading) {
    weatherComponent = (
      <div>
        <Search />
        <CurrentWeatherParent isInitialReq={searchState.initialRequest} />
        <WeatherForecastParent isInitialReq={searchState.initialRequest} />
      </div>
    );
  }

  return { weatherComponent };
};

export default Weather;
