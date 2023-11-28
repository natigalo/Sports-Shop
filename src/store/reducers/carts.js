import { createReducer } from "@reduxjs/toolkit";
import cartsAcctions from "../actions/carts";

const { destroyProductCart, updateProductCart } = cartsAcctions;

const initialState = { carts: [] };

const cartsReducer = createReducer(
    initialState, (builder) => builder.addCase(destroyProductCart.fulfilled, (state, action) => {
        let newState = {
            ...state,
            carts: state.carts.filter(each => each._id !== action.payload.id_destroy)
        }
        return newState;
    }).addCase(updateProductCart.fulfilled, (state, action) => {
        let newState = {
            ...state,
            carts: state.carts.map(each => {
                if (each._id === action.payload._id) {
                    return action.payload;
                } else {
                    return each;
                }
            })
        }
        return newState;
    })
)

export default cartsReducer;