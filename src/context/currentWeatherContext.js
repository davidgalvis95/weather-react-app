import { useState, createContext, useEffect } from "react";
import useCurrentWeather from "../hooks/useWeatherQuery";
import { initialState } from "../store/reducers/weatherRequestReducer";
import { useHistory } from "react-router";
import { kindOfQuery } from "../hooks/useWeatherQuery";


export const CurrentWeatherContext = createContext(initialState);

const CurrentWeatherContextProvider = props => {
    const {initializeLoadingPointer, fetchWeatherDataPointer: getCurrentWeatherPointer, isLoading, error, data} = useCurrentWeather();
    const [state, setState] = useState(initialState);
    const {city, searchBegan, initialReq, initialReqHandler} = props;
    const history = useHistory();

    useEffect(() => {
        if(!searchBegan && city === '') {
            history.replace('/');
        }

        if (city !== '') {
            getCurrentWeatherPointer(city, kindOfQuery.CURRENT_WEATHER);
        }
    }, [city, initializeLoadingPointer, getCurrentWeatherPointer, searchBegan])


    useEffect(() => {
        const currentState = {
            error: error,
            data: data,
            isLoading: isLoading
        }
        setState(currentState);
    }, [isLoading, data, error]);

    return (
        <CurrentWeatherContext.Provider value={{
            getWeatherFunction: getCurrentWeatherPointer,
            isLoading: state.isLoading,
            error: state.error,
            data: state.data,
            searchBegan: searchBegan,
            initialReqHandler: initialReqHandler,
            initialReq: initialReq
        }}>
            {props.children}
        </CurrentWeatherContext.Provider>
    )
}

export default CurrentWeatherContextProvider;
