import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate('/')}>
      RepoProvas
    </Container>
  );
};

export default Logo;

const Container = styled.div`
    width: fit-content;
    height: fit-content;
    font-size: 50px;
    font-family: 'Rock Salt', cursive;
    cursor: pointer;
`;
