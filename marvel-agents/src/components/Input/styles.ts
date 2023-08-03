import TextField from '@mui/material/TextField';
import { styled } from 'styled-components';

export const StyledTextField = styled(TextField)`
    & > .MuiInputBase-root {
        border-radius: 10px;
        height: 57px;

        & > input:not(:placeholder-shown) {
            color: #293D71;
            font-weight: 700;
            font-size: 1rem;
            font-family: 'Epilogue', 'Inter', sans-serif;
        }

        &:hover {
            & > fieldset {
                border-color: #293D71;
            }
        }
    }
`;

