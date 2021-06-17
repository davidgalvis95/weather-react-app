import React, {useContext} from 'react';
import Card from "../../hoc/Card/Card";
import classes from './CurrentWeather.module.css';
import SunnyWithClouds from "../Icons/weather/SunnyWithClouds";
import {CurrentWeatherContext} from "../../context/current-weather-context";


export const weatherGeneral = {
    "id": 741,
    "main": "Fog",
    "description": "fog",
    "icon": "50n"
}

export const mainWeather = {
    "temp": 284.04,
    "pressure": 1011,
    "humidity": 93,
    "tempmin": 280.93,
    "tempmax": 287.04,
    //this is from other object
    "windSpeed": 1.5
}


const CurrentWeather = (props) => {
    // const [weather, setWeather] = useState({});

    const context = useContext(CurrentWeatherContext);

    const displaySate = () => {
        console.log(context);
        props.renderComponent();
    }

    return (
        <section className={classes.weather}>

            <Card>
                <div className={classes.title}>Current Weather</div>
                <p className={classes.time}>22:30</p>
                <div className={classes.weatherSections}>
                    <div>
                        <div>
                            {/*TODO think how to make this to work dynamically*/}
                            {/*<WiDaySunnyOvercast className={classes.iconClass}/>*/}
                            <SunnyWithClouds className={classes.iconClass}/>
                        </div>
                        <p>Sunny with few clouds</p>
                    </div>
                    <div className={classes.temperature}>20°C</div>
                    <table className={classes.detailsTable}>
                        <tr>
                            <td>Air quality</td>
                            <td className={classes.airQualityText}>Excellent</td>
                        </tr>
                        <tr>
                            <td>Wind speed</td>
                            <td>8 km/h</td>
                        </tr>
                        <tr>
                            <td>Humidity</td>
                            <td>93%</td>
                        </tr>
                    </table>
                </div>
                <div className={classes.buttonContainer}>
                    <button onClick={displaySate}>Details →</button>
                </div>
            </Card>
        </section>
    )
}

export default CurrentWeather;