import styled from "styled-components";
import { AppDispatch, RootState } from "../../reduxStores";
import { useDispatch, useSelector } from "react-redux";
import { downCount, upCount } from "../../reduxStores/counter";

export default function Counter() {
  const { count } = useSelector((state: RootState) => state.counterStore);

  const dispatch = useDispatch<AppDispatch>();

  const handleUpCount = () => {
    dispatch(upCount());
  };

  const handleDownCount = () => {
    dispatch(downCount());
  };

  return (
    <S.Counter>
      <button onClick={handleUpCount}>up</button>
      {count}
      <button onClick={handleDownCount}>down</button>
    </S.Counter>
  );
}

const S = {
  Counter: styled.div``,
};
