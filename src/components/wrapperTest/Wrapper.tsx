import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

// 그렇다면 여기서 실험. Wrapper의 state 변동이 계속해서 일어나는 중. 과연 Wrapper가 감싸는 children 컴포넌트는 리렌더링이 발생할까?
export default function Wrapper({ children }: Props) {
  const [numberState, setNumberState] = React.useState(0);
  const handlePlus = () => {
    setNumberState((prev) => prev + 1);
  };
  const handleMinus = () => {
    setNumberState((prev) => prev - 1);
  };
  return (
    <S.Wrapper>
      <div className="controller">
        <button onClick={handlePlus}>+</button>
        <span>{numberState}</span>
        <button onClick={handleMinus}>-</button>
      </div>
      {children}
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    .controller {
      display: flex;
      width: 200px;
      height: 40px;
    }
  `,
};
