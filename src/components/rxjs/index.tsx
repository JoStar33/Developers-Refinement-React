import React from 'react';

import styled from 'styled-components';
import observable from './Observer';

interface Props {
  children: React.ReactNode;
}

export default function Rxjs({ children }: Props) {
  const [count, setCount] = React.useState(() => observable.value);

  React.useEffect(() => {
    const subscription = observable.subscribe({
      next: (value) => setCount(value),
    });
    return () => subscription.unsubscribe();
  }, []);
  return (
    <S.Rxjs>
      {count}
      {children}
    </S.Rxjs>
  );
}

const S = {
  Rxjs: styled.div``,
};
