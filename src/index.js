import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./store/reducers/rootReducer";

// import weatherRequestReducer from "./reducers/weatherRequestReducer";
import { BrowserRouter } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'

// const reducers = combineReducers({
//     weatherShortForecast: weather3hours5daysForecastReducer,
// })

// const composeEnhancers =
//   (process.env.NODE_ENV === "development"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null) || compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorker.unregister();
