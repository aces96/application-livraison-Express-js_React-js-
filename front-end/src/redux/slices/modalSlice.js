import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    open: false
}


export const modalSlice = createSlice({
    name: 'open',
    initialState,
    reducers: {
        update: (state, {payload})=>{
            state.open = payload
        },
    }
}) 


export const {update} = modalSlice.actions;
export default modalSlice.reducer
