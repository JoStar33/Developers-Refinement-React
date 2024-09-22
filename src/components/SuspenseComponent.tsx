import React, { useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

export default function SuspenseComponent() {
  // setTimeout설정
  const timeoutData = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("foo");
      }, 3000);
    });

  const { data } = useQuery({
    queryFn: async () => {
      await timeoutData();
      return [1, 2, 3];
    },
    queryKey: ["test"],
    // fetching이 마무리되면 화면이 보임.
    suspense: true,
  });

  if (!data) return <></>;

  return (
    <S.SuspenseComponent>
      {data.map((element) => (
        <p className="suspense-component__element">{element}</p>
      ))}
    </S.SuspenseComponent>
  );
}

const S = {
  SuspenseComponent: styled.div`
    .suspense-component {
      &__element {
        font-size: 13px;
      }
    }
  `,
};
