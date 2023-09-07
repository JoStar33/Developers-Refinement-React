import { ReactNode } from "react";
import { Container, ItemViewer, Pedestal } from "./List.style";

interface Props {
  children: ReactNode;
}

const List = ({ children }: Props) => {
  return (
    <Container>
      <ItemViewer>
        {children}
      </ItemViewer>
      <Pedestal/>
    </Container>
  );
};

export default List;