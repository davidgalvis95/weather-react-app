import classes from "./ViewButtonDetails.module.css"
import { Button } from "react-bootstrap";

const ViewDetailsButton = (props) => {

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
          View Details
        </Button>
      </div>
      <div style={{ height: "2px" }} />
    </div>
  );
};


export default ViewDetailsButton;