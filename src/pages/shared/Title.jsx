import React from 'react';
import styled from 'styled-components';

const Title = ({ title }) => {
  return (
    <Container>
      {title}
    </Container>
  );
};

export default Title;

const Container = styled.div`
    width: 90%;
    height: fit-content;
    font-size: 40px;
    margin: 15px 0;
    color:#E8E3D7;
`;
