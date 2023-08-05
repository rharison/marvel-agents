import { Input } from "../../../../components"
import { Button } from "../../../../components/Button"
import { ButtonCircularLoading } from "../../../../components/ButtonCircularLoading"
import { ButtonContent, TextButton } from "../../styles"
import { Container } from "./styles"
import useFormRecoveryPassword from "./useFormRecoveryPassword"

export const FormRecoveryPassword = () => {
  const {
    valueInputEmail,
    isDisabledButton,
    isLoading,
    setValueInputEmail,
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
        disabled={isDisabledButton || isLoading}
      >
        <ButtonContent>
          {isLoading && <ButtonCircularLoading />}
          {!isLoading &&
            <TextButton>
              enviar link
            </TextButton>
          }
        </ButtonContent>
      </Button>
    </Container>
  )
}