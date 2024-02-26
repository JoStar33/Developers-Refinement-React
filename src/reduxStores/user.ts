import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface User {
  name: string;
  age: number;
  married: boolean;
}

interface UserState {
  user: User;
  userPhoneNumberBag: string[];
}

const initialState: UserState = {
  user: {
    name: "",
    age: 0,
    married: false,
  },
  userPhoneNumberBag: [],
};

const userSilce = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserState: (state, action: PayloadAction<User>) => ({
      ...state,
      user: action.payload,
    }),
    addPhoneNumber: (state, action: PayloadAction<string>) => ({
      ...state,
      userPhoneNumberBag: [...state.userPhoneNumberBag, action.payload],
    }),
  },
});

export const userAction = userSilce.actions;

export default userSilce.reducer;
