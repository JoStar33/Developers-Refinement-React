import styled from 'styled-components';

export default function Header() {
  return (
    <S.Header>
      <button>클릭</button>
      Header
      <button>클릭</button>
    </S.Header>
  );
}

const S = {
  Header: styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 0px 15px;
    align-items: center;
    background-color: #9ec8ff;
  `,
};
