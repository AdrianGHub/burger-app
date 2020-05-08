import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';
import classes from './OrderSummary.module.css';

class OrderSummary extends Component {
    componentDidUpdate() {
        console.log('[OrderSummary] DidUpdate')
    }


    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return ( 
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>:     <strong>{this.props.ingredients[igKey]}</strong>
            </li>);
        })


        return (
            <Aux>
            <h3>Your Order</h3>
            <p><strong>Total Price: {this.props.price}</strong></p>
            <p>A delicious burder with the following ingredients: </p>
            <ul className={classes.IngredientSummary}>
                {ingredientSummary}
            </ul>
            <p>Proceed to checkout?</p> 
            <Button buttonType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button buttonType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        )
    }
};

export default OrderSummary;