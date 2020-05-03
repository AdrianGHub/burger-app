import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';
import classes from './OrderSummary.module.css';

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return ( 
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>:     <strong>{props.ingredients[igKey]}</strong>
            </li>);
        })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p><strong>Total Price: {props.price}</strong></p>
            <p>A delicious burder with the following ingredients: </p>
            <ul className={classes.IngredientSummary}>
                {ingredientSummary}
            </ul>
            <p>Proceed to checkout?</p> 
            <Button buttonType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button buttonType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;