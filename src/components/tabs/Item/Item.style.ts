import styled from 'styled-components';

interface Props {
  isActive: boolean;
}

const Container = styled.div`
  background-color: ${({ isActive }: Props) => isActive ? '#434343' : '#D9D9D9'};
  border-radius: 20px 20px 0 0;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  font-weight: 800;
  height: 6rem;
  width: 5rem;
`;

export { Container };

