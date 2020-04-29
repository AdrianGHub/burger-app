import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.ingredientLabel}</div>
            <button className={classes.Less}>Less</button>
            <button onClick={props.addClick} className={classes.More}>More</button>
        </div>
    );
};

export default buildControl;