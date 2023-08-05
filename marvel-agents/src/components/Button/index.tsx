import { StyledButton } from "./styles"
import { ButtonProps } from "./types"

export const Button = ({ children, ...rest }: ButtonProps) => {

  return (
    <StyledButton
      {...rest}
    >
      {children}
    </StyledButton>
  )
}