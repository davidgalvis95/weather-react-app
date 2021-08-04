
import React, {useState, useContext, useEffect} from "react";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import CurrentWeatherDetailed from "../components/CurrentWeather/CurrentWeatherDetailed";
import Search from "../components/CurrentWeather/Search/Search";
import { objectIsEmpty } from "../util/util";
import { CurrentWeatherContext } from "../context/current-weather-context";
import useCurrentWeatherResult from "../hooks/useCurrentWeatherResult"

const CurrentWeatherParent = (props) => {
    const [renderDetails, setRenderDetails] = useState(false);
    const {data, isLoading, initialReq} = useContext(CurrentWeatherContext);
    const {transformData} = useCurrentWeatherResult();

    useEffect(() => {
      console.log(initialReq)
      console.log(data)
      
      // console.log(isLoading)
    }, [data, isLoading, initialReq]);

    const renderComponent = () => {
        setRenderDetails(true)
    }

    let comp = <CurrentWeather renderComponent={renderComponent} data={data} transformData={transformData}/>;
    if (renderDetails) {
        comp = <CurrentWeatherDetailed data={data} transformData={transformData}/>
    }

    let parentComponent = (
      <div>
        <Search/>
        {comp}
      </div>
    );

    if(initialReq && isLoading) {
      parentComponent = <h1>Hello</h1>;
    }


    return (
        <div>
            {parentComponent}
        </div>
    );
}

export default CurrentWeatherParent;
