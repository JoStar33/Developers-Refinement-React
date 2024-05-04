import styled from "styled-components";

export default function CallbackRef() {
  return (
    <S.CallbackRef
      ref={(ref) => {
        console.log(ref?.style.height);
      }}
    >
      CallbackRef
    </S.CallbackRef>
  );
}

const S = {
  CallbackRef: styled.div`
    height: 30px;
  `,
};
