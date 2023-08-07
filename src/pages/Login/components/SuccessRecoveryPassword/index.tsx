import { ButtonContent, TextButton } from "../../styles"
import { StyledButton } from "./styles"
import useSuccessRecoveryPassword from "./useSuccessRecoveryPassword"

export const SuccessRecoveryPassword = () => {

  const {
    handleClickGoBackLogin
  } = useSuccessRecoveryPassword()

  return (
    <StyledButton
      onClick={handleClickGoBackLogin}
    >
      <ButtonContent>
        <TextButton>
          voltar para o login
        </TextButton>
      </ButtonContent>
    </StyledButton>
  )
}