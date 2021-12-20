import React from 'react';
import styled from 'styled-components';

const GreenButton = ({
  title, width, onClickFunction, type,
}) => {
  return (
    <Button
      type={type || ''}
      onClick={onClickFunction}
      width={width}
    >
      {title}
    </Button>
  );
};

export default GreenButton;

const Button = styled.button`
    width: ${(props) => (props.width ? props.width : '190px')}; 
    height: 72px;
    background-color: #20811E;
    border-radius: 20px;
    color: white;
    font-size: 30px;
    cursor: pointer;

    :hover{
      background-color: #1a6619;
    }
`;
