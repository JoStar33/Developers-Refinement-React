import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  donation: 12,
};

const counterSilce = createSlice({
  name: "counter",
  initialState,
  reducers: {
    resetCount: () => initialState,
    upCount: (state) => ({ ...state, count: state.count + 1 }),
    downCount: (state) => ({ ...state, count: state.count - 1 }),
    setDonation: (state, action: PayloadAction<number>) => ({
      ...state,
      donation: action.payload,
    }),
  },
});

export const counterAction = counterSilce.actions;

export default counterSilce.reducer;
