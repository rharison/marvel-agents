import { SeachIcon } from "../../../../components/Icons/Search"
import { StyledTextField } from "./styles"
import { SearchFieldProps } from "./types"


export const SearchField = ({ handleChange }: SearchFieldProps) => {

    return (
        <StyledTextField
            focused={false}
            onChange={(event) => handleChange(event.target.value)}
            fullWidth
            InputProps={{
                startAdornment: <SeachIcon />
            }}
            placeholder="Busque um agente"
        />
    )
}