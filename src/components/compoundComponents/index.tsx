import { ReactNode } from "react";
import Option from "./Option";

interface Props {
  children: ReactNode,
}

const Select = ({ children }: Props) => {
  return (
    <select>
      {
        children
      }
    </select>
  );
};

Select.Option = Option;

export default Select;