import React from 'react';
import styled from 'styled-components';

const TextInput = ({
  title, width, placeholder, handleFormDataChange, prop,
}) => {
  return (
    <Container>
      {title}
      <Input
        width={width}
        placeholder={placeholder}
        onChange={handleFormDataChange(prop)}
      />
    </Container>
  );
};

export default TextInput;

const Container = styled.div`
    width: 100%;
    height: fit-content;
    font-size: 20px;
    display:flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

const Input = styled.input`
  height: 40px;
  width: ${(props) => (props.width ? props.width : '90%')};
  border-radius: 5px;
  border: none;
  margin-top: 8px;
  font-size: 20px;
  color: #1f1f1f;
  padding-left: 10px;

  ::placeholder{
    color: #9d9d9d;
    font-size: 20px;
  }

  :focus{
    outline: none;
  }
`;
