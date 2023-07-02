import React, { Reducer, useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Action, UserInfo } from "../types/join";
import { UserInfoStatus } from "../constants/join";
import JoinPage from "./join/JoinPage";
import NamePage from "./join/NamePage";
import AgePage from "./join/AgePage";
import PhoneNumberPage from "./join/PhoneNumberPage";
import EmailAddressPage from "./join/EmailAddressPage";
import CompletePage from "./join/CompletePage";

const userInfoReducer = (state: UserInfo, action: Action): UserInfo => {
  switch (action.type) {
    case UserInfoStatus.SET_NAME:
      if (typeof action.value === "number")
        return state;
      return {...state, name: action.value};
    case UserInfoStatus.SET_AGE:
      if (typeof action.value === "string")
        return state;
      return {...state, age: action.value};
    case UserInfoStatus.SET_PHONE_NUMBER:
      if (typeof action.value === "number")
        return state;
      return {...state, phoneNumber: action.value};
    case UserInfoStatus.SET_EMAIL_ADDRESS:
      if (typeof action.value === "number")
        return state;
      return {...state, emailAddress: action.value};
    default:
      return state;
  }
}

const MainPage = () => {
  const initialState = { 
    name: "",
    age: 0,
    phoneNumber: "",
    emailAddress: ""
  };
  const [state, dispatch] = useReducer<Reducer<UserInfo, Action>>(userInfoReducer, initialState);
  return (
    <div>
      <Routes>
        <Route path="/" element={<JoinPage />}/>
        <Route path="/name" element={<NamePage dispatch={dispatch} userInfo={state} />} />
        <Route path="/age" element={<AgePage dispatch={dispatch} userInfo={state} />} />
        <Route path="/phone-number" element={<PhoneNumberPage dispatch={dispatch} userInfo={state} />} />
        <Route path="/email-address" element={<EmailAddressPage dispatch={dispatch} userInfo={state} />} />
        <Route path="/complete" element={<CompletePage userInfo={state}/>}/>
      </Routes>
    </div>
  );
};

export default MainPage;