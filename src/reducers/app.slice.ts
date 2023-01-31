import { createSlice } from "@reduxjs/toolkit";

export interface AppSatate {}

export const initialState: Readonly<AppSatate> = {};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        dateSelected(){}
    }
});

export const {
    dateSelected
} = appSlice.actions;

const appReducer = appSlice.reducer;
export default appReducer;