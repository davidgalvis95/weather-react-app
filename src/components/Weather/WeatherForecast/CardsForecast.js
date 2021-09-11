import React from "react";
import CardForecast from "./CardForecast";
import { WiDaySunny } from "weather-icons-react";
import classes from "./CardsForecast.module.css"
import { Grid, Box } from "@material-ui/core";

// import image1 from "../assets/image1.jpg";
// import image2 from "../assets/image2.jpg";
// import image3 from "../assets/image3.jpg";

const cardsForecastSimulated = [
  {
    id: 1,
    weatherIconSource: <WiDaySunny className={`${classes.iconGeneralProps} ${classes.sunnyIconColors}`}/>,
    description: "Sunny",
    temperature: "11",
    humidity: "75 %",
    windSpeed: "4 kmh",
    visibility: "10 km"
  },
  {
    id: 2,
    weatherIconSource: <WiDaySunny className={`${classes.iconGeneralProps} ${classes.sunnyIconColors}`}/>,
    description: "Sunny",
    temperature: "12",
    humidity: "75 %",
    windSpeed: "4 kmh",
    visibility: "10 km"
  },
  {
    id: 3,
    weatherIconSource: <WiDaySunny className={`${classes.iconGeneralProps} ${classes.sunnyIconColors}`}/>,
    description: "Sunny",
    temperature: "15",
    humidity: "75 %",
    windSpeed: "4 kmh",
    visibility: "10 km"
  },
  {
    id: 4,
    weatherIconSource: <WiDaySunny className={`${classes.iconGeneralProps} ${classes.sunnyIconColors}`}/>,
    description: "Sunny",
    temperature: "15",
    humidity: "75 %",
    windSpeed: "4 kmh",
    visibility: "10 km"
  },
  {
    id: 5,
    weatherIconSource: <WiDaySunny className={`${classes.iconGeneralProps} ${classes.sunnyIconColors}`}/>,
    description: "Sunny",
    temperature: "16",
    humidity: "75 %",
    windSpeed: "4 kmh",
    visibility: "10 km"
  },
  {
    id: 6,
    weatherIconSource:<WiDaySunny className={`${classes.iconGeneralProps} ${classes.sunnyIconColors}`}/>,
    description: "Sunny",
    temperature: "15",
    humidity: "75 %",
    windSpeed: "4 kmh",
    visibility: "10 km"
  },
  {
    id: 7,
    weatherIconSource:<WiDaySunny className={`${classes.iconGeneralProps} ${classes.sunnyIconColors}`}/>,
    description: "Sunny",
    temperature: "18",
    humidity: "75 %",
    windSpeed: "4 kmh",
    visibility: "10 km"
  },
  {
    id: 8,
    weatherIconSource:<WiDaySunny className={`${classes.iconGeneralProps} ${classes.sunnyIconColors}`}/>,
    description: "Sunny",
    temperature: "18",
    humidity: "75 %",
    windSpeed: "4 kmh",
    visibility: "10 km"
  },
  {
    id: 9,
    weatherIconSource:<WiDaySunny className={`${classes.iconGeneralProps} ${classes.sunnyIconColors}`}/>,
    description: "Sunny",
    temperature: "18",
    humidity: "75 %",
    windSpeed: "4 kmh",
    visibility: "10 km"
  },
  {
    id: 10,
    weatherIconSource: <WiDaySunny className={`${classes.iconGeneralProps} ${classes.sunnyIconColors}`}/>,
    description: "Sunny",
    temperature: "18",
    humidity: "75 %",
    windSpeed: "4 kmh",
    visibility: "10 km"
  },
  {
    id: 11,
    weatherIconSource: <WiDaySunny className={`${classes.iconGeneralProps} ${classes.sunnyIconColors}`}/>,
    description: "Sunny",
    temperature: "18",
    humidity: "75 %",
    windSpeed: "4 kmh",
    visibility: "10 km"
  },
  {
    id: 12,
    weatherIconSource:<WiDaySunny className={`${classes.iconGeneralProps} ${classes.sunnyIconColors}`}/>,
    description: "Sunny",
    temperature: "19",
    humidity: "75 %",
    windSpeed: "4 kmh",
    visibility: "10 km"
  },
  {
    id: 13,
    weatherIconSource:<WiDaySunny className={`${classes.iconGeneralProps} ${classes.sunnyIconColors}`}/>,
    description: "Sunny",
    temperature: "18",
    humidity: "75 %",
    windSpeed: "4 kmh",
    visibility: "10 km"
  },
  {
    id: 14,
    weatherIconSource:<WiDaySunny className={`${classes.iconGeneralProps} ${classes.sunnyIconColors}`}/>,
    description: "Sunny",
    temperature: "18",
    humidity: "75 %",
    windSpeed: "4 kmh",
    visibility: "10 km"
  },
  {
    id: 15,
    weatherIconSource:<WiDaySunny className={`${classes.iconGeneralProps} ${classes.sunnyIconColors}`}/>,
    description: "Sunny",
    temperature: "18",
    humidity: "75 %",
    windSpeed: "4 kmh",
    visibility: "10 km"
  },
];

const CardsForecast = (props) => {
  // return (
  //   <div className="container d-flex justify-content-center align-items-center h-100">
  //     <div className="row">
  //       {cardsForecastSimulated.map(
  //         ({
  //           id,
  //           weatherIconSource,
  //           description,
  //           temperature,
  //           humidity,
  //           windSpeed,
  //         }) => (
  //           <div className="col-md-3" key={id}>
  //             <CardsForecast
  //               weatherIconSource={weatherIconSource}
  //               description={description}
  //               temperature={temperature}
  //               humidity={humidity}
  //               windSpeed={windSpeed}
  //             />
  //           </div>
  //         )
  //       )}
  //     </div>
  //   </div>
  // );

  return (
    <div className={classes.horizontal_slider}>

    {/* <div className="container d-flex justify-content-center align-items-center h-100"> */}
    <div className={classes.slider_container}>
      {/* <div className="row"> */}
        {cardsForecastSimulated.map(
          ({
            id,
            weatherIconSource,
            description,
            temperature,
            humidity,
            windSpeed,
            visibility
          }) => (
            <div className={classes.weatherForecastItems}>
              <CardForecast
                key={id}
                weatherIconSource={weatherIconSource}
                description={description}
                temperature={temperature}
                humidity={humidity}
                windSpeed={windSpeed}
                visibility={visibility}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CardsForecast;
