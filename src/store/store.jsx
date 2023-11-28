import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/products";
import categoriesReducer from "./reducers/categories"
import creatorsReducer from "./reducers/creators";
import cartsReducer from "./reducers/carts";
import statesReducer from "./reducers/states";

const store = configureStore({
	reducer: {
		products: productsReducer,
		categories: categoriesReducer,
		creators: creatorsReducer,
		carts: cartsReducer,
		states: statesReducer
	}
})

export default store;