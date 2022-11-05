import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const HomeButton = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    };

  return (
    <div>
      <Button className='bottomButton' onClick={goToHome}>홈으로</Button>
    </div>
  )
}

export default HomeButton;
