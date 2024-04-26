import { createSlice } from "@reduxjs/toolkit";

const initialState={open:true}


const modalSlice = createSlice({
    name:'modalSlice',
    initialState:initialState,
    reducers:{
        setOpen:(state,action)=>{
            state.open = action.payload;
            return state;
        }
    }
})

export const {setOpen} = modalSlice.actions;
export default modalSlice.reducer