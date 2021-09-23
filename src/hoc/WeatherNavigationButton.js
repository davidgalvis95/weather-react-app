import classes from "./ViewButtonDetails.module.css"
import { Button } from "react-bootstrap";

const WeatherNavigationButton = (props) => {

  const executeFunction = () => {
    props.execution();
  }

  return (
    <div>
      <div className={classes.buttonContainer}>
        <Button
          className={classes.buttonDetails}
          variant="contained"
          size="small"
          onClick={executeFunction}
        >
          {props.label}
        </Button>
      </div>
      <div style={{ height: "2px" }} />
    </div>
  );
};


export default WeatherNavigationButton;