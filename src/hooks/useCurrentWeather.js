import {useReducer, useCallback, useState, useEffect} from 'react';
import api from '../utils/WeatherApiConfig'
import weatherRequestReducer from "../reducers/weatherRequestReducer";
import {initialState} from "../reducers/weatherRequestReducer";




const useCurrentWeather = () => {

    const [weatherRequestState, dispatchWeatherRequestActions] = useReducer(weatherRequestReducer, initialState);

    const clear = useCallback(() => dispatchWeatherRequestActions({type: 'CLEAR-ERROR'}), []);

    // const sendRequest = useCallback((url, method, body, reqExtra, reqIdentifier) => {
    const sendRequestToGetCurrentWeather = useCallback((city) => {
        dispatchWeatherRequestActions({type: 'SEND'});
        const query = `weather?q=${city}`;
        console.log(query);
        api.get(query)
            .then(res => {
                // console.log(res)
                // console.log(JSON.stringify(res.data))
                const responseData = res.data;
                // console.log(responseData.base);
                dispatchWeatherRequestActions({type: 'RESPONSE', responseData: responseData});
            })
            .catch(err => {
                console.log(err);
                dispatchWeatherRequestActions({type: 'ERROR', errorMessage: 'Something went wrong!'});
            });
    }, []);


    return {
        getCurrentWeatherPointer: sendRequestToGetCurrentWeather,
        isLoading: weatherRequestState.loading,
        error: weatherRequestState.error,
        data: weatherRequestState.data,
    }
}

export default useCurrentWeather;