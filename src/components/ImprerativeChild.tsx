import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';

interface Props {
  user: User;
}

export interface Ref {
  getUserComputedName: () => string;
  setBoxStyle: (color: string) => void;
}

const ImprerativeChild = ({ user }: Props, ref: React.Ref<Ref>) => {
  const userName = useMemo<string>(() => {
    return `반갑습니다. ${user.name}님 어서오세요`;
  }, [user]);
  const boxRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => ({
    getUserComputedName () {
      return userName;
    },
    setBoxStyle (color: string) {
      if(!boxRef.current)
        return;
      boxRef.current.style.backgroundColor = color;
    }
  }))
  return (
    <div ref={boxRef}>
      {
        userName
      }
    </div>
  );
};

export default forwardRef(ImprerativeChild);