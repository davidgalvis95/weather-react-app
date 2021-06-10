import React, {useState, useEffect} from 'react';
//TODO Centralize axios
import axios from "axios";
import classes from "./CurrentWeather.module.css";
import Card from "../../hoc/Card/Card";
import SunnyWithClouds from "../Icons/weather/SunnyWithClouds";

//This object will be passed through props
export const mainWeather = {
    "description": "fog",
    "pressure": 1011,
    "humidity": 93,
    "tempmin": 280.93,
    "tempmax": 287.04,
    "sunrise": 1570255614,
    "sunset": 1570296659,
    //this is from other object
    "windSpeed": 1.5
}

const CurrentWeatherDetailed = (props) => {

    const [weatherDetails, setWeatherDetails] = useState(mainWeather);

    useEffect(() => {

        //fetch the info from the api
        console.log("Hello");
    }, [])

    async function getCurrentWeather() {
        const currentWeather = await axios
    }


    const renderWeatherDetailsData = function () {
        const weatherDetailsArray = Object.entries(weatherDetails);
        const weatherRowDetails = weatherDetailsArray.map((entry, index) => {
            return (
                <tr key={index + 1}>
                    <td>{entry[0]}</td>
                    <td>{entry[1]}</td>
                </tr>
            )
        })

        const medianIndex = ((weatherDetailsArray.length / 2) % 2 === 0 ? (weatherDetailsArray.length / 2) + 0.5 : (weatherDetailsArray.length / 2));
        const firstWeatherDetailsHalf = weatherRowDetails.filter(row => row.key <= medianIndex );
        const secondWeatherDetailsHalf = weatherRowDetails.filter(row => row.key >= medianIndex );

        return (
            <div className={classes.weatherSections}>
                <table className={`${classes.detailsTable} ${classes.detailsTable2}`}>{firstWeatherDetailsHalf}</table>
                <table className={`${classes.detailsTable} ${classes.detailsTable2}`}>{secondWeatherDetailsHalf}</table>
            </div>
        );
    }
    return (
        <section className={classes.weather}>
            <Card>
                <ul className={classes.list}>
                    <li className={classes.title}>Current Weather Details</li>
                    <li className={classes.time}>22:33</li>
                </ul>
                <div className={`${classes.weatherSections}`}>
                    <div>
                        <div>
                            {/*TODO think how to make this to work dynamically*/}
                            <SunnyWithClouds className={classes.iconClass}/>
                        </div>
                        <p>Sunny with few clouds</p>
                    </div>
                    <div className={`${classes.temperature} ${classes.temperatureDetailed}`}>20°C</div>
                    <div className={classes.realFeel}>
                        <h5>Real Feel</h5>
                        <p>18°C</p>
                    </div>
                </div>
                <div className={`${classes.title} ${classes.subtitle}`}>Details</div>
                {renderWeatherDetailsData()}
                <div className={classes.buttonContainer}>
                    <button>Go back →</button>
                </div>
            </Card>
            {/*<Card>Something</Card>*/}
        </section>
    )
}

export default CurrentWeatherDetailed;