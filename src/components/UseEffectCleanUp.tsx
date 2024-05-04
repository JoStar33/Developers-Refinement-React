import React from "react";
import styled from "styled-components";

export default function UseEffectCleanUp() {
  React.useEffect(() => {
    return () => {
      // 클린업 함수에 대해서 잘못알았던 부분에 대해서 기술해봄.
      // 클린업 함수는 언마운트 시점에 실행되는 함수가 아님.
      // ✨클린업 함수는 useEffect가 실행돼야하는 시점, 다음 useEffect 실행시에 실행되는 함수이다.
      // 아래 순서를 거친다.
      // 1. props 나 state 가 업데이트
      // 2. 컴포넌트 리렌더링
      // 3. 이전 이펙트 클린업
      // 4. 새로운 이펙트 실행
    };
  }, []);
  return <S.UseEffectCleanUp>UseEffectCleanUp</S.UseEffectCleanUp>;
}

const S = {
  UseEffectCleanUp: styled.div``,
};
