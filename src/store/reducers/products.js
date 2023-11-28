import { createReducer } from "@reduxjs/toolkit";
import productsActions from "../actions/products";

const { save_name, save_checks, destroyProduct, updateProduct } =
  productsActions;

const initialState = {
  name: "",
  checks: [],
  products: [],
};

const productsReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(save_name, (state, action) => {
      const newState = { ...state, name: action.payload?.name };
      return newState;
    })
    .addCase(save_checks, (state, action) => {
      const newState = { ...state, checks: action.payload?.checks };
      return newState;
    })
    .addCase(destroyProduct.fulfilled, (state, action) => {
      let newState = {
        ...state,
        products: state.products.filter(
          (each) => each._id !== action.payload.id_to_delete
        ),
      };
      return newState;
    })
    .addCase(updateProduct.fulfilled, (state, action) => {
      let newState = {
        ...state,
        products: state.products.map((each) => {
          if (each._id === action.payload._id) {
            return action.payload;
          } else {
            return each;
          }
        }),
      };
      return newState;
    })
);

export default productsReducer;
