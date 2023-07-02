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
  /*
  전역상태관리를 사용하지않고 회원가입 절처를 이루는 화면을 구현해봤습니다.
  MainPage에 회원이라는 객체를 관리하게 만듭니다. 이때, 회원이라는 객체가 가지는 각각의 값을 useState로 따로 관리하거나 회원이라는 객체를 useState로 관리하게 된다면, 
  지속된 상태수정 관련 코드를 작성해야합니다. 이는 무척 비효율적인 관리로, 객체의 변경이 자주 일어나며, 복잡한 변경을 계속 선언해야한다면 다음과 같이 useReducer를 사용하는게
  좋습니다.
  각 절차들은 route를 통해 담아두고, 절차가 성공할때마다 useNavigate를 활용해 라우팅 처리를 합니다.
  */
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