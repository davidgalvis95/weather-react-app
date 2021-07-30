import React, { useState, useContext, useEffect } from "react";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import CurrentWeatherDetailed from "../components/CurrentWeather/CurrentWeatherDetailed";
import Search from "../components/CurrentWeather/Search/Search";
import { objectIsEmpty } from "../util/util";
import { CurrentWeatherContext } from "../context/current-weather-context";

const CurrentWeatherParent = () => {
  const [renderDetails, setRenderDetails] = useState(false);
  const { data, queryFromMain, initialSearch } = useContext(CurrentWeatherContext);

  const renderDetailsHandler = () => {
    setRenderDetails(true);
  };

  useEffect(() => {
    console.log(data);
  }, []);

  let comp = <CurrentWeather detailsHandler={renderDetailsHandler} data={data}/>;
  if (renderDetails) {
    comp = <CurrentWeatherDetailed data={data}/>;
  }

  //TODO: render a loading icon and message instead od a null component
  let parentComponent = (
    <div>
      <Search />
      {comp}
    </div>
  );

  if ((queryFromMain || initialSearch ) && (!data || objectIsEmpty(data))) {
    parentComponent = null;
  }

  return <div>{parentComponent}</div>;
};

export default CurrentWeatherParent;
