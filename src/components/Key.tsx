import React from "react";
import styled from "styled-components";

export default function Key() {
  const [list, setList] = React.useState([
    { name: "철수" },
    { name: "영희" },
    { name: "민수" },
  ]);

  const addItem = () => {
    setList([{ name: "정국" }, ...list]);
  };

  const delItem = () => {
    setList(list.filter((l) => l.name != "철수"));
  };

  return (
    <>
      {/* 추가 버튼과 삭제 버튼*/}
      <input type="button" value="추가" onClick={addItem} />
      <input type="button" value="삭제" onClick={delItem} />

      <h2> Show Problem Example</h2>
      {list.map((v, index) => (
        /*  div 태그의 key로 배열의 index 사용*/
        // 이때 값이 밀려서 보이는 현상을 발견할 수 있다!!
        // 이렇게 배열의 앞에 요소가 추가되는 경우에, 리액트가 화면의 변화를 감지못하는 경우가 존재한다.
        <div key={index}>
          {v.name}, idx: {index} <input type="text" />
        </div>
      ))}
    </>
  );
}

const S = {
  Key: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    .element {
      width: 100%;
    }
  `,
};
