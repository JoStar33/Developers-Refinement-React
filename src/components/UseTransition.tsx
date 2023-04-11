import { useRef, useState, useTransition } from "react";
import styled from 'styled-components';

interface Card {
  id: string;
  name: string;
  decription: string;
}

const UseTransition = () => {
  /*
  이 훅은 당장에라도 적용시키고 싶을 정도로 매력있게 와닿았다.
  가령 예를 들어보자. 검색을 위해 input으로 입력을 받을때마다 사용자에게 달라진 카드값을 보여줘야하는 화면이 있다고 쳤을때
  asfsdagghsha 이런 식으로 한 2초만에 수많은 글자를 쓰게된다면 화면에 급진적인 변화가 일어나고 에플리케이션이 버벅거리는 현상을 목격할 수 있을거다.
  이러한 문제점때문에 나오게 된게 바로 useTransition.검색이 되는걸 몇초 지연시켜 화면의 렌더링 횟수를 줄이는거다. 이점이 엄청 매력적으로 와닿았다.
  한동안 내가 만들었던 보리쌀 프로젝트에도 이런 코드들이 꽤 많이 있는데 적용시킨다면 애플리케이션 성능을 대폭 올릴 수 있을듯 하다!!
  */
  const [search, setSearch] = useState<string>('');
  const [isPending, startTransition] = useTransition();
  const cards = useRef<Card[]>([
    {
      id: '23',
      name: 'jojo',
      decription: 'jojorion'
    },
    {
      id: '24',
      name: 'koko',
      decription: 'jojorion'
    },
    {
      id: '25',
      name: '호호호',
      decription: 'jojorion'
    },
    {
      id: '26',
      name: '파파파',
      decription: 'jojorion'
    },
    {
      id: '27',
      name: '쿠쿠쿠',
      decription: 'jojorion'
    }
  ]);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    //해당 함수가 낮은 우선순위로 적용된다.
    startTransition(() => {
      setSearch(event.target.value);
    });
  }
  return (
    <div>
      <div>
        <label htmlFor="search-card">검색</label>
        <input type="text" id="search-card" onChange={handleSearch}/>
      </div>
      <CardContainer>
        {
          isPending 
          ? <div>로딩중...</div>
          : cards.current.filter(card => {
            if(card.name.includes(search))
                return card;
              return;
            }).map(card => 
              <Card key={card.id}>
                {
                  card.name
                }
              </Card>)
        }
      </CardContainer>
    </div>
  );
};

const Card = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 1vw;
width: 25vw;
height: 25vw;
border-radius: 20px;
border: 2px solid black;
font-size: 1.4rem;
font-weight: 800;
`;

const CardContainer = styled.div`
width: 82vw;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`; 

export default UseTransition;