import React from 'react';
import classes from './MainSearch.module.css'
import {RiSearchLine} from 'react-icons/ri';

const mainSearch = () => {
    return (
        <div className={classes.mainSearchDiv}>
            <div className={classes.searchBox}>
                <input className={classes.searchText} type="text" name="search-bar" placeholder="Search here"/>
                <div className={classes.searchBtn}>
                    <RiSearchLine/>
                </div>
            </div>
        </div>
    )
}

export default mainSearch;