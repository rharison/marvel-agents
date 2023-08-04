import { useContext, useRef } from "react"
import { LoginSteps } from "../../types"
import { HomePagDispatchContext } from "../../../../context/HomePageContext"

const useFormLogin = () => {
  const refInputEmail = useRef<HTMLInputElement>(null)
  const refInputPassword = useRef<HTMLInputElement>(null)
  const setStepHomePage = useContext(HomePagDispatchContext)

  const handleClickForgoutPassword = () => {
    setStepHomePage(LoginSteps.RECOVERY_PASSWORD)
  }

  return {
    refInputEmail,
    refInputPassword,
    handleClickForgoutPassword
  }
}

export default useFormLogin