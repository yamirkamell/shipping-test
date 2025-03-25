import { TextField } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import styled from 'styled-components'

const RootContainer = styled.div<{$width: any}>`
    display: flex; 
    flex-direction: row;
    width: ${props => props.$width}; 
    height: 45px; 
    background-color: #e8e6e6;
    color: #1063ac;
`;

const IconContainer = styled.div`
    width: 45px;
    height: 45px; 
    background-color: #1063ac; 
    display: flex; 
    align-items: center; 
    justify-content: center;
`;

const UsernameIcon = styled(PersonIcon)`
    width: 20px; 
    height: 20px; 
    color: #ffff;
`;

const PasswordIcon = styled(LockIcon)`
    width: 20px; 
    height: 20px; 
    color: #ffff;
`;

const InputPersonalized = styled(TextField)`
    #outlined-size-small-label{
        color: #1063ac; 
    }
    input{
        width: 350px; 
        border-radius: 10px; 
        border: none !important;
        outline: none; 
        background-color: transparent; 
        color: #1063ac; 
        padding-inline: 10px;
    }
    fieldset{
        border: none;
    }
`;

const InputPasswordPersonalized = styled(TextField)`
    #outlined-size-small-label{
        color: #1063ac; 
    }
    input{
        width: 310px; 
        border-radius: 10px; 
        border: none !important;
        outline: none; 
        background-color: transparent; 
        color: #1063ac; 
        padding-inline: 10px;
    }
    fieldset{
        border: none;
    }
`;

export {
    RootContainer,
    IconContainer,
    UsernameIcon,
    PasswordIcon,
    InputPersonalized,
    InputPasswordPersonalized
  };
  