import { Input } from "../../../../components"
import { Button } from "../../../../components/Button"
import { IconLogin, InterrogacaoEscudo } from "../../../../components/Icons"
import { ButtonContent, ContainerInputsLogin, TextButton } from "../../styles"
import { ButtonForgoutPassword } from "../ButtonForgoutPassword"
import useFormLogin from "./useFormLogin"
import { ButtonCircularLoading } from "../../../../components/ButtonCircularLoading"

export const FormLogin = () => {
  const {
    refInputEmail,
    refInputPassword,
    isLoading,
    handleClickForgoutPassword,
    handleLogin
  } = useFormLogin()

  return (
    <>
      <ContainerInputsLogin>
        <Input type="email" ref={refInputEmail} />
        <Input type="password" ref={refInputPassword} />
      </ContainerInputsLogin>
      <Button
        onClick={handleLogin}
        disabled={isLoading}
      >
        <ButtonContent>
          {isLoading && <ButtonCircularLoading />}
          {!isLoading &&
            <>
              <TextButton>
                entrar
              </TextButton>
              <IconLogin />
            </>
          }
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