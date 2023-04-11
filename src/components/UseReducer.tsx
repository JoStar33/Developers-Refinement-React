import { useReducer } from "react";

interface Action {
  type: string;
}

interface State {
  counter: number;
}

enum reducerStatus {
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
  MULTIPLY = "MULTIPLY",
  DIVIDE = "DIVIDE"
}

const UseReducer = () => {
  const initialState = { 
    counter: 0 
  };
  //state를 사용하는 경우가 많고 그때마다 setState로 객체복사 같은걸 반복해야할때 사용하면 좋다.
  //최상위 부모 컴포넌트에서 자식컴포넌트로 스테이트를 보내는 경우가 제일 적합하지 않을까 싶다.
  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case reducerStatus.INCREASE: return {
        ...state,
        counter: state.counter + 1
      }
      case reducerStatus.DECREASE: return {
        ...state,
        counter: state.counter - 1
      }
      case reducerStatus.MULTIPLY: return {
        ...state,
        counter: state.counter * 2
      }
      case reducerStatus.DIVIDE: return {
        ...state,
        counter: state.counter / 2
      }
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <button onClick={() => dispatch({type: reducerStatus.INCREASE})}>+</button>
      <button onClick={() => dispatch({type: reducerStatus.DECREASE})}>-</button>
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch({type: reducerStatus.MULTIPLY})}>x</button>
      <button onClick={() => dispatch({type: reducerStatus.DIVIDE})}>/</button>
    </div>
  );
};

export default UseReducer;