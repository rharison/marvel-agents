import { Input } from "../../../../components"
import { Button } from "../../../../components/Button"
import { IconLogin, InterrogacaoEscudo } from "../../../../components/Icons"
import { ButtonContent, ContainerInputsLogin, TextButton } from "../../styles"
import { ButtonForgoutPassword } from "../ButtonForgoutPassword"
import useFormLogin from "./useFormLogin"

export const FormLogin = () => {
  const {
    refInputEmail,
    refInputPassword,
    handleClickForgoutPassword
  } = useFormLogin()

  return (
    <>
      <ContainerInputsLogin>
        <Input type="email" ref={refInputEmail} />
        <Input type="password" ref={refInputPassword} />
      </ContainerInputsLogin>
      <Button>
        <ButtonContent>
          <TextButton>
            entrar
          </TextButton>
          <IconLogin />
        </ButtonContent>
      </Button>
      <ButtonForgoutPassword
        onClick={handleClickForgoutPassword}
      >
        <InterrogacaoEscudo />
        Esqueceu a senha?
      </ButtonForgoutPassword>
    </>
  )
}