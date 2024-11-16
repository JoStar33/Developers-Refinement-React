import React from "react";
import styled from "styled-components";

export default function UseEffect() {
  React.useEffect(() => {
    //이렇게 사용하면 리렌더링이 발생하는 매시점마다 useEffect가 실행됩니다.
    //따라서 리렌더링 감지를 하는 상황에서 좋게쓰임.
  });

  return <S.UseEffect>UseEffect</S.UseEffect>;
}

const S = {
  UseEffect: styled.div``,
};
