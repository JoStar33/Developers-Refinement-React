import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counter from "./counter";

const reducers = combineReducers({
  counterStore: counter,
});

export const store = configureStore({
  reducer: reducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
