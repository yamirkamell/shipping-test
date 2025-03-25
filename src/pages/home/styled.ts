import styled from 'styled-components';

const RootContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 40px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  color: #333;
  margin-bottom: 40px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-sizing: border-box;
`;

const Select = styled.select`
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;





export {
    RootContainer,
    Title, 
    InputGroup,
    Label,
    Input,
    Select
}