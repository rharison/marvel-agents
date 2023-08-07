import { useContext, useRef, useState } from "react"
import { HomePagDispatchContext } from "../../../../context/HomePageContext"
import useToast from "../../../../hooks/useToast"
import { login } from "../../../../services/login"
import { LoginSteps } from "../../types"

const useFormLogin = () => {
  const [loading, setLoading] = useState(false)
  const refInputEmail = useRef<HTMLInputElement>(null)
  const refInputPassword = useRef<HTMLInputElement>(null)
  const setStepHomePage = useContext(HomePagDispatchContext)
  const { showToast } = useToast()

  const handleClickForgoutPassword = () => {
    setStepHomePage(LoginSteps.RECOVERY_PASSWORD)
  }

  const handleLogin = async () => {
    try {
      setLoading(true)
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
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      handleLogin()
    }
  }

  return {
    refInputEmail,
    refInputPassword,
    isLoading: loading,
    handleClickForgoutPassword,
    handleLogin,
    handleKeyDown,
  }
}

export default useFormLogin