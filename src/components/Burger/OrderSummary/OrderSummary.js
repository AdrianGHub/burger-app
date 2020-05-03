import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return ( 
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>:     {props.ingredients[igKey]}
            </li>);
        })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burder with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Proceed to checkout?</p> 
            <Button buttonType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button buttonType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;