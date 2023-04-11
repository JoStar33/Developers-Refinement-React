interface Props {
  text: string;
  isShow: boolean;
}

const Dialog = ({ isShow, text }: Props) => {
  return <>{isShow && <div>{text}</div>}</>;
};

export default Dialog;
