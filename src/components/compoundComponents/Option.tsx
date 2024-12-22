import { ComponentProps, useId } from 'react';

type Props = ComponentProps<'option'>;

const Option = ({ ...props }: Props) => {
  const uniqueId = useId();
  return <option key={uniqueId} {...props}></option>;
};

export default Option;
