
import React, {useState, useContext, useEffect} from "react";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import CurrentWeatherDetailed from "../components/CurrentWeather/CurrentWeatherDetailed";
import Search from "../components/CurrentWeather/Search/Search";
import { objectIsEmpty } from "../util/util";
import { CurrentWeatherContext } from "../context/current-weather-context";

const CurrentWeatherParent = (props) => {
    const [renderDetails, setRenderDetails] = useState(false);
    const {data, isLoading, initialReq} = useContext(CurrentWeatherContext);

    useEffect(() => {
      // console.log(initialReq)
      console.log(data)
      // console.log(isLoading)
    }, [data, isLoading, initialReq]);

    const renderComponent = () => {
        setRenderDetails(true)
    }

    let comp = <CurrentWeather renderComponent={renderComponent} data={data}/>;
    if (renderDetails) {
        comp = <CurrentWeatherDetailed data={data}/>
    }

    let parentComponent = (
      <div>
        <Search/>
        {comp}
      </div>
    );

    if(isLoading && initialReq) {
      parentComponent = null;
    }


    return (
        <div>
            {parentComponent}
        </div>
    );
}

export default CurrentWeatherParent;
