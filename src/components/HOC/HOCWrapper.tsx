import React from 'react';

// HOC 패턴은 아래와 같다. 감싸질 컴포넌트를 정의해주고 공통적으로 많이쓰이는 로직을 최상단에 정의하는 것이다.
// 다음과 같이 props를 정의하는것 또한 가능하다.
interface Props {
  loading: boolean;
}

export default function HOCWrapper(WrapperComponent: React.ComponentType<Props>) {
  const [loading, setLoading] = React.useState(false);
  const fetchList = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await fetch('http://list.com');
      if (response.status !== 200) throw new Error('에러발생');
      console.log(response);
    } catch (error: any) {
      /* empty */
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchList();
  }, []);

  return <WrapperComponent loading={loading} />;
}
