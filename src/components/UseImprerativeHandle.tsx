import { useRef } from "react";
import ImprerativeChild, { Ref } from "./ImprerativeChild";

const UseImprerativeHandle = () => {
  const childRef = useRef<Ref>(null);
  /*
  이번에 볼건 useImprerativeHandle이다.
  forwardRef를 통해 ref를 연결하고, 자식의 함수를 써야하는 상황에서 사용된다.
  하지만 결코 권장되는 방식은 아니다. 이렇게 되면 자식 컴포넌트의 캡슐화를 부숴버리는 셈이기 때문이다.
  그래서... 아마 이 훅은 부모 컴포넌트의 코드가 극단적으로 길어서 이를 나눠서 관리해야하는
  상황이 아니라면 잘 안쓸듯하다.
  */
  const handleShowChildName = () => {
    if(!childRef.current)
      return;
    console.log(childRef.current.getUserComputedName());
  }
  const handleChildColor = () => {
    if(!childRef.current)
      return;
    childRef.current.setBoxStyle("black");
  }
  return (
    <div>
      <button onClick={handleShowChildName}>자식의 이름을 확인해보자</button>
      <button onClick={handleChildColor}>자식의 색을 바꿔보자.</button>
      <ImprerativeChild user={{
        id: "23",
        name: "jojo",
        phoneNumber: "232"
      }} ref={childRef}/>
    </div>
  );
};

export default UseImprerativeHandle;