import Card from "../../../hoc/Card/Card";
import classes from "./CurrentWeather.module.css";
import SunnyWithClouds from "../../Icons/weather/SunnyWithClouds";

const CurrentWeather = (props) => {

  const { data, time, renderCurrentWeatherDetails } = props;

  const displayDetails = () => {
    renderCurrentWeatherDetails();
  };

  return (
    // <div>X</div>
    <section className={classes.weather}>
      <Card>
        <div className={classes.title}>Current Weather</div>
        {/* TODO use the time function to update this time */}
        <p className={classes.time}>{time}</p>
        <div className={classes.weatherSections}>
          <div>
            <div>
              {/*TODO think how to make this to work dynamically*/}
              {/*<WiDaySunnyOvercast className={classes.iconClass}/>*/}
              <SunnyWithClouds className={classes.iconClass} />
            </div>
            <p>{data && data.description}</p>
          </div>
          <div className={classes.temperature}>
            {data && data.temperature}°C
          </div>
          <table className={classes.detailsTable}>
            <tbody>
              <tr>
                <td>Air quality</td>
                <td className={classes.airQualityText}>Excellent</td>
              </tr>
              <tr>
                <td>Wind speed</td>
                <td>{data && data.windSpeed} km/h</td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>{data && data.humidity}%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={classes.buttonContainer}>
          <button onClick={displayDetails}>Details →</button>
        </div>
      </Card>
    </section>
  );
};

export default CurrentWeather;
