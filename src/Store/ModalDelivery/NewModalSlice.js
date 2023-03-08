import { createSlice } from "@reduxjs/toolkit";


const newModalSlice = createSlice({
    name: 'newmodal',
    initialState:{
        isOpen: false,
    }, 
    reducers: {
        openNewModal: state =>{
            state.isOpen = true;
        },
        closeNewModal: state =>{
            state.isOpen = false;
        }

    }
})
export const { openNewModal, closeNewModal } = newModalSlice.actions;
export default newModalSlice.reducer;