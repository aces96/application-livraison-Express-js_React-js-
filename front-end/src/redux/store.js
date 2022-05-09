import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'
import mealReducer from './slices/addMeal'
import { composeWithDevTools } from 'redux-devtools-extension';


export default configureStore({
    reducer: {
        counterReducer,
        mealReducer
    }, 
    devTools: true
})