import React, { useEffect, useLayoutEffect } from 'react';
import { UserInfo } from '../../types/join';
import { useNavigate } from 'react-router-dom';

interface Props {
  userInfo: UserInfo;
};

const CompletePage = ({userInfo}: Props) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>가입완료!</h1>
      <p>이름: {userInfo.name}</p>
      <p>나이: {userInfo.age}</p>
      <p>핸드폰 번호: {userInfo.phoneNumber}</p>
      <p>이메일 주소: {userInfo.emailAddress}</p>
    </div>
  );
};

export default CompletePage;