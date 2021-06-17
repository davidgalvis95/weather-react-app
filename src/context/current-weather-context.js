import {useState, createContext, useEffect} from "react";
import useCurrentWeather from "../hooks/useCurrentWeather";
import {initialState} from "../reducers/weatherRequestReducer";

export const CurrentWeatherContext = createContext(initialState);

const CurrentWeatherContextProvider = props => {
    const {getCurrentWeatherPointer, isLoading, error, data} = useCurrentWeather();
    const [state, setState] = useState(initialState);
    const {city} = props;

    useEffect(() => {
        if (city !== '') {
            getCurrentWeatherPointer(city);
        }
    }, [city, getCurrentWeatherPointer])

    useEffect(() => {
        const currentState = {
            error: error,
            data: data,
            isLoading: isLoading
        }
        console.log(currentState);
        setState(currentState);
    }, [data, error, isLoading]);

    return (
        <CurrentWeatherContext.Provider value={{
            getWeatherFunction: getCurrentWeatherPointer,
            isLoading: state.isLoading,
            error: state.error,
            data: state.data
        }}>
            {props.children}
        </CurrentWeatherContext.Provider>
    )
}

export default CurrentWeatherContextProvider;