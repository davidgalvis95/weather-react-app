import React, {useState} from "react";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import CurrentWeatherDetailed from "../components/CurrentWeather/CurrentWeatherDetailed";
import {CurrentWeatherContext} from '../context/current-weather-context'
import Search from "../components/CurrentWeather/Search/Search";

const CurrentWeatherParent = (props) => {
    const [renderDetails, setRenderDetails] = useState(0);

    const renderComponent = () => {
        setRenderDetails(1)
    }

    let comp = <CurrentWeather renderComponent={renderComponent}/>;
    if (renderDetails === 1) {
        comp = <CurrentWeatherDetailed/>
    }
    return (
        <div>
            <Search/>
            {comp}
        </div>
    );
}

export default CurrentWeatherParent;