import { useInView } from "react-intersection-observer";
import styled from "styled-components";

export default function UseInView() {
  //요소가 뷰포트에 진입 & 제외되는 시점을 파악해준다.
  //효율적인 화면렌더링을 해야한다거나, 무한스크롤을 구현할때 사용하는 라이브러리.
  const [ref, inView] = useInView();
  return (
    <S.UseInView ref={ref}>
      {inView && <div className="inview-tag">보일 예정</div>}
    </S.UseInView>
  );
}

const S = {
  UseInView: styled.div`
    border: 1px solid red;
    height: 200px;
    overflow-y: scroll;
    padding-top: 300px;
    .inview-tag {
      width: 200px;
      height: 50px;
      background-color: aquamarine;
    }
  `,
};
