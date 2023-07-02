import React from 'react';
import { useNavigate } from 'react-router-dom';

const JoinPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>어서오세요!</div>
      <button onClick={() => {
        navigate("/name");
      }}>다음</button>
    </div>
  );
};

export default JoinPage;