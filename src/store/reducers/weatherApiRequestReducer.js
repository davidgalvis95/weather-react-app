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
  switch (query) {
    case kindOfQuery.CURRENT_WEATHER:
      return {
        ...state,
        loading: true,
        error: null,
        data: { ...state.data, currentWeather: data },
      };
    case kindOfQuery.HOURS_DAYS_FORECAST:
      return {
        ...state,
        loading: true,
        error: null,
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
      return defaultState;
  }
};

export default weatherApiRequestReducer;
