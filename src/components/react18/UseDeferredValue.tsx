import React, { useMemo } from "react";
import styled from "styled-components";
import SlowList from "./SlowList";

export default function UseDeferredValue() {
  const [value, setValue] = React.useState("");
  const deferredValue = React.useDeferredValue(value);

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  React.useEffect(() => {
    console.log(deferredValue);
  }, [deferredValue]);

  //목록의 리렌더링을 지연시킨다!!
  return (
    <S.UseDeferredValue>
      <SlowList text={deferredValue} />
      <input type="text" onChange={handleChangeValue} />
    </S.UseDeferredValue>
  );
}

const S = {
  UseDeferredValue: styled.div``,
};
