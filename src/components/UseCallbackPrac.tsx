import { useCallback, useState } from "react";
import CallbackChild from "./CallbackChild";

const UseCallbackPrac = () => {
  const [text, setText] = useState<string>('');
  //이런 함수에 쓰는건 useCallback을 너무 의미없게 사용하는거다. 이거 솔직히 일반함수로 호출해도 되잖아?
  //거기다가 지금 아래보는 코드는 없지만 배열내에 값을 넣게되면 해당 배열내에 값에대한 종속성 집합과 동일성을 비교하기위한 함수까지 메모리상에 담는다.
  const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);
  //오히려 이런 용도가 더 정확해. memo로 감싸진 컴포넌트는 메모라이징 된 상태이기에 부모가 리렌더링 된다고 하더라도, 리렌더링 되지 않는다. 그러나 함수를 props로 넘겨줬을 경우 
  //해당 함수가 메모라이징을 통해 리렌더링이 일어나면 바뀌지 않았다는 정보를 자식 컴포넌트에게 알린다. 따라서 memo의 최적화를 더 훌륭하게 만들어준다.
  const goFunc = useCallback(() => {
    console.log("gogo jose!")
  }, []);
  return (
    <div>
      <input type="text" onChange={handleOnChange} />
      <div>
        <CallbackChild goFunc={goFunc} />
      </div>
    </div>
  );
};

export default UseCallbackPrac;