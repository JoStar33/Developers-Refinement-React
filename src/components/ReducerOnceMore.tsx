import React from "react";

type ReducerType = "USER_INFO_SET" | "PHONE_NUMBER_SET" | "NICK_NAME_SET";

interface User {
  name: string;
  age: number;
  nickNameList: string[];
  phoneNumberList: string[];
}

const initialState = {
  name: "",
  age: 1,
  nickNameList: [],
  phoneNumberList: [],
};

const reducer = (
  state: User,
  action: { type: ReducerType; reducerState: User }
): User => {
  const { type, reducerState } = action;
  switch (type) {
    case "NICK_NAME_SET":
      return {
        ...state,
        nickNameList: [...reducerState.nickNameList],
      };
    case "PHONE_NUMBER_SET":
      return {
        ...state,
        phoneNumberList: [...reducerState.phoneNumberList],
      };
    case "USER_INFO_SET":
      return {
        ...state,
        name: "hihi",
        age: 20,
      };
  }
  throw new Error("에러발생");
};
export default function ReducerOnceMore() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <>ReducerOnceMore</>;
}
