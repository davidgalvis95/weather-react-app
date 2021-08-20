import React, {useEffect, useRef, useState} from 'react';
import classes from './MainSearch.module.css'
import { RiSearchLine } from 'react-icons/ri';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import allActions from '../../store/actions/allActions';

const MainSearch = () => {

    const searchCurrentWeather = useRef();
    const [enteredSearch, setEnteredSearch] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            if (searchCurrentWeather.current !== null) {
                if (enteredSearch === searchCurrentWeather.current.value && enteredSearch.length > 0) {
                    dispatch(allActions.searchStatusActions.sendFirstRequest(enteredSearch));
                    history.push('/current-weather');
                }
            }
        }, 1000);
    }, [enteredSearch, searchCurrentWeather])


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
                <div className={classes.searchBtn}>
                    <RiSearchLine/>
                </div>
            </div>
        </div>
    )
}

export default MainSearch;