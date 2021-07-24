import {useReducer, useCallback, useState, useEffect} from 'react';
import api from '../utils/WeatherApiConfig'
import weatherRequestReducer from "../reducers/weatherRequestReducer";
import {initialState} from "../reducers/weatherRequestReducer";

const useCurrentWeather = () => {

    const [weatherRequestState, dispatchWeatherRequestActions] = useReducer(weatherRequestReducer, initialState);

    //TODO POST THIS QUESTION IN STACKOVERFLOW
    useEffect(() => {
        console.log(weatherRequestState.loading);
    }, [weatherRequestState.loading]);

    const clear = useCallback(() => dispatchWeatherRequestActions({type: 'CLEAR-ERROR'}), []);

    const initializeLoading = useCallback(() => {
        dispatchWeatherRequestActions({type: 'SEND'});
        console.log(weatherRequestState);
    },[]);

    const sendRequestToGetCurrentWeather = useCallback((city) => {
        const query = `weather?q=${city}`;
        console.log(query);
        //This is for testing purposes only
        dispatchWeatherRequestActions({type: 'RESPONSE', responseData: {someData:true}});

        // api.get(query)
        //     .then(res => {
        //         // console.log(res)
        //         // console.log(JSON.stringify(res.data))
        //         const responseData = res.data;
        //         // console.log(responseData.base);
        //         dispatchWeatherRequestActions({type: 'RESPONSE', responseData: responseData});
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         dispatchWeatherRequestActions({type: 'ERROR', errorMessage: 'Something went wrong!'});
        //     });
    }, []);




    return {
        initializeLoadingPointer: initializeLoading,
        getCurrentWeatherPointer: sendRequestToGetCurrentWeather,
        isLoading: weatherRequestState.loading,
        error: weatherRequestState.error,
        data: weatherRequestState.data,
    }
}

export default useCurrentWeather;