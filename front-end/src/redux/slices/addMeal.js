import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    meal: []
}



export const AddMeal = createSlice({
    name: 'addMeal',
    initialState,
    reducers: {
        addMeal: (state, action)=>{
            state.meal.push(action.payload)
        },

        deleteMeal: (state, action)=>{
            state.meal.filter((item)=> item.name !== action.payload.name)
        }
    }
}) 