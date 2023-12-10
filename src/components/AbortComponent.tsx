import React from "react";
import styled from "styled-components";

interface Props {
  id: number;
}
// "id":10,
// "url":"https:\/\/yts.mx\/movies\/13-2010",
// "imdb_code":"tt0798817",
// "title":"13",
// "title_english":"13",
// "title_long":"13 (2010)",
// "slug":"13-2010",
// "year":2010,
// "rating":6,
// "runtime":91,
// "genres":[

interface Movie {
  data: MovieData;
}

interface MovieData {
  movie: {
    id: number;
    url: string;
    title: string;
    genres: string[];
  }
}
/**
 * Abort Controller 사용기
 * API 통신도중 API 통신을 멈추고 싶을때 사용한다.
 * 가장 적절한 예시는 아래와 같을것이다.
 * 먼저 signal옵션을 사용해주자. signal옵션은 API통신 중단, 혹은 통신을 제어하는 옵션이다.
 * 그다음 AbortController 객체를 생성하고 이를 매칭해주자.
 * 해당 컴포넌트 같은 경우, id값이 변경될때마다 리렌더링이 발생한다. 이때 문제는 이거다. 통신이 진행되는 도중에 리렌더링이 발생한다면?
 * 불필요한 API통신이 이루어지고 API 통신정보가 유실되게 된다.
 * 따라서 unmount가 되는 시점에 API통신을 중단시켜줘야 하는것!
 * 이럴때 return안에 abort.abort();이런식으로 코드를 작성해주면 끝.
 * 재밌는점은 마치 디바운싱처럼 동작한다는거다. 아래 예제를 10번정도 연속으로 실행하면 결과적으로 마지막 한번만 API호출이 실행된다.
 * 
 */
export default function AbortComponent({ id }: Props) {
  const [movie, setMovie] = React.useState<MovieData>();
  const movieUrl = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
  const handleFetchMovie = async (id: number, abort: AbortController) => {
    try {
      const response = await fetch(movieUrl, { signal: abort.signal });
      const data: Promise<Movie> = response.json();
      const movieValue = (await data).data;
      setMovie(movieValue);
      return movieValue;
    } catch (error: any) {
      // alert(error.message);
    }
  };

  React.useEffect(() => {
    const abort = new AbortController();
    handleFetchMovie(id, abort);
    return () => abort.abort();
  }, [id]);

  return (
    <S.AbortComponent>
      <p>{movie?.movie.title}</p>
    </S.AbortComponent>
  );
};

const S = {
  AbortComponent: styled.div`
    width: 300px;
    height: 600px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  `,
};
