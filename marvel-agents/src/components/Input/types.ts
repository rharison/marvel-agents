import { TextFieldProps } from "@mui/material";

export type InputType = 'email' | 'password'

export type InputProps = {
    type: InputType;
} & TextFieldProps

export type ContentByType = {
    [key in InputType]: {
        placeholder: string,
        icon: JSX.Element
    }
}