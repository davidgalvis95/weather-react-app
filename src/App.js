import './App.css';
import Navbar from './components/Navbar/Navbar'
import MainSearch from './components/MainSearch/MainSearch'
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import CurrentWeatherDetailed from "./components/CurrentWeather/CurrentWeatherDetailed";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <Router>
            <Navbar/>
            {/*<MainSearch/>*/}
            <CurrentWeather/>
            <CurrentWeatherDetailed/>
        </Router>
    );
}

export default App;
