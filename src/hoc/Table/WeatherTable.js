import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import classes from "../../components/Weather/CurrentWeather/CurrentWeatherDetailed.module.css";

import { useEffect } from "react";

//TODO pass the styles of this hoc component as props and the css classes(which contains width and color) too

const WeatherTable = (props) => {
  const { headerValues, bodyRows } = props;

  const header = () => {
    const cells = headerValues.map((value) => (
      <TableCell
        key={value}
        className={classes.weatherTableHeadCell}
        size="small"
        variant="head"
        sx={{ fontFamily: "inherit", color: "#2d3436" }}
      >
        {value}
      </TableCell>
    ));
    return (
      <TableHead>
        <TableRow>{cells}</TableRow>
      </TableHead>
    );
  };

  const weatherRowDetails = bodyRows.map((entry, index) => {
    console.log(bodyRows);
    return (
      <TableRow key={index + 1}>
        <TableCell
          className={classes.weatherTableCell}
          size="small"
          variant="body"
          sx={{ fontFamily: "inherit", color: "#ccc", borderBottom: "1", borderRight: 1, borderColor: "grey.600"}}
        >
          {entry[0]}
        </TableCell>
        <TableCell
          className={classes.weatherTableCell}
          size="small"
          variant="body"
          sx={{ fontFamily: "inherit", color: "#ccc", borderBottom: "1", borderColor: "grey.600" }}
        >
          {entry[1]}
        </TableCell>
      </TableRow>
    );
  });

  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
      <Table
        // styles={{ marginLeft: "5px", marginRight: "5px" }}
        aria-label="simple table"
      >
        {header()}
        <TableBody>{weatherRowDetails}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default WeatherTable;
