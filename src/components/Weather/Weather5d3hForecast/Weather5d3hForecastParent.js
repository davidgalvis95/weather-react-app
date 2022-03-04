import React from "react";
import AverageTempBarChart from "./charts/AverageTempBarChart";
import CustomChartButton from "./ChartsMenuButtons/CustomChartButton";
import classes from "./Weather5d3hForecats.module.css";

const Weather5d3hForecastParent = (props) => {
  return (
    <div className={classes.container}>
      {/* <h1>Here</h1> */}
      <div>
        <CustomChartButton />
      </div>
      <AverageTempBarChart />
    </div>
  );
};

export default Weather5d3hForecastParent;
