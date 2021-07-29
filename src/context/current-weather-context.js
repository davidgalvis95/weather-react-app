import { useState, createContext, useEffect } from "react";
import useCurrentWeather from "../hooks/useCurrentWeather";
import { initialState } from "../reducers/weatherRequestReducer";
import { useHistory } from "react-router";

export const CurrentWeatherContext = createContext(initialState);

const CurrentWeatherContextProvider = (props) => {
  const {
    initializeLoadingPointer,
    getCurrentWeatherPointer,
    isLoading,
    error,
    data,
  } = useCurrentWeather();
  const [state, setState] = useState(initialState);
  const { city, searchBegan, queryFromMainSearch } = props;
  const [queryFromMain, setQueryFromMain] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setQueryFromMain(queryFromMainSearch);
  }, []);

  useEffect(() => {
    if (!searchBegan && city === "") {
      history.replace("/");
    }

    if (city !== "") {
      getCurrentWeatherPointer(city);
    }
  }, [city, initializeLoadingPointer, getCurrentWeatherPointer, searchBegan]);

  useEffect(() => {
    const currentState = {
      error: error,
      data: data,
      isLoading: isLoading,
    };
    setState(currentState);
  }, [isLoading, data, error]);

  const queryFromMainToggleHandler = () => {
    setQueryFromMain(false);
  };

  return (
    <CurrentWeatherContext.Provider
      value={{
        getWeatherFunction: getCurrentWeatherPointer,
        isLoading: state.isLoading,
        error: state.error,
        data: state.data,
        queryFromMain: queryFromMain,
        queryFromMainToggleHandler: queryFromMainToggleHandler
      }}
    >
      {props.children}
    </CurrentWeatherContext.Provider>
  );
};

export default CurrentWeatherContextProvider;
