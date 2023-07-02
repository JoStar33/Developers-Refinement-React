import React, { Dispatch, useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Action, UserInfo } from '../../types/join';
import { UserInfoStatus } from '../../constants/join';

interface Props {
  userInfo: UserInfo;
  dispatch: Dispatch<Action>;
};

const EmailAddressPage = ({userInfo, dispatch}: Props) => {
  const emailAddressRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (!userInfo.phoneNumber)
      navigate("/phone-number");
    if (!emailAddressRef.current) 
      return;
    emailAddressRef.current.value = userInfo.emailAddress;
  }, []);
  const handleClick = () => {
    if(!emailAddressRef.current)
      return;
    if(emailAddressRef.current.value.length < 7) {
      alert("이메일 주소가 너무 짧아요!");
      return;
    };
    dispatch({
      type: UserInfoStatus.SET_EMAIL_ADDRESS,
      value: emailAddressRef.current.value
    });
    navigate("/complete");
  }
  return (
    <div>
      <div>
        <h1>이메일 주소를 입력해주세요</h1>
        <input ref={emailAddressRef} type="text" />
      </div>
      <button onClick={handleClick}>다음</button>
    </div>
  );
};

export default EmailAddressPage;