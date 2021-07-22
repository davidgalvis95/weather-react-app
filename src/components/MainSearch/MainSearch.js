import React, {useEffect, useRef, useState} from 'react';
import classes from './MainSearch.module.css'
import {RiSearchLine} from 'react-icons/ri';
import { useHistory } from 'react-router';

const MainSearch = (props) => {

    const {beginSearch} = props;
    const searchCurrentWeather = useRef();
    const [enteredSearch, setEnteredSearch] = useState('');
    const history = useHistory();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCurrentWeather.current !== null) {
                if (enteredSearch === searchCurrentWeather.current.value && enteredSearch.length > 0) {
                    beginSearch(enteredSearch);
                    history.push('/current-weather');
                }
            }
        }, 500)
    }, [enteredSearch, searchCurrentWeather, beginSearch])


    const startSearchHandler = () => {
        // beginSearch(enteredSearch);
    }


    return (
        <div className={classes.mainSearchDiv}>
            <div className={classes.searchBox}>
                <input
                    ref={searchCurrentWeather}
                    className={classes.searchText}
                    type="text" name="search-bar"
                    placeholder="Search here"
                    onChange={event => {
                        setEnteredSearch(event.target.value)
                    }}
                    value={enteredSearch}
                />
                <div className={classes.searchBtn} onClick={startSearchHandler}>
                    <RiSearchLine/>
                </div>
            </div>
        </div>
    )
}

export default MainSearch;