import React, { Dispatch, useLayoutEffect, useRef } from 'react';
import { Action, UserInfo } from '../../types/join';
import { useNavigate } from 'react-router-dom';
import { UserInfoStatus } from '../../constants/join';

interface Props {
  userInfo: UserInfo;
  dispatch: Dispatch<Action>;
};

const AgePage = ({dispatch, userInfo}: Props) => {
  const ageRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (!userInfo.name)
      navigate("/name")
    if (!ageRef.current) 
      return;
    ageRef.current.value = String(userInfo.age);
  }, []);
  const handleClick = () => {
    if(!ageRef.current)
      return;
    if(ageRef.current.value.length < 1) {
      alert("나이를 제대로 입력해주세요!")
      return;
    };
    dispatch({
      type: UserInfoStatus.SET_AGE,
      value: parseInt(ageRef.current.value)
    });
    navigate("/phone-number");
  }
  return (
    <div>
      <div>
        <h1>나이를 입력해주세요</h1>
        <input ref={ageRef} type="number" />
      </div>
      <button onClick={handleClick}>다음</button>
    </div>
  );
};

export default AgePage;