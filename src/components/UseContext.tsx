import { useContext } from "react";
import { DialogContext } from '../utils/DialogContext';

const UseContext = () => {
  /*
  전역변수 하나쓰자고 리덕스, zustand, 리코일 이런거 사용하는게 부담스러울 때가 있다.
  대표적으로 다이얼로그같은걸 사용할때가 그렇다. 다이얼로그를 App 컴포넌트단에 만들고 호출시에 불러지도록 한다고 가정하자.
  이런 다이얼로그 하나때문에 스토어를 쓰는게 부하가 크다는 것. 따라서 이 경우에는 context api를 활용하는거다.
  */
  const { setDialog } = useContext(DialogContext);
  return (
    <div>
      <button onClick={() => setDialog("안녕? 다이얼로그가 열렸어.", true)}>다이얼로그 오픈</button>
    </div>
  );
};

export default UseContext;