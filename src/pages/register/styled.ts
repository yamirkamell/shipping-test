import { Button } from '@mui/material';
import styled from 'styled-components'

const RootContainer = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
    width: 40%; 
    height: 50%; 
    border-radius: 20px; 
    background-color: #ffff; 
    gap: 20px;
`;

const RegisterLabel = styled.span`
    color: #1063ac; 
    font-size: 28px;
`;

const InputContainer = styled.div`
    display: flex; 
    flex-direction: row; 
    gap: 10px;
`;

const LoginLabel = styled.a`
    color: #1063ac; 
    font-size: 14px;
    cursor: pointer;
`;

const ButtonRegister = styled(Button)`
    width: 390px; 
    background-color: #1063ac;
`;

export {
    RootContainer,
    LoginLabel,
    InputContainer,
    RegisterLabel,
    ButtonRegister
  };
  