import { createReducer } from "@reduxjs/toolkit";
import statesAction from "../actions/states";

const { allStates } = statesAction;

const initialState = {
    states: []
}

const statesReducer = createReducer(initialState, (builder) => builder.addCase(
    allStates.fulfilled, (states, action) => {
        let newState = {
            ...states,
            states: action.payload.states
        }
        return newState;
    }
))

export default statesReducer;