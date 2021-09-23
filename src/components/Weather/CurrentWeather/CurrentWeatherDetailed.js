import React, { useState, useEffect } from "react";
import classes from "./CurrentWeather.module.css";
import detailedClasses from "./CurrentWeatherDetailed.module.css";
import Card from "../../../hoc/Card/Card";
import { Grid, Box } from "@material-ui/core";
import WeatherTable from "../../../hoc/Table/WeatherTable";
import { WiDaySunny } from "weather-icons-react";
import WeatherNavigationButton from "../../../hoc/WeatherNavigationButton";

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

const tableCellStyle = {
  width: "60%",
  backgroundColor: "#78e08f",
};

const CurrentWeatherDetailed = (props) => {
  const { data, time, renderCurrentWeatherResume } = props;
  const [weatherDetails, setWeatherDetails] = useState({});

  useEffect(() => {
    const detailedData = Object.fromEntries(
      Object.entries(data).filter((entry) =>
        propertiesToDetail.includes(entry[0])
      )
    );
    setWeatherDetails(detailedData);
  }, [data]);

  const displayResume = () => {
    renderCurrentWeatherResume();
  };

  const capitalize = (str) => {
    const arr = str.split(" ");

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
  };

  const renderWeatherDetailsData = function () {
    const weatherDetailsArray = Object.entries(weatherDetails);

    const medianIndex =
      (weatherDetailsArray.length / 2) % 2 === 0
        ? weatherDetailsArray.length / 2 + 0.5
        : weatherDetailsArray.length / 2;

    const firstWeatherDetailsHalf = weatherDetailsArray.filter((element, index) => index + 1 <= medianIndex);
    const secondWeatherDetailsHalf = weatherDetailsArray.filter((element, index) => index + 1 >= medianIndex);

    const headerValues = ["Weather Variable", "Value"];

    return (
      <Grid container xs={12} sm={12} md={12}>
        <Grid item xs={6} item>
          <div style={{marginRight: '5px'}} className={detailedClasses.detailsTableFont}>
          <WeatherTable
            headerValues={headerValues}
            bodyRows={firstWeatherDetailsHalf}
          />
          </div>

        </Grid>
        <Grid item xs={6} item>
        <div style={{marginLeft: '5px'}} className={detailedClasses.detailsTableFont}>
          <WeatherTable
            headerValues={headerValues}
            bodyRows={secondWeatherDetailsHalf}
          />
          </div>
        </Grid>
      </Grid>
    );
  };

  return (
    <section className={classes.weather}>
      <Card className={classes.cardComplement}>
      <div className={classes.title}>Current Weather Details</div>
        {/* TODO use the time function to update this time */}
        {/* TODO make the real feel to appear here */}
        <p className={classes.time}>{time}</p>
        <div className={detailedClasses.gridVsTableSpacing}>
        <Grid container>
          <Grid item xs={6} sm={6} md={6}>
            <Box>
              <div className={classes.iconSectionContainer}>
                <div>
                  <WiDaySunny
                    className={`${classes.iconGeneralProps} ${classes.iconColors}`}
                  />
                </div>
                <p className={classes.description}>
                  {data && capitalize(data.description)}
                </p>
              </div>
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <div className={classes.temperature}>
              {data && data.temperature}°C
            </div>
          </Grid>
        </Grid>    
        </div>
        {renderWeatherDetailsData()}
        <div className={classes.buttonWrapper}>
          <div style={{ width: "87px", height: "35px", marginTop: "7px" }}>
            <WeatherNavigationButton
              className={classes.currentWeatherButton}
              execution={displayResume}
              label="View Resume"
            />
          </div>
        </div>
      </Card>
    </section>
  );
};

export default CurrentWeatherDetailed;
