import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Grid, Box } from "@material-ui/core";
import classes from "./CardForecast.module.css";
import ViewDetailsButton from "../../../hoc/ViewDetailsButton"

const CardForecast = ({
  weatherIconSource,
  description,
  temperature,
  humidity,
  windSpeed,
  visibility,
}) => {
  const [descriptors, setDescriptors] = useState([]);

  useEffect(() => {
    const mapForecastDescriptions = new Map();
    const iterator = mapForecastDescriptions.entries();
    const descriptions = new Array();

    // TODO make this dynamic for farenheit and celsius
    mapForecastDescriptions.set("Temperature", temperature.concat(" °C"));
    mapForecastDescriptions.set("Wind Speed", windSpeed);
    mapForecastDescriptions.set("Humidity", humidity);
    mapForecastDescriptions.set("Visibility", visibility);

    mapForecastDescriptions.forEach((description) => {
      descriptions.push(iterator.next().value);
    });
    setDescriptors(descriptions);
  }, []);

  const handleCardSelection = () => {

  };

  return (
    <Card className={classes.item}>
      <Card.Title className={classes.cardTitle}>Monday 30th</Card.Title>
      <div className={classes.iconSpan}>{weatherIconSource}</div>
      <div onClick={handleCardSelection}>
        <Card.Body>
          <Card.Title className={classes.cardTitle}>{description}</Card.Title>
        </Card.Body>
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          {descriptors
            ? descriptors.map((descriptor) => {
                return (
                  <Grid container>
                    <Grid item xs={8}>
                      <Box>
                        <p className={classes.descriptionGrid}>
                          {descriptor[0]}
                        </p>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box>
                        <p className={classes.descriptionGrid}>
                          {descriptor[1]}
                        </p>
                      </Box>
                    </Grid>
                  </Grid>
                );
              })
            : null}
        </div>
        <Card.Body>
          <ViewDetailsButton/>
        </Card.Body>
      </div>
    </Card>
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
