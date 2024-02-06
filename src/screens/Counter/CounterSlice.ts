import { createSlice } from "@reduxjs/toolkit"

interface CounterState{
    values:number
}

const initialState: CounterState = {
    values: 0
}

const CounterSlice = createSlice({
    name: "counters",
    initialState,
    reducers: {
        increment: (state) => {
            state.values += 1
        },
        decrement: (state) => {
            state.values -= 1
        }
    }
})

export default CounterSlice.reducer;

export const { increment, decrement } = CounterSlice.actions;