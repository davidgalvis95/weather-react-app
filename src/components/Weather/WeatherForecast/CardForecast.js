import React from "react";
import PropTypes from "prop-types";

const CardForecast = ({
  weatherIconSource,
  description,
  temperature,
  humidity,
  windSpeed,
}) => {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img
          src={weatherIconSource}
          alt="a wallpaper"
          className="card-img-top"
        />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{description}</h4>
        <p className="card-text text-secondary">
          {temperature ? temperature : "0"}
        </p>
        <p className="card-text text-secondary">{humidity ? humidity : "0"}</p>
        <p className="card-text text-secondary">
          {windSpeed ? windSpeed : "0"}
        </p>
      </div>
    </div>
  );
};

export default CardForecast;

CardForecast.propTypes = {
  humidity: PropTypes.string,
  temperature: PropTypes.string.isRequired,
  description: PropTypes.string,
  weatherIconSource: PropTypes.elementType.isRequired,
  windSpeed: PropTypes.string,
};
