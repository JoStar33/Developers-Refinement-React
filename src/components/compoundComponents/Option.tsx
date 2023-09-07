import { ComponentProps, useId } from 'react';

interface Props extends ComponentProps<'option'> {};

const Option = ({...props}: Props) => {
  const uniqueId = useId();
  return (
    <option key={uniqueId} {...props}>
    </option>
  );
};

export default Option;