import styled from "styled-components";
//동일한 채널을 바라보도록 하자.
import { channel } from "../App";

export default function BroadCast() {
  //이렇게 다른 브라우저에서 message를 전달받을 수 있다.
  //주의할점은 정작 이벤트를 보내는 브라우저에서는 해당 이벤트가 일어나지않는다.
  //따라서 동일한 함수를 실행시켜야함!!
  channel.addEventListener("message", (event) => {
    alert(event.data);
  });

  return (
    <S.BroadCast>
      <button onClick={() => channel.postMessage("이벤트 전달!!!")}>
        이벤트 전달
      </button>
    </S.BroadCast>
  );
}

const S = {
  BroadCast: styled.div`
    button {
      width: 100px;
      height: 2rem;
    }
  `,
};
