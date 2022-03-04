import React from 'react';
import classes from './CustomChartButton.module.css'

const CustomChartButton = (props) => {
    return (
        <div className={classes.buttonWrapper}>
            <div className={classes.squareColor}/>
            <div className={classes.text}>
                Temperature
            </div>
        </div>
    )
}

export default CustomChartButton;