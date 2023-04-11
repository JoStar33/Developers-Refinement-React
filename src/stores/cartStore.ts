import { makeAutoObservable } from "mobx";
import { Cart } from "../types/cart";
import { MobxStore } from "../types/store";

//카트에 대한 스토어. 제네릭으로 카트를 넘겨주므로서 이 클래스는 카트에 대한 클래스가 됐다.
export default class CartStore implements MobxStore<Cart> {
  constructor() {
    makeAutoObservable(this);
  }
  elementList: Cart[] = [];
  addElement = (element: Cart) => {
    this.elementList = [...this.elementList, element];
  };
  removeElement = (_id: string) => {
    this.elementList = this.elementList.filter((element: Cart) => {
      if(element._id === _id)
        return;
      return element;
    })
  };
}