import { useContext, useState } from "react"
import { LoginSteps } from "../../types"
import { HomePagDispatchContext } from "../../../../context/HomePageContext"
import { isValidEmail } from "../../../../utils/email"
import { recoveryPassword } from "../../../../services/recoveryPassword"
import useToast from "../../../../hooks/useToast"

const useFormRecoveryPassword = () => {
  const [loading, setLoading] = useState(false)
  const setStepHomePage = useContext(HomePagDispatchContext)
  const [valueInputEmail, setValueInputEmail] = useState<string>("")
  const { showToast } = useToast()

  const handleClickSendLink = async () => {
    try {
      setLoading(true)
      await recoveryPassword(valueInputEmail)
      setStepHomePage(LoginSteps.AFTER_RECOVERY_PASSWORD)
    } catch {
      showToast('error', 'Oops! Ocorreu um erro ao enviar o link de recuperação de senha')
    } finally {
      setLoading(false)
    }
  }

  const isDisabledButton = !isValidEmail(valueInputEmail)

  return {
    handleClickSendLink,
    valueInputEmail,
    setValueInputEmail,
    isDisabledButton,
    isLoading: loading
  }
}

export default useFormRecoveryPassword