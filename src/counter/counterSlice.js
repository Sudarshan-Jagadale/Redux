import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "counter",
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    descrement: (state) => {
      state.value -= 1;
    },
    resetCounter: (state) => {
      state.value = 0;
    },
    addAmount: (state, action) => {
      console.log(action);
      state.value += action.payload;
    }
  }
});

export const { increment, descrement, addAmount, resetCounter } = slice.actions;
export const selectCount = (state) => state.counter.value;
export default slice.reducer;
