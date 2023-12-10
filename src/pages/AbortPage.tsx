import styled from "styled-components";
import AbortComponent from "../components/AbortComponent";
import React from "react";

export default function AbortPage() {
  const [id, setId] = React.useState(1);

  const handleIncrease = () => {
    setId(prev => prev + 1);
  }

  return (
    <S.AbortPage>
      <AbortComponent id={id} />
      <button onClick={handleIncrease}>영화 변경</button>
    </S.AbortPage>
  );
};

const S = {
  AbortPage: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  `,
};
