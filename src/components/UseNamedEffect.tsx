import React from "react";
import styled from "styled-components";

export default function UseNamedEffect() {
  // 다음과 같이 useEffect를 사용시에 기명을 할 수 있다.
  // 이를통해 우리는 useEffect의 로직을 굳이 함수화하여 관리할 필요가 없다는 점, useEffect가 많이쓰인 컴포넌트를 기명을 통해
  // 직관적으로 개선이 가능하다는 점을 알 수 있다.
  React.useEffect(function activeConsole() {
    console.log("hi, hello!");
  }, []);
  return <S.UseNamedEffect>UseNamedEffect</S.UseNamedEffect>;
}

const S = {
  UseNamedEffect: styled.div``,
};
