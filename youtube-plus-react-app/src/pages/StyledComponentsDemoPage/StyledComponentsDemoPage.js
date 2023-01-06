import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.section`
  border: solid 1px #00f;
  padding: 30px;
  margin-top: 60px;
  text-align: center;
`;

const Heading3 = styled.h3`
  font-size: 48px;
  border: dashed 6px #8bc34a;
`;

// working with props as well.
const Button = styled.button`
  background-color: ${ (props) => props.primary? 'aqua': 'yellow' }; 
  padding: 10px 20px;
  font-size: 16px;
`;

const TomatoButton = styled(Button)`
  color: #000;
  border-color: tomato;
  background-color: tomato;
`;

const StyledComponentsDemoPage = () => {

  return (
    <Wrapper>
      <Heading3>Styled Components Example</Heading3>
      <Button primary>Learn more about Styled Components</Button> <br />
      <Button secondary>Demo Button</Button> <br />
      <TomatoButton>This is styled button</TomatoButton> <br />
      <a href="https://styled-components.com/docs/">Reference</a>
    </Wrapper>
  );
}

export default StyledComponentsDemoPage;