import { createReducer } from "@reduxjs/toolkit"
import categories_actions from "../actions/categories"


const { create_category, read_categories, update_category, destroy_category } = categories_actions

const initial_state = {
    categories: []
}

const categoriesReducer = createReducer(
    initial_state,
    builder => builder.addCase(
        create_category.fulfilled,
        (state, action) => {
            let new_state = {
                ...state,
                categories: [action.payload, ...state.categories]
            }
            return new_state
        }
    ).addCase(
        read_categories.fulfilled,
        (state, action) => {
            let new_state = {
                ...state,
                categories: action.payload.categories,
            }
            return new_state
        }
    ).addCase(
        update_category.fulfilled,
        (state, action) => {
            let new_state = {
                ...state,
                categories: state.categories.map(each => {
                    if (each._id === action.payload._id) {
                        return action.payload
                    } else {
                        return { ...each };
                    }
                })
            }
            return new_state
        }
    ).addCase(
        destroy_category.fulfilled,
        (state, action) =>{
            let new_state= {
                ...state ,
                category: state.categories.filter(each=> each._id !== action.payload.delete)
            }
            return new_state
        }
    )

)
export default categoriesReducer