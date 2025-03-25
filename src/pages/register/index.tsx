import { useNavigate } from "react-router-dom";
import InputComponent from "../../components/input-component";
import { ButtonRegister, InputContainer, LoginLabel, RegisterLabel, RootContainer } from "./styled";
import { useState } from "react";
import { Alert, AlertColor, Stack } from "@mui/material";

type AlertInfo = {
    message: string;
    type: AlertColor;
}

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [alertInfo, setAlertInfo] = useState<AlertInfo>({message: '', type: 'success'});


    const handleRegister = (data: any) => { 
        if (name === '' || lastname == '' || email == '' || password == '') { 
            setShowAlert(true);
            setAlertInfo({message: 'no empty values.', type: 'warning'});
            return;
        }
        if( password !== confirmPassword ) {
            setShowAlert(true);
            setAlertInfo({message: 'Passwords differents.', type: 'warning'});
            return;
        }
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then((result) => { 
                if(result?.statusCode === 200){
                    setShowAlert(true);
                    setAlertInfo({message: 'Registration successful, please log in to continue.', type: 'success'});
                } else {
                    setShowAlert(true);
                    setAlertInfo({message: 'Error, user invalid.', type: 'error'});
                }
            })
            .catch(err => { console.error(err) })
    }

    return (
        <RootContainer>
            <RegisterLabel>
                Register
            </RegisterLabel>
            <InputContainer>
                <InputComponent width="190px" placeholderValue='name' handleSearch={setName} />
                <InputComponent width="190px" placeholderValue='last name' handleSearch={setLastname} />
            </InputContainer>
            <InputComponent width="390px" placeholderValue='email' handleSearch={setEmail} />
            <InputContainer>
                <InputComponent width="190px" placeholderValue='Password' handleSearch={setPassword} />
                <InputComponent width="190px" placeholderValue='Confirm Password' handleSearch={setConfirmPassword} />
            </InputContainer>
            <LoginLabel onClick={() => navigate('/login')}>I have an account, I want to log in.</LoginLabel>
            <ButtonRegister variant="contained" onClick={() => { handleRegister({name: name, lastname: lastname, email: email, password: password})}}>
                Register
            </ButtonRegister>
            {showAlert &&
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity={alertInfo?.type}>{alertInfo?.message}</Alert>
                </Stack>
            }
        </RootContainer>
    );
}

export default Register;