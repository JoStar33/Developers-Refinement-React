import React from "react";
import styled from "styled-components";

export default function UseTransition() {
  // isPending은 startTransition으로 지연된 함수의 실행이 지연되고있음을 알리는 boolean값이다.
  const [isPending, startTransition] = React.useTransition();
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    // startTransition을 사용하면 콜백함수의 실행이 지연된다. (우선순위가 밀린다.)
    // 따라서 실행되는 함수의 순서는 startTransition >> setCounter(1)순으로 실행된다!!
    startTransition(() => setCounter(123));
    setCounter(1);
  }, []);

  return <S.UseTransition>UseTransition</S.UseTransition>;
}

const S = {
  UseTransition: styled.div``,
};
