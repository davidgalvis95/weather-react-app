import './App.css';
import Navbar from './components/Navbar/Navbar'
import MainSearch from './components/MainSearch/MainSearch'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useState} from "react";
import CurrentWeatherParent from "./hoc/CurrentWeatherParent";
import CurrentWeatherContextProvider from './context/current-weather-context'

function App() {

    const [city, setCity] = useState('');
    const [searchBegan, setSearchBegan] = useState(false);

    const beginSearchHandler = (city) => {
        setCity(city)
        setSearchBegan(true);
    };

    return (
        <Router>
            <div>
            <Navbar/>
            {searchBegan ? null : <MainSearch beginSearch={beginSearchHandler}/>}
            <Switch>
                <Route path='/current-weather' render={() => {
                  console.log(city);
                  return (
                    <CurrentWeatherContextProvider city={city}>
                        <CurrentWeatherParent/>
                    </CurrentWeatherContextProvider>
                )}}/>
            </Switch>
            </div>
        </Router>
    );
}

export default App;
