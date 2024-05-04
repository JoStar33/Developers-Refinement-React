import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../reduxStores";

export default function User() {
  const { user } = useSelector((state: RootState) => state.userStore);
  return (
    <S.User>
      <p>{user.name}</p>
    </S.User>
  );
}

const S = {
  User: styled.div``,
};
