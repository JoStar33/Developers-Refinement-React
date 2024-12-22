import { Dispatch, useLayoutEffect, useRef } from 'react';
import { Action, UserInfo } from '../../types/join';
import { useNavigate } from 'react-router-dom';
import { UserInfoStatus } from '../../constants/join';

interface Props {
  userInfo: UserInfo;
  dispatch: Dispatch<Action>;
}

const PhoneNumberPage = ({ userInfo, dispatch }: Props) => {
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!userInfo.age) navigate('/age');
    if (!phoneNumberRef.current) return;
    phoneNumberRef.current.value = userInfo.phoneNumber;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    if (!phoneNumberRef.current) return;
    if (phoneNumberRef.current.value.length < 7) {
      alert('핸드폰 번호가 너무 짧아요!');
      return;
    }
    dispatch({
      type: UserInfoStatus.SET_PHONE_NUMBER,
      value: phoneNumberRef.current.value,
    });
    navigate('/email-address');
  };

  return (
    <div>
      <div>
        <h1>핸드폰 번호를 입력해주세요</h1>
        <input ref={phoneNumberRef} type="text" />
      </div>
      <button onClick={handleClick}>다음</button>
    </div>
  );
};

export default PhoneNumberPage;
