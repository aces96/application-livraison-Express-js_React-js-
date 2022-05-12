import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'
import mealReducer from './slices/addMeal'
import cartReducer from "./slices/cartSlice";
import modalReducer from './slices/modalSlice'


export default configureStore({
    reducer: {
        counterReducer,
        mealReducer,
        cartReducer,
        modalReducer
    }, 
    devTools: true
})