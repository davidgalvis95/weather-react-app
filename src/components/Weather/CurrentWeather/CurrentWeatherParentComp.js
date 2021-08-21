import React, { useState, useEffect } from "react";
import CurrentWeather from "./CurrentWeather";
import CurrentWeatherDetailed from "./CurrentWeatherDetailed";
import useTransformWeatherData from "../../../hooks/useTransformWeatherData";
import { updateTime, isEmpty } from "../../../util/utilFunctions";
import { useSelector } from "react-redux";

const CurrentWeatherParent = (props) => {
  const { data, error } = useSelector((state) => state.weatherApi);
  const [renderDetails, setRenderDetails] = useState(false);
  const { transformCurrentWeatherData } = useTransformWeatherData();
  const [time, setTime] = useState("");
  const [transformedData, setTransformedData] = useState();
  let intervalId = null;

  useEffect(() => {
    if (!isEmpty(data) && data.currentWeather && data.forecast5d3h) {
      const newData = transformCurrentWeatherData(data.currentWeather);
      setTransformedData(newData);
    }
  // eslint-disable-next-line
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

  let currentWeatherComponent = (
    <CurrentWeather
      renderCurrentWeatherDetails={renderCurrentWeatherDetails}
      data={transformedData}
      time={time}
    />
  );
  if (renderDetails) {
    currentWeatherComponent = (
      <CurrentWeatherDetailed
        renderCurrentWeatherResume={renderCurrentWeatherResume}
        data={transformedData}
        time={time}
      />
    );
  }

  return <div>{currentWeatherComponent}</div>;
};

export default CurrentWeatherParent;
