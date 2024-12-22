import { flexCenter } from '@/styles/Common';
import styled from 'styled-components';

export default function Bottom() {
  return <S.Bottom>Bottom</S.Bottom>;
}

const S = {
  Bottom: styled.div`
    ${flexCenter}
    height: 50px;
    background-color: #9ec8ff;
  `,
};
