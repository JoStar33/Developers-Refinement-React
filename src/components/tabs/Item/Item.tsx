import { StyledComponentPropsWithRef } from 'styled-components';
import { Container } from './Item.style';

interface Props extends StyledComponentPropsWithRef<'div'> {
  isActive: boolean;
};

const Item = ({ isActive, ...props }: Props) => {
  return (
    <Container isActive={isActive} {...props} />
  );
};

export default Item;