import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counter from "./counter";
import user from "./user";

const reducer = combineReducers({
  counterStore: counter,
  userStore: user,
});

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
