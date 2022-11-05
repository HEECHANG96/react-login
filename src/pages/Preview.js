import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Preview = () => {

    const navigate = useNavigate();
    const goToLoginPage = () => {
        navigate('/login');
    };
    
  return (
    <div className='body-style'>
      <div className='contentWrap'>
        <img 
          className='TIL-image'
          src='https://velog.velcdn.com/images/leedocs/post/8f5fd8b6-47b3-4d6e-9ac1-4d6ad71dd03f/image.gif'
        />
      </div>
      
      <div>
        <Button className='bottomButton' onClick={goToLoginPage}>지금 시작하기</Button>
      </div>
    </div>
  )
}

export default Preview;
