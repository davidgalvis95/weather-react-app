import React, { useEffect, useState } from "react";
import { WiDaySunny } from "weather-icons-react";
import { Grid, Box } from "@material-ui/core";
import classes from "./WeatherDailyForecast.module.css";
import sampleData from "../../../util/SimulatedApiData/simulated2WeeksDailyForecastOutput.json";
import capitalize from "@mui/utils/capitalize";

const WeatherDailyForecast = (props) => {

  const [component, setComponent] =useState(null);

  const keyMappings = new Map(Object.entries({
    temperatureMax: "Temp Max",
    temperatureMin: "Temp Min",
    humidity: "Humidity",
    pressure: "Pressure",
  }));

  useEffect(() => {
    loadFromSampleData();
  }, []);

  function loadFromSampleData() {
    const sampleOutput = JSON.parse(JSON.stringify(sampleData));

    sampleOutput.map(() => {
      return buildDailyForecast();
    });
    console.log(sampleOutput);
  }

  function buildDailyForecast(individualForecastPayload, index) {
    //TODO make the icon to appear dynamically
    console.log(individualForecastPayload);
    const payloadAsArray = Object.keys(individualForecastPayload).map((key) => [
      key,
      individualForecastPayload[key],
    ]);

    const weatherDailyForecastGrids = payloadAsArray.map((element, index) =>
      buildInternalDailyForecastSection(element, index)
    );

    const outputComponent = (
      <Grid item xs={12} sm={12} md={6}>
        <div className={classes.gridInternalContainer}>
          {weatherDailyForecastGrids}
        </div>
      </Grid>
    );

    setComponent(outputComponent);
  }

  const buildInternalDailyForecastSection = (element, index) => {
    const isTheFirstElement = index === 0;
    const isIndexEven = index % 0 === 0;

    let innerComponent = (
      <React.Fragment>
        <div className={classes.descriptionTextDivs}>
          {keyMappings.get(element[0])}
        </div>
        <div className={classes.descriptionTextDivs}>{element[1]}</div>
      </React.Fragment>
    );
    if (isTheFirstElement) {
      innerComponent = (
        <React.Fragment>
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
    <React.Fragment>
      <div>
        {/* <Grid container rowSpacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <div className={classes.gridInternalContainer}>
              <Grid
                className={`${classes.weatherIconItem} ${classes.evenColor}`}
                xs={2}
              >
                <div>
                  <WiDaySunny className={classes.iconGeneralProps} />
                </div>
                <p className={classes.weatherIconDescription}>Sunny</p>
              </Grid>
              <Grid
                className={`${classes.weatherItem} ${classes.oddColor}`}
                xs={2}
              >
                <div className={classes.descriptionTextDivs}>Temp Max</div>
                <div className={classes.descriptionTextDivs}>20</div>
              </Grid>
              <Grid
                className={`${classes.weatherItem} ${classes.evenColor}`}
                xs={2}
              >
                <div className={classes.descriptionTextDivs}>Temp Min</div>
                <div className={classes.descriptionTextDivs}>13</div>
              </Grid>
              <Grid
                className={`${classes.weatherItem} ${classes.oddColor}`}
                xs={2}
              >
                <div className={classes.descriptionTextDivs}>Pressure</div>
                <div className={classes.descriptionTextDivs}>1024</div>
              </Grid>
              <Grid
                className={`${classes.weatherItem} ${classes.evenColor}`}
                xs={2}
              >
                <div className={classes.descriptionTextDivs}>Humidity</div>
                <div className={classes.descriptionTextDivs}>70%</div>
              </Grid>
            </div>
          </Grid> */}
        {/* </Grid> */}
        {component}
      </div>
    </React.Fragment>
  );
};

export default WeatherDailyForecast;
