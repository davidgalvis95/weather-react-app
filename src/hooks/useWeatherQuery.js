import { useCallback } from "react";
import api from "../axios/WeatherApiConfig";
import { simulatedCurrentWeather } from "../util/SimulatedApiData/simulatedWeatherData";
import { simulated3h5dForecastData } from "../util/SimulatedApiData/simulated3h5dForecastData";
import { useDispatch } from "react-redux";
import allActions from "../store/actions/allActions";

export const kindOfQuery = {
  CURRENT_WEATHER: 'weather?q=',
  HOURS_DAYS_FORECAST: 'forecast?q='
}

const useCurrentWeather = () => {
  // const [state, dispatch] = useReducer(weatherRequestReducer, initialState);
  const dispatch = useDispatch();


  //TODO make the implementation for the clear and the error handling
  // eslint-disable-next-line
  const clearError = useCallback(() => dispatch(allActions.weatherApiActions.clearError()), []);
  // const clear = useCallback(() => dispatch({ type: "CLEAR-ERROR" }), []);

  //   const sendRequestToGetCurrentWeather = useCallback((city) => {
  //     const query = `weather?q=${city}`;
  //     console.log(query);
  //     dispatch({ type: "SEND" });

  //     // api.get(query)
  //     fakeGetApiCall()
  //       .then((res) => {
  //         // console.log(res)
  //         // console.log(JSON.stringify(res.data))
  //         const responseData = res.data;
  //         // console.log(responseData.base);
  //         dispatch({ type: "RESPONSE", responseData: responseData });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         dispatch({ type: "ERROR", errorMessage: "Something went wrong!" });
  //       });
  //   }, []);

  const sendRequestForWeather = useCallback(async (city) => {
    const forecastQuery = `someCurrentQuery${city}`;
    const currentQuery = `someForecastQuery${city}`;
    dispatch(allActions.weatherApiActions.sendRequest());
 
    try {
      //const result = await api.get(query);
      const result = await Promise.all([fakeGetApiCall(city), fakeGetApiForecastCall(city)]);
      dispatch(allActions.weatherApiActions.processResponse(result.data, currentQuery));
      dispatch(allActions.weatherApiActions.processResponse(result.data, forecastQuery));
    } catch (error) {
      console.log(error);
      dispatch(allActions.weatherApiActions.handleError(error));
    }
  // eslint-disable-next-line
  }, []);


  // const sendRequestToGetCurrentWeatherAsync = useCallback(async (city, queryType) => {
  //   const query = `${queryType}${city}`;
  //   dispatch({ type: "SEND" });

  //   try {
  //     //const result = await api.get(query);
  //     const result = await fakeGetApiCall(city);
  //     dispatch({ type: "RESPONSE", responseData: result.data });
  //   } catch (error) {
  //     console.log(error);
  //     dispatch({ type: "ERROR", errorMessage: "Something went wrong!" });
  //   }
  // }, []);

  // const getWeatherForecast3hrs5daysAsync = useCallback(async (city, queryType) => {
  //   const query = `${queryType}${city}`;
  //   dispatch({ type: "SEND" });

  //   try {
  //     //const result = await api.get(query);
  //     const result = await fakeGetForecast53ApiCall(city);
  //     dispatch({ type: "RESPONSE", responseData: result.data });
  //   } catch (error) {
  //     console.log(error);
  //     dispatch({ type: "ERROR", errorMessage: "Something went wrong!" });
  //   }
  // }, []);

  const fakeGetApiCall = (city) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: {...simulatedCurrentWeather}});
      }, 3000);
    });
  };

  const fakeGetApiForecastCall = (city) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: {...simulated3h5dForecastData}});
      }, 3000);
    });
  };

  return {
    fetchWeatherDataPointer: sendRequestForWeather,
    clearErrorPointer: clearError
    // isLoading: loading,
    // error: error,
    // data: data,
  };
};

export default useCurrentWeather;
