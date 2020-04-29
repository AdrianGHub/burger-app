import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 1.1,
    cheese: 0.5,
    meat: 0.7,
    bacon: 2.3
}

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 1.5 
        }
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;   
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ingredients: updatedIngredients ,totalPrice: newPrice});
    }

    removeIngredientHandler = (type) => {

    }

    render() {
        return (
            <Aux>
               <Burger ingredients={this.state.ingredients}/>
               <BuildControls
                    ingredientAdded={this.addIngredientHandler} />
            </Aux>
        )
    }
}

export default BurgerBuilder;