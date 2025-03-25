import { IconButton, InputAdornment } from '@mui/material';
import { IconContainer, InputPasswordPersonalized, InputPersonalized, PasswordIcon, RootContainer, UsernameIcon } from './styled';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

const InputComponent = ({icon, width, placeholderValue, handleSearch}: any) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

return (
    <RootContainer $width={width} >
        {icon &&
            <IconContainer>
                {placeholderValue == 'Username' 
                    ? <UsernameIcon />
                    : <PasswordIcon />
                }
            </IconContainer>
        }
        {placeholderValue == 'Password' || placeholderValue == 'Confirm Password' ? 
                <InputPasswordPersonalized
                    label={placeholderValue}
                    id="outlined-size-small"
                    size="small"
                    type={showPassword ? 'text' : 'password'}
                    onChange={event => handleSearch(event.target.value)}
                    slotProps={{
                        input: {
                            endAdornment: <InputAdornment position="end">
                            <IconButton
                            aria-label={
                                showPassword ? 'hide the password' : 'display the password'
                            }
                            style={{ color: '#1063ac'}}
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>,
                        },
                      }}
                />
        :
            <InputPersonalized 
                label={placeholderValue}
                id="outlined-size-small"
                size="small"
                defaultValue={''} 
                onChange={event => handleSearch(event.target.value)}
            />
        }
        
    </RootContainer>
);
}

export default InputComponent;