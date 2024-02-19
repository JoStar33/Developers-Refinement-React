import React from "react";
import { flushSync } from "react-dom";
import styled from "styled-components";

export default function AutomaticBatching() {
  const [count, setCount] = React.useState(0);
  const [flag, setFlag] = React.useState(false);

  const handleClick = () => {
    setCount((prev) => prev + 1); // 리렌더링 전
    setFlag((flag) => !flag); // 리렌더링 전
    // 리액트는 오직 마지막에만 리렌더링을 한 번 수행한다. (배치 적용)
    // 이를통해 불필요한 리렌더링을 방지하고 버그를 예방할 수 있다.
  };

  // 재밌는점은 아래와 같은 비동기적인 상황에서도 리렌더링이 한번만 적용된다.
  setTimeout(() => {
    setCount((prev) => prev + 1);
    setFlag((flag) => !flag);
    // 리액트는 오직 마지막에만 리렌더링을 한 번 수행한다. (배치 적용)
  }, 1000);

  fetch("", undefined).then(() => {
    setCount((prev) => prev + 1);
    setFlag((flag) => !flag);
    // 리액트는 오직 마지막에만 리렌더링을 한 번 수행한다. (배치 적용)
  });

  document.addEventListener("click", () => {
    setCount((prev) => prev + 1);
    setFlag((flag) => !flag);
    // 리액트는 오직 마지막에만 리렌더링을 한 번 수행한다. (배치 적용)
  });

  // 어쩌면 위와 같은 상황은 개발자가 원치않는 상황일수도 있겠다...? 화면에 각 상태가 변할때마다 바로바로
  // 반영이 돼야하나 그러지 못할 수 있으니?
  // 이와같은 경우에는 아래와 같이 flushSync함수를 활용하여 자동배치를 적용시킬 수 있다.
  // 이를통해 즉시 DOM 업데이트가 되는 효과를 기대해볼 수 있다.
  function handleFlushClick() {
    flushSync(() => {
      setCount((prev) => prev + 1);
    }); // 리액트는 즉시 DOM을 업데이트 한다.

    flushSync(() => {
      setFlag((flag) => !flag);
    }); // 리액트는 즉시 DOM을 업데이트 한다.
  }

  return <S.AutomaticBatching>AutomaticBatching</S.AutomaticBatching>;
}

const S = {
  AutomaticBatching: styled.div``,
};
