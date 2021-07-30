import { useReducer, useCallback, useEffect } from "react";
import api from "../axios/WeatherApiConfig";
import weatherRequestReducer from "../reducers/weatherRequestReducer";
import { initialState } from "../reducers/weatherRequestReducer";

const useCurrentWeather = () => {
  const [state, dispatch] = useReducer(weatherRequestReducer, initialState);

  const clear = useCallback(() => dispatch({ type: "CLEAR-ERROR" }), []);

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

  const sendRequestToGetCurrentWeatherAsync = useCallback(async (city) => {
    const query = `weather?q=${city}`;
    console.log(query);
    dispatch({ type: "SEND" });

    try {
      // const result = await api.get(query);
      const result = await fakeGetApiCall();
      dispatch({ type: "RESPONSE", responseData: result.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "ERROR", errorMessage: "Something went wrong!" });
    }
  }, []);

  const fakeGetApiCall = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: { x: "data" } });
      }, 3000);
    });
  };

  return {
    getCurrentWeatherPointer: sendRequestToGetCurrentWeatherAsync,
    isLoading: state.loading,
    error: state.error,
    data: state.data,
  };
};

export default useCurrentWeather;
