import styled from "styled-components";
import HOCWrapper from "./HOCWrapper";

interface Props {
  loading: boolean;
}

function UserList({ loading }: Props) {
  return (
    <S.UserList>
      {loading && <div>로딩중</div>}
      <div>H</div>
      <div>O</div>
      <div>C</div>
    </S.UserList>
  );
}

const S = {
  UserList: styled.div``,
};

export default HOCWrapper(UserList);
