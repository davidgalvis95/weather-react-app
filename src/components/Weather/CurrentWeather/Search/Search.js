import React, { useState } from "react";
import classes from "./Search.module.css";
import allActions from "../../../../store/actions/allActions";
import useWeatherQuery from "../../../../hooks/useWeatherQuery";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Search = () => {
  const searchState = useSelector((state) => state.searchState);
  const apiDataState = useSelector((state) => state.weatherApi);
  const { fetchWeatherDataPointer } = useWeatherQuery();
  const dispatch = useDispatch();
  const [citySearch, setCitySearch] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch(
        allActions.searchStatusActions.sendAdditionalRequests(
          event.target.value
        )
      );
      fetchWeatherDataPointer(event.target.value);
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
          {apiDataState.loading && !searchState.initialRequest ? (
            <div className={classes.loader} />
          ) : null}
        </div>
      </div>
    </div>
    //     )}}
    // </CurrentWeatherContext.Consumer>
  );
};

export default Search;
