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

const LoginLabel = styled.span`
    color: #1063ac; 
    font-size: 28px;
`;

const InputContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    gap: 20px;
`;

const RegisterLabel = styled.a`
    color: #1063ac; 
    font-size: 14px;
    cursor: pointer;
`;

const ButtonLogin = styled(Button)`
    width: 390px; 
    background-color: #1063ac;
`;

const TitleUpperCase = styled.span`
    text-transform: uppercase;
    font-weight: 900; 
    color: black;
    display: flex;
    align-items: center;
    font-size: 25px;
    font-style: italic;
`;

const TitleText = styled.span`
    background-color: #1063ac;
    color: black;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px; 
`;

export {
    RootContainer,
    LoginLabel,
    InputContainer,
    RegisterLabel,
    ButtonLogin,
    TitleUpperCase,
    TitleText
  };
  