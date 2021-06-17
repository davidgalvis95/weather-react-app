import './App.css';
import Navbar from './components/Navbar/Navbar'
import MainSearch from './components/MainSearch/MainSearch'
// import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
// // import CurrentWeatherDetailed from "./components/CurrentWeather/CurrentWeatherDetailed";
import {BrowserRouter as Router} from "react-router-dom";
import {useCallback, useEffect, useReducer, useState} from "react";
// import weatherRequestReducer from "./reducers/weatherRequestReducer";
import {initialState} from "./hooks/useCurrentWeather";
import CurrentWeatherParent from "./hoc/CurrentWeatherParent";
import CurrentWeatherContextProvider from './context/current-weather-context'

function App() {

    const [city, setCity] = useState('');
    const [searchBegan, setSearchBegan] = useState(false);

    // useEffect(() => {
    //     setCity('london')
    // }, [city]);

    // const beginSearchHandler = useCallback( (city) => {
    //     console.log(city)
    //     setSearchBegan(true);
    // }, []);

    const beginSearchHandler = (city) => {
        setCity(city)
        setSearchBegan(true);
    };

    let component;
    if(!searchBegan){
        component = <MainSearch beginSearch={beginSearchHandler}/>
    }else{
        component = (
            <CurrentWeatherContextProvider city={city}>
                <CurrentWeatherParent/>
            </CurrentWeatherContextProvider>
        )
    }

    return (
        <Router>
            <Navbar/>
            {component}
        </Router>
    );
}

export default App;
