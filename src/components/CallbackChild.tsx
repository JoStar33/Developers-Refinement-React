import { memo } from "react";

interface Props {
  goFunc: () => void;
}

const CallbackChild = ({ goFunc }: Props) => {
  const handleOnClick = () => {
    goFunc();
  };

  return <div onClick={handleOnClick}></div>;
};

export default memo(CallbackChild);
