import { Input } from "../../../../components"
import { Button } from "../../../../components/Button"
import { ButtonContent, TextButton } from "../../styles"
import { Container } from "./styles"
import useFormRecoveryPassword from "./useFormRecoveryPassword"

export const FormRecoveryPassword = () => {
  const {
    valueInputEmail,
    setValueInputEmail,
    isDisabledButton,
    handleClickSendLink
  } = useFormRecoveryPassword()

  return (
    <Container>
      <Input
        type="email"
        value={valueInputEmail}
        onChange={(event) => {
          setValueInputEmail(event.target.value)
        }}
      />
      <Button
        onClick={handleClickSendLink}
        disabled={isDisabledButton}
      >
        <ButtonContent>
          <TextButton>
            enviar link
          </TextButton>
        </ButtonContent>
      </Button>
    </Container>
  )
}