import { createSlice } from "@reduxjs/toolkit"

interface HomeState{
    value: number,
}

const initialState: HomeState = {
    value: 0,
}

const HomeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        incrementHome: (state) => {
            state.value += 1
        },
        decrementHome: (state) => {
            state.value -= 1
        }
    }
})

export default HomeSlice.reducer;

export const { incrementHome, decrementHome } = HomeSlice.actions;