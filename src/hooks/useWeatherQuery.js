import { useCallback } from "react";
import api from "../axios/WeatherApiConfig";
import { simulatedCurrentWeather } from "../util/SimulatedApiData/simulatedWeatherData";
import { simulated3h5dForecastData } from "../util/SimulatedApiData/simulated3h5dForecastData";
import { useDispatch } from "react-redux";
import allActions from "../store/actions/allActions";
import { kindOfQuery } from "../store/reducers/weatherApiRequestReducer";

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

    const weatherApiActions = allActions.weatherApiActions;
    dispatch(weatherApiActions.sendRequest());
 
    try {
      //const result = await api.get(query);
      const result = await Promise.all([fakeGetApiCall(city), fakeGetApiForecastCall(city)]);

      dispatch(weatherApiActions.processResponse((result[0]).data, `${kindOfQuery.CURRENT_WEATHER}${city}`));
      dispatch(weatherApiActions.processResponse((result[1]).data, `${kindOfQuery.HOURS_DAYS_FORECAST}${city}`));
      dispatch(weatherApiActions.stopLoader());
    } catch (error) {
      console.log(error);
      dispatch(weatherApiActions.handleError(error));
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
        resolve({ data: simulatedCurrentWeather});
      }, 3000);
    });
  };

  const fakeGetApiForecastCall = (city) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: simulated3h5dForecastData});
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
