import React, { useState, useContext, useEffect } from "react";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import CurrentWeatherDetailed from "../components/CurrentWeather/CurrentWeatherDetailed";
import { CurrentWeatherContext } from "../context/currentWeatherContext";
import Search from "../components/CurrentWeather/Search/Search";
import useCurrentWeatherResult from "../hooks/useCurrentWeatherResult";
import { updateTime, isEmpty } from "../util/utilFunctions"

const CurrentWeatherParent = (props) => {
  const [renderDetails, setRenderDetails] = useState(false);
  const { data, isLoading, initialReq } = useContext(CurrentWeatherContext);
  const { transformData } = useCurrentWeatherResult();
  const [time, setTime] = useState("");
  const [transformedData, setTransformedData] = useState();
  let intervalId = null;

  useEffect(() => {
    if (!isEmpty(data)) {
      const newData = transformData(data);
      setTransformedData(newData);
    }
  }, [data]);

  useEffect(() => {
    intervalId = setInterval(updateTheTime, 1000);
  }, []);

  useEffect(() => {
    return () => {
      //TODO use localStorage to store the current data of the weather when moving to other components
      clearInterval(intervalId);
    };
  }, []);

  const renderCurrentWeatherDetails = () => {
    setRenderDetails(true);
  };

  const renderCurrentWeatherResume = () => {
    setRenderDetails(false);
  };

  const updateTheTime = () => {
    const currentTimeString = updateTime(new Date());
    setTime(currentTimeString);
  };

  let comp = (
    <CurrentWeather
      renderCurrentWeatherDetails={renderCurrentWeatherDetails}
      data={transformedData}
      time={time}
    />
  );
  if (renderDetails) {
    comp = (
      <CurrentWeatherDetailed
        renderCurrentWeatherResume={renderCurrentWeatherResume}
        data={transformedData}
        time={time}
      />
    );
  }

  let parentComponent = (
    <div>
      <Search />
      {comp}
    </div>
  );

  if (initialReq && isLoading) {
    parentComponent = <h1>Loading...</h1>;
  }

  return <div>{parentComponent}</div>;
};

export default CurrentWeatherParent;
