import styled from "styled-components";
import observable from "./Observer";

export default function RxjsButton() {
  const handleClick = () => {
    observable.next(observable.getValue() + 1);
  };

  return <S.RxjsButton onClick={handleClick}>RxjsButton</S.RxjsButton>;
}

const S = {
  RxjsButton: styled.button``,
};
