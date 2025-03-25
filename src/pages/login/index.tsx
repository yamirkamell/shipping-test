import { useDispatch } from 'react-redux';
import { ButtonLogin, InputContainer, LoginLabel, RegisterLabel, RootContainer, TitleText, TitleUpperCase } from './styled';
import InputComponent from '../../components/input-component';
import { useState } from 'react';
import { login } from "./state/authState";
import { useNavigate } from 'react-router-dom';
import { Alert, AlertColor, Stack } from '@mui/material';

type AlertInfo = {
    message: string;
    type: AlertColor;
}

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [alertInfo, setAlertInfo] = useState<AlertInfo>({message: '', type: 'success'});

    const handleLogin = (data: any) => { 
        fetch('http://localhost:3000/users/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then((result) => { 
                if(result?.statusCode === 200){
                    localStorage.setItem('token', result?.data);
                    dispatch(login(result?.data));
                    navigate("/home");
                } else {
                    setShowAlert(true);
                    setAlertInfo({message: 'Error, user incorrect.. please create one account!.', type: 'error'});
                }
            })
            .catch(err => { console.error(err) })
    }

    return (
        <RootContainer>
            <TitleUpperCase>
                <TitleText>
                    S
                </TitleText>
                hipping Test
            </TitleUpperCase>
            <LoginLabel>
                Login
            </LoginLabel>
            <InputContainer>
                <InputComponent width='390px' icon placeholderValue='Username' handleSearch={setUsername} />
                <InputComponent width='390px' icon placeholderValue='Password' handleSearch={setPassword} />
            </InputContainer>
            <RegisterLabel onClick={() => navigate('/register')}>create an account</RegisterLabel>
            <ButtonLogin variant="contained" onClick={() => handleLogin({ username: username, password: password })}>
                Login
            </ButtonLogin>
            {showAlert &&
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity={alertInfo?.type}>{alertInfo?.message}</Alert>
                </Stack>
            }
        </RootContainer>
    );
}

export default Login;