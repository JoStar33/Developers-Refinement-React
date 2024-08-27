import React from "react";
import Wrapper from "./Wrapper";
import WrapperChild from "./WrapperChild";

export default function WrapperTest() {
  // 여기선 numberState가 변하면 당연히 WrapperChild의 리렌더링이 발생한다.
  // state의 변화로 하위컴포넌트들의 리렌더링을 발생시키는건 당연한 논리.
  const [numberState, setNumberState] = React.useState(0);
  const handlePlus = () => {
    setNumberState((prev) => prev + 1);
  };
  const handleMinus = () => {
    setNumberState((prev) => prev - 1);
  };
  return (
    <Wrapper>
      <div className="controller">
        <button onClick={handlePlus}>+</button>
        <span>{numberState}</span>wrapperTest
        <button onClick={handleMinus}>-</button>
      </div>
      <WrapperChild />
    </Wrapper>
  );
}
