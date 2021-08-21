import React from "react";
import CardForecast from "./CardForecast";
import { WiDaySunny } from "weather-icons-react";

// import image1 from "../assets/image1.jpg";
// import image2 from "../assets/image2.jpg";
// import image3 from "../assets/image3.jpg";

const cardsForecastSimulated = [
  {
    id: 1,
    weatherIconSource: <WiDaySunny size={24} color='#000'/>,
    description: "Sunny",
    temperature: "15 C",
    humidity: "75 %",
    windSpeed: "4 kmh",
  },
  {
    id: 2,
    weatherIconSource: <WiDaySunny size={24} color='#000'/>,
    description: "Sunny",
    temperature: "15 C",
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
];

const CardsForecast = (props) => {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cardsForecastSimulated.map(
          ({
            id,
            weatherIconSource,
            description,
            temperature,
            humidity,
            windSpeed,
          }) => (
            <div className="col-md-3" key={id}>
              <CardsForecast
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
