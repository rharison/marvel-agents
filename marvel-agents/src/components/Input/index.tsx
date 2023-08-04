import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { InputAdornment } from "@mui/material";
import { forwardRef, useMemo, useState } from "react";
import { StyledTextField } from "./styles";
import { ContentByType, InputProps } from "./types";

export const Input = forwardRef(({ type, ...rest }: InputProps, ref) => {
    const [focused, setFocused] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const contentByType = useMemo<ContentByType>(() => {
        return {
            email: {
                placeholder: "Informe seu e-mail",
                icon: (
                    <InputAdornment
                        position="end"
                        sx={{
                            color: focused ? "#293D71" : "text.secondary",
                        }}
                    >
                        <AlternateEmailOutlinedIcon />
                    </InputAdornment>
                )
            },
            password: {
                placeholder: "Informe sua senha",
                icon: (
                    <InputAdornment
                        position="end"
                        sx={{
                            color: focused ? "#293D71" : "text.secondary",
                            cursor: "pointer"
                        }}
                    >
                        {showPassword ? (
                            <VisibilityOffOutlinedIcon
                                onClick={() => {
                                    setShowPassword(false)
                                }}
                            />
                        ) : (
                            <RemoveRedEyeOutlinedIcon
                                onClick={() => {
                                    setShowPassword(true)
                                }}
                            />
                        )}
                    </InputAdornment>
                ),
            }
        }
    }, [focused, showPassword])

    return (
        <StyledTextField
            {...rest}
            fullWidth
            onFocus={() => {
                setFocused(true)
            }}
            onBlur={() => {
                setFocused(false)
            }}
            placeholder={contentByType[type].placeholder}
            type={showPassword ? "text" : type}
            InputProps={{
                endAdornment: contentByType[type].icon,
                ref: ref,
            }}
        />
    )
});