import React from "react";
import styled from "styled-components";

interface IKeyItem {
  key: number;
  name: string;
}

const array1: IKeyItem[] = [
  {
    key: 1,
    name: "hello1",
  },
  {
    key: 2,
    name: "hello2",
  },
  {
    key: 3,
    name: "hello3",
  },
];

const array2: IKeyItem[] = [
  {
    key: 4,
    name: "hello4",
  },
  {
    key: 5,
    name: "hello5",
  },
  {
    key: 1,
    name: "hello1",
  },
  {
    key: 2,
    name: "hello2",
  },
];

const array3: IKeyItem[] = [
  {
    key: 7,
    name: "hello7",
  },
  {
    key: 8,
    name: "hello8",
  },
  {
    key: 1,
    name: "hello1",
  },
  {
    key: 2,
    name: "hello2",
  },
  {
    key: 1,
    name: "hello1",
  },
  {
    key: 2,
    name: "hello2",
  },
];

const arrayMatcher: Record<TTabValue, IKeyItem[]> = {
  FIRST: array1,
  SECOND: array2,
  THIRD: array3,
};

type TTabValue = "FIRST" | "SECOND" | "THIRD";

export default function KeyDuplication() {
  const [tabValue, setTabValue] = React.useState<TTabValue>("FIRST");
  const [selectedArray, setSelectedArray] = React.useState<IKeyItem[]>(array1);

  React.useEffect(() => {
    setSelectedArray(arrayMatcher[tabValue]);
  }, [tabValue]);

  return (
    <S.KeyDuplication>
      <div className="key-duplication__header">
        <div
          className="key-duplication__header__tab-item"
          style={{
            backgroundColor: tabValue !== "FIRST" ? "#c3c3c3" : "#000000",
          }}
          onClick={(event) => {
            event.preventDefault();
            setTabValue("FIRST");
          }}
        >
          첫번째
        </div>
        <div
          className="key-duplication__header__tab-item"
          style={{
            backgroundColor: tabValue !== "SECOND" ? "#c3c3c3" : "#000000",
          }}
          onClick={(event) => {
            event.preventDefault();
            setTabValue("SECOND");
          }}
        >
          두번째
        </div>
        <div
          className="key-duplication__header__tab-item"
          style={{
            backgroundColor: tabValue !== "THIRD" ? "#c3c3c3" : "#000000",
          }}
          onClick={(event) => {
            event.preventDefault();
            setTabValue("THIRD");
          }}
        >
          세번째
        </div>
      </div>
      <div className="key-duplication__body">
        {selectedArray.map((element) => (
          <KeyDuplicationItem key={element.key} element={element} />
        ))}
      </div>
    </S.KeyDuplication>
  );
}

interface IKeyDuplicationItem {
  element: IKeyItem;
}

function KeyDuplicationItem({ element }: IKeyDuplicationItem) {
  return (
    <S.KeyDuplicationItem>
      <p className="key-duplication-item__title">{element.name}</p>
    </S.KeyDuplicationItem>
  );
}

const S = {
  KeyDuplication: styled.div`
    display: flex;
    flex-direction: column;
    .key-duplication {
      &__header {
        display: flex;
        gap: 20px;
        &__tab-item {
          cursor: pointer;
          border-radius: 20px 20px 0 0;
          padding: 20px;
          font-size: 1.3rem;
          border: 1px solid black;
        }
      }
      &__body {
        display: flex;
        flex-direction: column;
        height: 700px;
      }
    }
  `,
  KeyDuplicationItem: styled.div`
    width: 100%;
    height: 70px;
    border-top: 1px solid black;
    display: flex;
    .key-duplication-item {
      &__title {
        font-size: 1.3rem;
      }
    }
  `,
};
