import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSilce = createSlice({
  name: "counter",
  initialState,
  reducers: {
    resetCount: () => initialState,
    upCount: (state) => ({ ...state, count: state.count + 1 }),
    downCount: (state) => ({ ...state, count: state.count - 1 }),
  },
});

export const { upCount, downCount, resetCount } = counterSilce.actions;

export default counterSilce.reducer;
