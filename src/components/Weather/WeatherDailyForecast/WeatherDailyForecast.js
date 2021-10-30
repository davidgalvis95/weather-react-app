import React, { useEffect, useState } from "react";
import { WiDaySunny } from "weather-icons-react";
import { Grid } from "@material-ui/core";
import classes from "./WeatherDailyForecast.module.css";
import sampleData from "../../../util/SimulatedApiData/simulated2WeeksDailyForecastOutput.json";
import sampleDetailedData from "../../../util/SimulatedApiData/simulated2WeeksDailyForecastOutputDetails.json";
import capitalize from "@mui/utils/capitalize";
import CurrentWeatherDetailed from "../CurrentWeather/CurrentWeatherDetailed";

const WeatherDailyForecast = (props) => {
  const [component, setComponent] = useState(null);
  // const [detailedData, setDetailedData] = useState(null);
  const [detailedComponent, setDetailedComponent] = useState(null);

  const keyMappings = new Map(
    Object.entries({
      temperatureMax: "Temp Max",
      temperatureMin: "Temp Min",
      humidity: "Humidity",
      pressure: "Pressure",
    })
  );

  const closeDetails = () => {

  }

  //The detailed data will be gotten using the key of the weather
  function getDetailedDataAndTransformIt(data, index){
    const sampleDetailedOutput = JSON.parse(JSON.stringify(sampleDetailedData));
    // setDetailedData(sampleDetailedOutput);
    
    setDetailedComponent(<div>
      <CurrentWeatherDetailed data={sampleDetailedOutput} time={undefined} renderCurrentWeatherResume={() => closeDetails()}/>
    </div>);
  }


  useEffect(() => {
    //TODO integrate this width with the display of the array, take into account the 15px of the sided-bar
    console.log(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth );
    //TODO make this use the real data and integrate the whole stuff
    getDetailedDataAndTransformIt(null, null);
    
    loadFromSampleData();
  }, []);

  function loadFromSampleData() {
    const sampleOutput = JSON.parse(JSON.stringify(sampleData));

    const finalTransformedComponentArray = sampleOutput.map(
      (dailyOutput, index) => {
        return buildDailyForecast(dailyOutput, index);
      }
    );
    console.log(finalTransformedComponentArray);
    setComponent(finalTransformedComponentArray);
  }

  function buildDailyForecast(individualForecastPayload, index) {
    //TODO make the icon to appear dynamically
    const payloadAsArray = Object.keys(individualForecastPayload).map((key) => [
      key,
      individualForecastPayload[key],
    ]);

    const weatherDailyForecastGrids = payloadAsArray.map((element, index) => {
      if (index !== payloadAsArray.length - 1) {
        return buildInternalDailyForecastSection(element, index);
      }
    });

    const epoch = payloadAsArray[payloadAsArray.length - 1][1];

    //TODO create a component for this
    const outputComponent = (
      <Grid item xs={12} sm={12} md={6} key={epoch}>
        <div className={classes.trapezoidContainer}>
          <div className={classes.trapezoid}></div>
          <div className={classes.date}>
            {convertEpochToHumanReadableTime(epoch)}
          </div>
        </div>
        <div className={classes.gridInternalContainer}>
          {weatherDailyForecastGrids}
        </div>
      </Grid>
    );
    return outputComponent;
  }

  //TODO this logic should be managed in a separate hook
  function convertEpochToHumanReadableTime(epoch) {
    const dayNames = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date(epoch * 1000);
    return `${dayNames[date.getDay() - 1]}, ${
      monthNames[date.getUTCMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  }

  const buildInternalDailyForecastSection = (element, index) => {
    const isTheFirstElement = index === 0;
    const isIndexEven = index % 0 === 0;
    const boxTitle = keyMappings.get(element[0]);

    let innerComponent = (
      <React.Fragment>
        <div className={classes.descriptionTextDivs}>{boxTitle}</div>
        <div className={classes.descriptionTextDivs}>{element[1]}</div>
      </React.Fragment>
    );
    if (isTheFirstElement) {
      innerComponent = (
        <React.Fragment key={boxTitle}>
          <div>
            <WiDaySunny className={classes.iconGeneralProps} />
          </div>
          <p className={classes.weatherIconDescription}>
            {capitalize(element[1])}
          </p>
        </React.Fragment>
      );
    }

    return (
      <Grid
        className={`${
          isTheFirstElement ? classes.weatherIconItem : classes.weatherIconItem
        } ${isIndexEven ? classes.evenColor : classes.oddColor}`}
        xs={2}
      >
        {innerComponent}
      </Grid>
    );
  };

  return (
    <Grid container>
      {component}
      <Grid item xs={12}>
      {detailedComponent}
      </Grid>
    </Grid>
  );
};

export default WeatherDailyForecast;
