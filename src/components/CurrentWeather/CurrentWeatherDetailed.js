import React, {useState, useEffect} from 'react';
import classes from "./CurrentWeather.module.css";
import Card from "../../hoc/Card/Card";

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


    const renderWeatherDetailsData = function () {
        const weatherDetailsArray = Object.entries(weatherDetails);
        return weatherDetailsArray.map((entry, index) => {
            // const {key, value} = entry;
            console.log(index);
            return (
                <tr key={index}>
                    <td>{entry[0]}</td>
                    <td>{entry[1]}</td>
                </tr>
            )
        })
    }
    return (
        <section className={classes.weather}>
            <Card>
                <ul>
                    <li>current time resume</li>
                    <li>22:33</li>
                </ul>
                <div>
                    <div>
                        <div>icon</div>
                        <div>message</div>
                    </div>
                    <div>Real feel</div>
                </div>
                <div className={classes.weatherSections}>
                    <div>
                        <div>icon</div>
                        <div>message</div>
                    </div>
                    <div>temperature</div>
                    <div>details</div>
                </div>
                <table>
                    {renderWeatherDetailsData()}
                </table>
            </Card>
            {/*<Card>Something</Card>*/}
        </section>
    )
}

export default CurrentWeatherDetailed;