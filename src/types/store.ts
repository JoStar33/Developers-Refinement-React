
//공통된 함수와 배열을 가지는 스토어가 생기는데... 이에 대한 유연한 인터페이스를 만들기위해
//제네릭하게 타입을 받도록 만들었다.
export interface MobxStore<T> {
  elementList: Array<T>;
  addElement: (element: T) => void;
  removeElement: (_id: string) => void;
}