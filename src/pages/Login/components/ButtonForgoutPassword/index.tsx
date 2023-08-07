import { Container } from "./styles"
import { ButtonForgoutPasswordProps } from "./types"

export const ButtonForgoutPassword = ({ children, ...rest }: ButtonForgoutPasswordProps) => {

  return (
    <Container
      {...rest}
    >
      {children}
    </Container>
  )
}