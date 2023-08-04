import { useContext } from "react";
import { HomePagDispatchContext } from "../../../../context/HomePageContext"
import { LoginSteps } from "../../types"

const useSuccessRecoveryPassword = () => {
  const setStepHomePage = useContext(HomePagDispatchContext)

  const handleClickGoBackLogin = () => {
    setStepHomePage(LoginSteps.LOGIN)
  }

  return {
    handleClickGoBackLogin
  }
};

export default useSuccessRecoveryPassword;