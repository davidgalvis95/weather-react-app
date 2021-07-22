import React from 'react';
import classes from "./Search.module.css";

const Search = () => {
    return (
        <div className={classes.mainSearchDiv}>
            <div className={classes.searchBox}>
                <input className={classes.searchText} placeholder="Search new location"/>
                <div className={classes.loaderWrapper}>
                    {/* <div className={classes.loader}/> */}
                </div>
            </div>
        </div>
    )
}

export default Search;