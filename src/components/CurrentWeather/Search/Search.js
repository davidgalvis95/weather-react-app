import React, { useState } from 'react';
import classes from "./Search.module.css";
import { CurrentWeatherContext } from '../../../context/currentWeatherContext';
import { useContext } from 'react';

const Search = () => {

    const {getWeatherFunction, isLoading, searchBegan, initialReqHandler} = useContext(CurrentWeatherContext);
    const [citySearch, setCitySearch] = useState('');

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            initialReqHandler();
            getWeatherFunction(event.target.value);
        }
    }
  };

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
          {isLoading && shouldLoad ? <div className={classes.loader} /> : null}
        </div>
      </div>
    </div>
    //     )}}
    // </CurrentWeatherContext.Consumer>
  );
};

export default Search;
