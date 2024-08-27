import React from "react";

export default function WrapperChild() {
  // 여기서 알수있는 사실. WrapperChild를 감싸고 있는 Wrapper의 스테이트 값이 계속해서 변동중.
  // 그러나 테스트 결과, WrapperChild의 리렌더링은 전혀 발생하지않음.
  // 따라서 이렇게 Props를 전달하지않는 구조에서 상위 컴포넌트에 수행하는 역할이 많다면 children의 형태로 컴포넌트를 감싸는게 나을듯하다.
  React.useEffect(() => {
    console.log("리렌더링 발생");
  });
  return <>WrapperChild</>;
}
