import './App.css';
import Navbar from './components/Navbar/Navbar'
import MainSearch from './components/MainSearch/MainSearch'
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {useState, useEffect} from "react";
import CurrentWeatherParent from "./hoc/CurrentWeatherParent";
import CurrentWeatherContextProvider from './context/current-weather-context';
import NotFound from './components/NotFound/NotFound';

function App() {

    const [city, setCity] = useState('');
    const [searchBegan, setSearchBegan] = useState(false);
    const [queryFromMainSearch, setQueryFromMainSearch] = useState(false);

    useEffect(() => {
        setQueryFromMainSearch(false);
      }, [])

    const beginSearchHandler = (city) => {
        setCity(city)
        setSearchBegan(true);
        setQueryFromMainSearch(true);
    };

    //Fix the backwards navigation so that when given into the back button, this one renders the main search component
    return (
        <Router>
            <div>
            <Navbar/>
            {searchBegan || (searchBegan && city === '') ? null : <MainSearch beginSearch={beginSearchHandler}/>}
            <Switch>
                <Route path='/not-found' component={NotFound}/>
                <Route path='/current-weather' render={() => {
                    if(!searchBegan && city === ''){
                        return <Redirect to="/" />;
                    }else{
                        return (
                            <CurrentWeatherContextProvider city={city} searchBegan={searchBegan} queryFromMainSearch={queryFromMainSearch}>
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
