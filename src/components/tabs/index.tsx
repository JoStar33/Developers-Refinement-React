import { ReactNode } from "react";
import Item from "./Item/Item";
import List from "./List/List";

interface Props {
  children: ReactNode;
}

const Tab = ({ children }: Props) => {
  return (
    <>
      {children}
    </>
  );
};

Tab.List = List;
Tab.Item = Item;

export default Tab;