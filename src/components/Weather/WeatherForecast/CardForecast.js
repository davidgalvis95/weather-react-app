import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const CardForecast = ({
  weatherIconSource,
  description,
  temperature,
  humidity,
  windSpeed,
}) => {
  // return (
  //   <div className="card text-center bg-dark animate__animated animate__fadeInUp">
  //     <div className="overflow">
  //       <img
  //         src={weatherIconSource}
  //         alt="a wallpaper"
  //         className="card-img-top"
  //       />
  //     </div>
  //     <div className="card-body text-light">
  //       <h4 className="card-title">{description}</h4>
  //       <p className="card-text text-secondary">
  //         {temperature ? temperature : "0"}
  //       </p>
  //       <p className="card-text text-secondary">{humidity ? humidity : "0"}</p>
  //       <p className="card-text text-secondary">
  //         {windSpeed ? windSpeed : "0"}
  //       </p>
  //     </div>
  //   </div>
  // );

  return (
    <div>
      <Card style={{ width: "10rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
        {weatherIconSource}
        <Card.Body>
          <Card.Title>{description}</Card.Title>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{temperature}</ListGroupItem>
          <ListGroupItem>{humidity}</ListGroupItem>
          <ListGroupItem>{windSpeed}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">View Details</Card.Link>
          {/* <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
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
