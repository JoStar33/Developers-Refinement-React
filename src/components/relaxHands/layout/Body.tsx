import styled from 'styled-components';

export default function Body() {
  return <S.Body>Body</S.Body>;
}

const S = {
  Body: styled.div`
    height: calc(100dvh - 100px);
  `,
};
