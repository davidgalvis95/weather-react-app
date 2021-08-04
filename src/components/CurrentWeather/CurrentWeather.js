import React, { useContext, useEffect, useState } from "react";
import Card from "../../hoc/Card/Card";
import classes from "./CurrentWeather.module.css";
import SunnyWithClouds from "../Icons/weather/SunnyWithClouds";
import { CurrentWeatherContext } from "../../context/current-weather-context";
import { isEmpty } from "../../utils/utilFunctions";

export const weatherGeneral = {
  id: 741,
  main: "Fog",
  description: "fog",
  icon: "50n",
};

export const mainWeather = {
  temp: 284.04,
  pressure: 1011,
  humidity: 93,
  tempmin: 280.93,
  tempmax: 287.04,
  //this is from other object
  windSpeed: 1.5,
};

const CurrentWeather = (props) => {
  // const [weather, setWeather] = useState({});

  const { data, transformData } = props;
  const context = useContext(CurrentWeatherContext);
  const [transformedData, setTransformedData] = useState();

    const displaySate = () => {
        console.log(context);
        props.detailsHandler();
    }
    
  useEffect(() => {
    if (!isEmpty(data)) {
      console.log(data);
      const newData = transformData(data);
      setTransformedData(newData);
      console.log(newData);
    }
  }, [data]);

  const displaySate = () => {
    console.log(context);
    props.renderComponent();
  };

  return (
    // <div>X</div>
    <section className={classes.weather}>

        <Card>
            <div className={classes.title}>Current Weather</div>
            {/* TODO use the time function to update this time */}
            <p className={classes.time}>22:30</p>
            <div className={classes.weatherSections}>
                <div>
                    <div>
                        {/*TODO think how to make this to work dynamically*/}
                        {/*<WiDaySunnyOvercast className={classes.iconClass}/>*/}
                        <SunnyWithClouds className={classes.iconClass}/>
                    </div>
                    <p>{transformedData && transformedData.description}</p>
                </div>
                <div className={classes.temperature}>{transformedData && transformedData.temperature}°C</div>
                <table className={classes.detailsTable}>
                    <tr>
                        <td>Air quality</td>
                        <td className={classes.airQualityText}>Excellent</td>
                    </tr>
                    <tr>
                        <td>Wind speed</td>
                        <td>{transformedData && transformedData.windSpeed} km/h</td>
                    </tr>
                    <tr>
                        <td>Humidity</td>
                        <td>{transformedData && transformedData.humidity}%</td>
                    </tr>
                </table>
            </div>
            <div className={classes.buttonContainer}>
                <button onClick={displaySate}>Details →</button>
            </div>
        </Card>
    </section>
  );
};

export default CurrentWeather;
