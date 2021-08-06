import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainSearch from "./components/MainSearch/MainSearch";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState, useEffect } from "react";
import CurrentWeatherParent from "./hoc/CurrentWeatherParent";
import CurrentWeatherContextProvider from "./context/currentWeatherContext";
import NotFound from "./components/NotFound/NotFound";
import useCurrentWeather from "./hooks/useCurrentWeather"

function App() {
  const [city, setCity] = useState("");
  const [searchBegan, setSearchBegan] = useState(false);
  const [initialReq, setInitialReq] = useState(false);
  const {isLoading} = useCurrentWeather()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(isLoading);
    setLoading(isLoading);
  }, [isLoading])

  const beginSearchHandler = (city) => {
    setCity(city);
    setSearchBegan(true);
    // setInitialReq(true);
  };

  //TODO make this to be handled by only one handler
  //TODO why is this component being rendered before
  const initialReqHandler = () => setInitialReq(false);
  const initialReqHandler1 = () => setInitialReq(true);

  return (
    <Router>
      <div>
        <Navbar />
        {searchBegan || (searchBegan && city === "") ? null : (
          <MainSearch 
          beginSearch={beginSearchHandler}
          initialReqHandler1={initialReqHandler1}
          />
        )}
        <Switch>
          <Route path="/not-found" component={NotFound} />
          <Route
            path="/current-weather"
            render={() => {
              if (!searchBegan && city === "") {
                return <Redirect to="/" />;
              } else {
                return (
                  <CurrentWeatherContextProvider
                    city={city}
                    searchBegan={searchBegan}
                    initialReq={initialReq}
                    initialReqHandler={initialReqHandler}
                  >
                    <CurrentWeatherParent />
                  </CurrentWeatherContextProvider>
                );
              }
            }}
          />
          {/* <Route component={NotFound}/> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
