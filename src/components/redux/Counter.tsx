import styled from "styled-components";
import { AppDispatch, RootState } from "../../reduxStores";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../../reduxStores/counter";
import React from "react";

export default function Counter() {
  const { count, donation } = useSelector(
    (state: RootState) => state.counterStore
  );
  const inputRef = React.useRef<HTMLInputElement>(null);

  const dispatch = useDispatch<AppDispatch>();

  const handleUpCount = () => {
    dispatch(counterAction.upCount());
  };

  const handleDownCount = () => {
    dispatch(counterAction.downCount());
  };

  const handleSetDonation = () => {
    if (!inputRef.current) return;
    dispatch(counterAction.setDonation(Number(inputRef.current.value)));
  };

  return (
    <S.Counter>
      <button onClick={handleUpCount}>up</button>
      {count}
      <button onClick={handleDownCount}>down</button>
      <div className="donation-wrapper">
        <input ref={inputRef} type="text" />
        <button onClick={handleSetDonation}>donation</button>
        {donation}
      </div>
    </S.Counter>
  );
}

const S = {
  Counter: styled.div`
    .donation-wrapper {
      width: 100%;
    }
  `,
};
