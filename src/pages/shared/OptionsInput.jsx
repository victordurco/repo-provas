import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowDownOutline, ArrowUpOutline } from 'react-ionicons';

const OptionsInput = ({
  handleFormDataChange, options, title,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [choice, setChoice] = useState('');

  const hanldeClick = (item) => {
    handleFormDataChange(item.name);
    setShowOptions(!showOptions);
    setChoice(item.name);
  };

  return (
    <Container>
      {title}
      <ChoiceView>{choice}</ChoiceView>
      <ArrowButton onClick={() => setShowOptions(!showOptions)}>
        {!showOptions
          ? (
            <ArrowDownOutline
              color="#4D65A8"
              height="25px"
              width="25px"
              onClick={() => setShowOptions(!showOptions)}
            />
          )
          : (
            <ArrowUpOutline
              color="#4D65A8"
              height="25px"
              width="25px"
              onClick={() => setShowOptions(!showOptions)}
            />
          )}
      </ArrowButton>
      <Options show={showOptions}>
        {options
          ? options.map((item) => (
            <Option
              onClick={() => hanldeClick(item)}
            >
              {item.name}
            </Option>
          ))
          : ''}
      </Options>
    </Container>
  );
};

export default OptionsInput;

const Container = styled.div`
  height: fit-content;
  width: ${(props) => (props.width ? props.width : '100%')};
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 20px;
  position: relative;
  top: 0;
  left: 0;

`;

const ChoiceView = styled.div`
  height: 40px;
  width: 100%;
  border-radius: 5px;
  border: none;
  margin-top: 8px;
  font-size: 20px;
  color: #1f1f1f;
  padding-left: 10px;
  background-color: white;
  display: flex;
  align-items: center;
`;

const Options = styled.div`
  width: 100%;
  height: ${(props) => (props.show ? '90px' : '0px')};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  transition: all 450ms ease-out;
  background-color: white;
  border-radius: 5px;
  padding-top: ${(props) => (props.show ? '10px' : '0px')};

  ::-webkit-scrollbar {
  width: 5px;               
}

  ::-webkit-scrollbar-track {
  background: white;        
}

  ::-webkit-scrollbar-thumb {
  background-color: #585858;    
  border-radius: 20px;       
  border: 3px solid #585858;  
}
`;

const Option = styled.span`
  font-size:18px;
  font-weight:700;
  color: #3a3a3a;
  cursor: pointer;
  margin: 0 0 2px 15px;

  :hover{
    background-color: #837e8684;
  }
`;

const ArrowButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 35px;
  right: 5px;
`;
