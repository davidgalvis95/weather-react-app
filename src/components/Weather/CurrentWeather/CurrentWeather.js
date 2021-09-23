import Card from "../../../hoc/Card/Card";
import classes from "./CurrentWeather.module.css";
import { WiDaySunny } from "weather-icons-react";
import WeatherNavigationButton from "../../../hoc/WeatherNavigationButton";
import { Grid, Box } from "@material-ui/core";

const CurrentWeather = (props) => {
  const { data, time, renderCurrentWeatherDetails } = props;

  const displayDetails = () => {
    renderCurrentWeatherDetails();
  };

  const capitalize = (str) => {
    const arr = str.split(" ");

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
  };

  return (
    <section className={classes.weather}>
      <Card className={classes.cardComplement}>
        <div className={classes.title}>Current Weather</div>
        {/* TODO use the time function to update this time */}
        <p className={classes.time}>{time}</p>
        <Grid container>
          <Grid item xs={6} sm={6} md={3}>
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
          <Grid item xs={6} sm={6} md={4}>
            <div className={classes.temperature}>
              {data && data.temperature}°C
            </div>
          </Grid>
          <Grid container xs={12} sm={12} md={5} rowSpacing="0" gap="1">
            <Grid item xs={12}>
              <div
                className={classes.descriptionRows}
                style={{ marginBottom: "0px", paddingBottom: "0px" }}
              >
                <div className={classes.gridSections}>
                  <p>Air quality</p>
                </div>
                <div className={classes.airQualityText}>
                  <p>Excellent</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.descriptionRows}>
                <div className={classes.gridSections}>
                  <p>Wind speed</p>
                </div>
                <div className={classes.gridSections}>
                  <p>{data && data.windSpeed} km/h</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.descriptionRows}>
                <div className={classes.gridSections}>
                  <p>Humidity</p>
                </div>
                <div className={classes.gridSections}>
                  <p>{data && data.humidity}%</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.buttonWrapper}>
          <div style={{ width: "87px", height: "35px", marginTop: "7px" }}>
            <WeatherNavigationButton
              className={classes.currentWeatherButton}
              execution={displayDetails}
              label="View Details"
            />
          </div>
        </div>
      </Card>
    </section>
  );
};

export default CurrentWeather;
