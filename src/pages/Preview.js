import React from 'react';
import { useNavigate } from 'react-router-dom';

const Preview = () => {

    const navigate = useNavigate();
    const goToLoginPage = () => {
        navigate('/login');
    };
    
  return (
    <div>
      <div>TIL</div>
      <br />
      <div>TODAY I LEARNED</div>

      <div>
        <button onClick={goToLoginPage}>지금 시작하기</button>
      </div>
    </div>
  )
}

export default Preview;
