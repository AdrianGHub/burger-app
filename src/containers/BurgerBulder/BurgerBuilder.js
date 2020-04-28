import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 1,
                bacon: 1,
                cheese: 1,
                meat: 3
            }
        } 
    }

    render() {
        return (
            <Aux>
               <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;