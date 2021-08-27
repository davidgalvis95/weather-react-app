import React from "react";
import CardForecast from "./CardForecast";
import { WiDaySunny } from "weather-icons-react";
import classes from "./CardsForecast.module.css"

// import image1 from "../assets/image1.jpg";
// import image2 from "../assets/image2.jpg";
// import image3 from "../assets/image3.jpg";

const cardsForecastSimulated = [
  {
    id: 1,
    weatherIconSource: <WiDaySunny size={24} color='#000'/>,
    description: "Sunny",
    temperature: "11 C",
    humidity: "75 %",
    windSpeed: "4 kmh",
  },
  {
    id: 2,
    weatherIconSource: <WiDaySunny size={24} color='#000'/>,
    description: "Sunny",
    temperature: "12 C",
    humidity: "75 %",
    windSpeed: "4 kmh",
  },
  {
    id: 3,
    weatherIconSource: <WiDaySunny size={24} color='#000'/>,
    description: "Sunny",
    temperature: "15 C",
    humidity: "75 %",
    windSpeed: "4 kmh",
  },
  {
    id: 4,
    weatherIconSource: <WiDaySunny size={24} color='#000'/>,
    description: "Sunny",
    temperature: "15 C",
    humidity: "75 %",
    windSpeed: "4 kmh",
  },
  {
    id: 5,
    weatherIconSource: <WiDaySunny size={24} color='#000'/>,
    description: "Sunny",
    temperature: "16 C",
    humidity: "75 %",
    windSpeed: "4 kmh",
  },
  {
    id: 6,
    weatherIconSource: <WiDaySunny size={24} color='#000'/>,
    description: "Sunny",
    temperature: "15 C",
    humidity: "75 %",
    windSpeed: "4 kmh",
  },
  {
    id: 7,
    weatherIconSource: <WiDaySunny size={24} color='#000'/>,
    description: "Sunny",
    temperature: "18 C",
    humidity: "75 %",
    windSpeed: "4 kmh",
  },
  {
    id: 8,
    weatherIconSource: <WiDaySunny size={24} color='#000'/>,
    description: "Sunny",
    temperature: "18 C",
    humidity: "75 %",
    windSpeed: "4 kmh",
  },
  {
    id: 9,
    weatherIconSource: <WiDaySunny size={24} color='#000'/>,
    description: "Sunny",
    temperature: "18 C",
    humidity: "75 %",
    windSpeed: "4 kmh",
  },
  {
    id: 10,
    weatherIconSource: <WiDaySunny size={24} color='#000'/>,
    description: "Sunny",
    temperature: "18 C",
    humidity: "75 %",
    windSpeed: "4 kmh",
  },
  {
    id: 11,
    weatherIconSource: <WiDaySunny size={24} color='#000'/>,
    description: "Sunny",
    temperature: "18 C",
    humidity: "75 %",
    windSpeed: "4 kmh",
  },
  {
    id: 12,
    weatherIconSource: <WiDaySunny size={24} color='#000'/>,
    description: "Sunny",
    temperature: "19 C",
    humidity: "75 %",
    windSpeed: "4 kmh",
  },
  {
    id: 13,
    weatherIconSource: <WiDaySunny size={24} color='#000'/>,
    description: "Sunny",
    temperature: "18 C",
    humidity: "75 %",
    windSpeed: "4 kmh",
  },
  {
    id: 14,
    weatherIconSource: <WiDaySunny size={24} color='#000'/>,
    description: "Sunny",
    temperature: "18 C",
    humidity: "75 %",
    windSpeed: "4 kmh",
  },
  {
    id: 15,
    weatherIconSource: <WiDaySunny size={24} color='#000'/>,
    description: "Sunny",
    temperature: "18 C",
    humidity: "75 %",
    windSpeed: "4 kmh",
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
          }) => (
            <div className={classes.item}>
              <CardForecast
                weatherIconSource={weatherIconSource}
                description={description}
                temperature={temperature}
                humidity={humidity}
                windSpeed={windSpeed}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CardsForecast;
