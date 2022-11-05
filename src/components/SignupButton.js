import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const SignupButton = () => {
    const navigate = useNavigate();
    const goToSignupPage = () => {
        navigate('/signup');
    };

  return (
    <div>
      <Button className='bottomButton' onClick={goToSignupPage}>회원가입</Button>
    </div>
  )
}

export default SignupButton;
