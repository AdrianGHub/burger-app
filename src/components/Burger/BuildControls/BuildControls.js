import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' }
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl 
                key={ctrl.label} 
                ingredientLabel={ctrl.label}
                addClick={() => props.ingredientAdded(ctrl.type)}
                removeClick={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}/>
            ))}
            <button 
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}> ORDER NOW</button>
        </div>
    );
};

export default buildControls;