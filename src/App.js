import './App.css';
import Navbar from './components/Navbar/Navbar'
import MainSearch from './components/MainSearch/MainSearch'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useState, useEffect} from "react";
import CurrentWeatherParent from "./hoc/CurrentWeatherParent";
import CurrentWeatherContextProvider from './context/current-weather-context';
import NotFound from './components/NotFound/NotFound';

function App() {

    const [city, setCity] = useState('');
    const [searchBegan, setSearchBegan] = useState(false);

    const beginSearchHandler = (city) => {
        setCity(city)
        setSearchBegan(true);
    };

    // TODO ensure that the search component is not loaded if the search has began
    // TODO Extract the content except the routes of this component in a separate component
    return (
        <Router>
            <div>
            <Navbar/>
            {searchBegan || (searchBegan && city === '') ? null : <MainSearch beginSearch={beginSearchHandler}/>}
            <Switch>
                <Route path='/not-found' component={NotFound}/>
                <Route path='/current-weather' render={() => {
                    if(!searchBegan && city === ''){
                        return null;
                    }else{
                        return (
                            <CurrentWeatherContextProvider city={city} searchBegan={searchBegan}>
                                <CurrentWeatherParent/>
                            </CurrentWeatherContextProvider>
                        );
                    }
                }}/>
                {/* <Route component={NotFound}/> */}
            </Switch>
            </div>
        </Router>
    );
}

export default App;
