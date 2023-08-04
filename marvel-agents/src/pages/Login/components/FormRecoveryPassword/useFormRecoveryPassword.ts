import { useContext, useState } from "react"
import { LoginSteps } from "../../types"
import { HomePagDispatchContext } from "../../../../context/HomePageContext"
import { isValidEmail } from "../../../../utils/email"

const useFormRecoveryPassword = () => {
  const setStepHomePage = useContext(HomePagDispatchContext)
  const [valueInputEmail, setValueInputEmail] = useState<string>("")

  const handleClickForgoutPassword = () => {
    setStepHomePage(LoginSteps.RECOVERY_PASSWORD)
  }

  const isDisabledButton = !isValidEmail(valueInputEmail)

  return {
    handleClickForgoutPassword,
    valueInputEmail,
    setValueInputEmail,
    isDisabledButton
  }
}

export default useFormRecoveryPassword