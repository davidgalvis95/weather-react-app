import React, { useState, useContext } from "react";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import CurrentWeatherDetailed from "../components/CurrentWeather/CurrentWeatherDetailed";
import Search from "../components/CurrentWeather/Search/Search";
import { objectIsEmpty } from "../util/util";
import { CurrentWeatherContext } from "../context/current-weather-context";

const CurrentWeatherParent = () => {
  const [renderDetails, setRenderDetails] = useState(0);
  const { data, queryFromMain } = useContext(CurrentWeatherContext);

  const renderComponent = () => {
    setRenderDetails(1);
  };

  let comp = <CurrentWeather renderComponent={renderComponent} />;
  if (renderDetails === 1) {
    comp = <CurrentWeatherDetailed />;
  }

  //TODO: render a loading icon and message instead od a null component
  let parentComponent = (
    <div>
      <Search />
      {comp}
    </div>
  );

  if (queryFromMain && (!data || objectIsEmpty(data))) {
    parentComponent = null;
  }

  return <div>{parentComponent}</div>;
};

export default CurrentWeatherParent;
