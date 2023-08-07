import TextField from '@mui/material/TextField';
import { styled } from 'styled-components';

export const StyledTextField = styled(TextField)`
    & > .MuiInputBase-root {
        border-radius: 10px;
        height: 57px;
        padding: 20px 15px 20px 0;

        & > input {
            font-family: 'Epilogue', 'Inter', sans-serif;
            padding-left: 15px;
            line-height: 2;
        }

        & > input:not(:placeholder-shown) {
            color: #293D71;
            font-weight: 700;
            font-size: 1rem;
        }

        &:hover {
            & > fieldset {
                border-color: #293D71;
            }
        }
    }
`;

