export const defaultState = {
  loading: false,
  error: null,
  data: {
    currentWeather: null,
    forecast5d3h: null,
  },
};

export const kindOfQuery = {
  CURRENT_WEATHER: "weather?q=",
  HOURS_DAYS_FORECAST: "forecast?q=",
};

const processResponseHandler = (state, data, query) => {
  const splitQuery = query.split("=")[0].concat("=");

  switch (splitQuery) {
    case kindOfQuery.CURRENT_WEATHER:
      return {
        ...state,
        data: { ...state.data, currentWeather: data },
      };
    case kindOfQuery.HOURS_DAYS_FORECAST:
      return {
        ...state,
        data: { ...state.data, forecast5d3h: data },
      };
    default:
      return state;
  }
};

const weatherApiRequestReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SEND_REQUEST":
      return { ...state, loading: true };
    case "PROCESS_RESPONSE":
      return processResponseHandler(state, action.responseData, action.query);
    case "STOP_LOADER":
      return { ...state, loading: false };
    case "HANDLE_ERROR":
      return {
        ...state,
        loading: false,
        error: action.errorMessage,
        forecastData: {},
      };
    case "CLEAR-ERROR":
      return {
        ...state,
        loading: true,
        error: null,
        data: { ...state.data, currentWeather: null, forecast5d3h: null },
      };
    default:
      return state;
  }
};

export default weatherApiRequestReducer;
