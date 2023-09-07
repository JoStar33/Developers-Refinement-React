import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemViewer = styled.div`
  display: flex;
  gap: 7.5rem;
`;

const Pedestal = styled.div`
  width: 30rem;
  height: 4rem;
  background-color: #D9D9D9;
  border-radius: 0 0 20px 20px;
`;

export { Container, ItemViewer, Pedestal };

