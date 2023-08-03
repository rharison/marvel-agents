import { StyledTextField } from "./styles"
import { ContentByType, InputProps } from "./types"
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { InputAdornment } from "@mui/material";
import { useState } from "react";

const contentByType: ContentByType = {
    email: {
        placeholder: "Informe seu e-mail",
        icon: <AlternateEmailOutlinedIcon />,
    },
    password: {
        placeholder: "Informe sua senha",
        icon: <RemoveRedEyeOutlinedIcon />,
    }
}

export const Input = ({ type }: InputProps) => {
    const [focused, setFocused] = useState(false)

    return (
        <StyledTextField
            fullWidth
            onFocus={() => {
                setFocused(true)
            }}
            onBlur={() => {
                setFocused(false)
            }}
            placeholder={contentByType[type].placeholder}
            type={type}
            InputProps={{
                endAdornment: (
                    <InputAdornment
                        position="end"
                        sx={{
                            color: focused ? "#293D71" : "text.secondary",
                            cursor: "pointer"
                        }}
                    >
                        {contentByType[type].icon}
                    </InputAdornment>
                )
            }}
        />
    )
}