import React, { useState, useEffect } from "react";
import classes from "./CurrentWeather.module.css";
import Card from "../../../hoc/Card/Card";
// import SunnyWithClouds from "../../Icons/weather/SunnyWithClouds";


const propertiesToDetail = [
  "description",
  "pressure",
  "humidity",
  "tempMin",
  "tempMax",
  "sunrise",
  "sunset",
  "windSpeed",
];

const CurrentWeatherDetailed = (props) => {
  const { data, time, renderCurrentWeatherResume } = props;
  const [weatherDetails, setWeatherDetails] = useState({});

  useEffect(() => {
    const detailedData = Object.fromEntries(Object.entries(data).filter(entry => propertiesToDetail.includes(entry[0])));
    setWeatherDetails(detailedData);
  },[data])

  const displayResume = () => {
    renderCurrentWeatherResume();
  };

  const renderWeatherDetailsData = function () {
    const weatherDetailsArray = Object.entries(weatherDetails);
    const weatherRowDetails = weatherDetailsArray.map((entry, index) => {
      return (
        <tr key={index + 1}>
          <td>{entry[0]}</td>
          <td>{entry[1]}</td>
        </tr>
      );
    });

    const medianIndex =
      (weatherDetailsArray.length / 2) % 2 === 0
        ? weatherDetailsArray.length / 2 + 0.5
        : weatherDetailsArray.length / 2;
    const firstWeatherDetailsHalf = weatherRowDetails.filter(
      (row) => row.key <= medianIndex
    );
    const secondWeatherDetailsHalf = weatherRowDetails.filter(
      (row) => row.key >= medianIndex
    );

    return (
      <div className={classes.weatherSections}>
        <table className={`${classes.detailsTable} ${classes.detailsTable2}`}>
          <tbody>{firstWeatherDetailsHalf}</tbody>
        </table>
        <table className={`${classes.detailsTable} ${classes.detailsTable2}`}>
          <tbody>{secondWeatherDetailsHalf}</tbody>
        </table>
      </div>
    );
  };

  return (
    <section className={classes.weather}>
      <Card>
        <ul className={classes.list}>
          <li className={classes.title}>Current Weather Details</li>
          <li className={classes.time}>{time}</li>
        </ul>
        <div className={`${classes.weatherSections}`}>
          <div>
            <div>
              {/*TODO think how to make this to work dynamically*/}
              {/* <SunnyWithClouds className={classes.iconClass} /> */}
            </div>
            <p>{data.description}</p>
          </div>
          <div
            className={`${classes.temperature} ${classes.temperatureDetailed}`}
          >
            {data && data.temperature}°C
          </div>
          <div className={classes.realFeel}>
            <h5>Real Feel</h5>
            <p>{data && data.realFeel}°C</p>
          </div>
        </div>
        <div className={`${classes.title} ${classes.subtitle}`}>Details</div>
        {renderWeatherDetailsData()}
        <div className={classes.buttonContainer}>
          <button className={classes.currentWeatherButton} onClick={displayResume}>Go back →</button>
        </div>
      </Card>
      {/*<Card>Something</Card>*/}
    </section>
  );
};

export default CurrentWeatherDetailed;
