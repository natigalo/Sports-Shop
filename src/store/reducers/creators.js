import { createReducer } from "@reduxjs/toolkit";
import creatorsActions from "../actions/creators";

const { destroyCreator, updateCreator } = creatorsActions

const initialState = {
    creators: []
}

const creatorsReducer = createReducer(
    initialState,
    (builder) => builder.addCase(
        destroyCreator.fulfilled,
        (state, action) => {
            let newState = {
                ...state,
                creators: state.creators.filter(each =>
                    each._id !== action.payload.id_to_delete
                )
            }
            return newState
        }
    ).addCase(
        updateCreator.fulfilled,
        (state,action) => {
            let newState = {
                ...state,
                creators : state.creators.map(each => {
                    if(each._id===action.payload._id) {
                        return action.payload
                    } else {
                        return each
                    }    
                })
            }
            return newState
        }
    )
)

export default creatorsReducer;