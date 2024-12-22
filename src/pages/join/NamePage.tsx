import React, { Dispatch, useLayoutEffect, useRef } from 'react';
import { Action, UserInfo } from '../../types/join';
import { UserInfoStatus } from '../../constants/join';
import { useNavigate } from 'react-router-dom';

interface Props {
  dispatch: Dispatch<Action>;
  userInfo: UserInfo;
}

const NamePage = ({ dispatch, userInfo }: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (!nameRef.current) return;
    nameRef.current.value = userInfo.name;
  }, [userInfo.name]);
  const handleClick = () => {
    if (!nameRef.current) return;
    if (nameRef.current.value.length < 2) {
      alert('이름이 너무 짧아요!');
      return;
    }
    dispatch({
      type: UserInfoStatus.SET_NAME,
      value: nameRef.current.value,
    });
    navigate('/age');
  };
  return (
    <div>
      <div>
        <h1>이름을 입력해주세요.</h1>
        <input ref={nameRef} type="text" />
      </div>
      <button onClick={handleClick}>다음</button>
    </div>
  );
};

export default NamePage;
