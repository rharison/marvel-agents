import { useContext, useRef } from "react"
import { LoginSteps } from "../../types"
import { HomePagDispatchContext } from "../../../../context/HomePageContext"
import { login } from "../../../../services/login"
import useToast from "../../../../hooks/useToast"

const useFormLogin = () => {
  const refInputEmail = useRef<HTMLInputElement>(null)
  const refInputPassword = useRef<HTMLInputElement>(null)
  const setStepHomePage = useContext(HomePagDispatchContext)
  const { showToast } = useToast()

  const handleClickForgoutPassword = () => {
    setStepHomePage(LoginSteps.RECOVERY_PASSWORD)
  }

  const handleLogin = async () => {
    try {
      const email = refInputEmail.current?.value
      const password = refInputPassword.current?.value
      if(email && password) {
        await login({
          email,
          password: password
        })
      }
      setStepHomePage(LoginSteps.SELECT_AGENT)
    } catch {
      showToast('error', 'Oops! Email ou senha incorretos') 
    }
  }

  return {
    refInputEmail,
    refInputPassword,
    handleClickForgoutPassword,
    handleLogin
  }
}

export default useFormLogin