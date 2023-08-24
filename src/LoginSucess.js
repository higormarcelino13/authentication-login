import React from 'react';
import { Container } from '@mui/material';
import { useLocation } from 'react-router-dom';

const LoginSuccess = () => {
  const location = useLocation();
  const user = location.state.user;

  return (
    <Container>
      <h2>Seja bem-vindo, {user.name}!</h2>
      <p>Email: {user.email}</p>
    </Container>
  );
}

export default LoginSuccess;
