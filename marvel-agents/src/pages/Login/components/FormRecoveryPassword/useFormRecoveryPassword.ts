import { useContext, useState } from "react"
import { LoginSteps } from "../../types"
import { HomePagDispatchContext } from "../../../../context/HomePageContext"
import { isValidEmail } from "../../../../utils/email"

const useFormRecoveryPassword = () => {
  const setStepHomePage = useContext(HomePagDispatchContext)
  const [valueInputEmail, setValueInputEmail] = useState<string>("")

  const handleClickSendLink = () => {
    setStepHomePage(LoginSteps.AFTER_RECOVERY_PASSWORD)
  }

  const isDisabledButton = !isValidEmail(valueInputEmail)

  return {
    handleClickSendLink,
    valueInputEmail,
    setValueInputEmail,
    isDisabledButton
  }
}

export default useFormRecoveryPassword