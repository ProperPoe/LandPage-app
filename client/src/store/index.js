import React from 'react'
import { configureStore, createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: "auth",
    initialState: {isLoggedIn: false},
    reducers: {
        login(state){
            state.isLoggedIn = true;
        },
        logout(state){
            localStorage.removeItem("userID")
            state.isLoggedIn = false;

        },
    }
});

export const authActions = authSlice.actions

export const store = configureStore({
    reducer: authSlice.reducer
})
