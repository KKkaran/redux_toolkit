import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../screens/Counter/CounterSlice";
import HomeSlice from "../screens/Home/HomeSlice";




export const store = configureStore({
    reducer: {
        counters: CounterSlice,
        homeCounter: HomeSlice
    }
})

export type RootState = ReturnType<typeof store.getState> //access to all the state info in component

export type AppDispatch = typeof store.dispatch; //comes in clutch for async tasks