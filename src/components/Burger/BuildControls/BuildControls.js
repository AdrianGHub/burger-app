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
            {controls.map(ctrl => (
                <BuildControl 
                key={ctrl.label} 
                ingredientLabel={ctrl.label}
                addClick={() => props.ingredientAdded(ctrl.type)}
                removeClick={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}/>
            ))}
        </div>
    );
};

export default buildControls;