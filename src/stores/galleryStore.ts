import { makeAutoObservable } from "mobx";
import { Gallery } from "../types/gallery";
import { MobxStore } from "../types/store";

//거의 유사한 갤러리 스토어까지 만들어보기.
export default class GalleryStore implements MobxStore<Gallery> {
  constructor() {
    makeAutoObservable(this);
  }
  elementList: Gallery[] = [];
  addElement = (element: Gallery) => {
    this.elementList = [...this.elementList, element];
  };
  removeElement = (_id: string) => {
    this.elementList = this.elementList.filter((element: Gallery) => {
      if(element._id === _id)
        return;
      return element;
    })
  };
}