import React, { useState, useEffect } from 'react';
import classes from "./Search.module.css";
import { CurrentWeatherContext } from '../../../context/current-weather-context';
import { useContext } from 'react';

const Search = () => {

    const {initializeLoading, getWeatherFunction, isLoading} = useContext(CurrentWeatherContext);
    const [citySearch, setCitySearch] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {console.log(isLoading)},[isLoading])

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            initializeLoading();
            setLoaded(isLoading);
            console.log(isLoading);
            // getWeatherFunction(event.target.value);
            setLoaded(isLoading);
            console.log(isLoading);
        }
    }

    const handleChange = (event) => setCitySearch(event.target.value);

    return (
        // <CurrentWeatherContext.Consumer>
            // {({getWeatherFunction, isLoading}) => {
                <div className={classes.mainSearchDiv}>
                    <div className={classes.searchBox}>
                        <input 
                            className={classes.searchText} 
                            placeholder="Search new location" 
                            onKeyPress={(event) => handleKeyPress(event)}
                            onChange={handleChange}
                            value={citySearch}
                        />
                        <div className={classes.loaderWrapper}>
                            {isLoading? <div className={classes.loader}/>: null}
                        </div>
                    </div>
                </div>
        //     )}}
        // </CurrentWeatherContext.Consumer>
    )
}

export default Search;