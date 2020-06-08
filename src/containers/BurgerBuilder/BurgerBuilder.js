import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import PropTypes from 'prop-types';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
	salad: 1.1,
	cheese: 0.5,
	meat: 0.7,
	bacon: 2.3,
};

class BurgerBuilder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ingredients: null,
			totalPrice: 1.5,
			purchasable: false,
			purchasing: false,
			loading: false,
			error: false
		};
	}

	componentDidMount () {
		axios.get('https://burger-app-adee6.firebaseio.com/ingredients.json')
		.then(response => {
			this.setState({ingredients: response.data});
		})
		.catch(error => {
			this.setState({error: true});
		});
	}

	updatedPurchaseState(ingredients) {
		const sum = Object.keys(ingredients)
			.map((igKey) => {
				return ingredients[igKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);
		this.setState({ purchasable: sum > 0 });
	}

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients,
		};
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({
			ingredients: updatedIngredients,
			totalPrice: newPrice,
		});
		this.updatedPurchaseState(updatedIngredients);
	};

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...this.state.ingredients,
		};
		updatedIngredients[type] = updatedCount;
		const priceSubtraction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceSubtraction;
		this.setState({
			ingredients: updatedIngredients,
			totalPrice: newPrice,
		});
		this.updatedPurchaseState(updatedIngredients);
	};

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
    };
    
    purchaseContinueHandler = () => {
		// alert("Successfully continued!");
		// this.setState({loading: true});
		// const order = {
		// 	ingredients: this.state.ingredients,
		// 	price: this.state.totalPrice,
		// 	customer: {
		// 		name: 'Drian Ko',
		// 		address: {
		// 			street: 'Ameryka 1',
		// 			zipCode: '81222',
		// 			country: 'Polska'
		// 		},
		// 		email: 'test@test.com'
		// 	},
		// 	deliveryMethod: 'fastcash'
		// };
		// axios.post('/orders.json', order)
		// 	.then(response => {
		// 		this.setState({loading: false, purchasing: false});
		// 	})
		// 	.catch(err => {
		// 		this.setState({loading: false, purchasing: false});
		// 	});
		this.props.history.push('/checkout');
    }

	render() {
		const disabledInfo = {
			...this.state.ingredients,
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		let orderSummary = null;
	
		let burger = this.state.error ? <p>Ingredients can't be loaded...</p> : <Spinner />; 

		if (this.state.ingredients) {
			burger = (
				<Aux>
					<Burger ingredients={this.state.ingredients} />
					<BuildControls
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					disabled={disabledInfo}
					price={this.state.totalPrice}
					purchasable={this.state.purchasable}
					ordered={this.purchaseHandler} />

				</Aux>
			);
			orderSummary = 	<OrderSummary 
				price={this.state.totalPrice.toFixed(2)}
				ingredients={this.state.ingredients}
				purchaseCancelled={this.purchaseCancelHandler} 
				purchaseContinued={this.purchaseContinueHandler} />;
		}

		if (this.state.loading) {
			orderSummary = <Spinner />;
		}

		return (
			<Aux>
				<Modal
					show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}
				>
					{orderSummary}
				</Modal>
				{burger}
			</Aux>
		);
	}
}

INGREDIENT_PRICES.propTypes = {
	price: PropTypes.number.isRequired
};

export default withErrorHandler(BurgerBuilder, axios);
