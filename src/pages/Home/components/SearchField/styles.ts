import { styled } from "styled-components";
import { TextField } from "@mui/material";

export const StyledTextField = styled(TextField)`
    & > .MuiInputBase-root:hover {
        & > fieldset {
            border-color: transparent;
        }
    }
    & > .MuiInputBase-root > fieldset, & > .MuiInputBase-root > fieldset:hover {
        border-color: transparent;
    }
    & > .MuiInputBase-root > input {
        padding-left: 1rem;
        font-family: 'Epilogue', sans-serif;
        &::placeholder {
            font-size: 12px;
        }
    }
    & > .Mui-focused > fieldset {
        border-color: transparent;
    }
    & > .MuiInputBase-root > svg {
        width: 19px;
    }

`;

