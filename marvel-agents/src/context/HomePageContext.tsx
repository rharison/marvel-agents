import { createContext, useEffect, useState } from "react";
import { LoginSteps } from "../pages/Login/types";
import useAuth from "../hooks/useAuth";

type HomePageContextProps = {
  children: JSX.Element[]
}

const HomePageContext = createContext(LoginSteps.LOGIN);
const HomePagDispatchContext = createContext({} as React.Dispatch<React.SetStateAction<LoginSteps>>);

function HomePageProvider({ children }: HomePageContextProps) {
  const { isAuthenticated } = useAuth()
  const [step, setStep] = useState<LoginSteps>(LoginSteps.LOGIN);

  useEffect(() => {
    if (isAuthenticated()) {
      setStep(LoginSteps.SELECT_AGENT)
    }

  }, [isAuthenticated])


  return (
    <HomePageContext.Provider value={step}>
      <HomePagDispatchContext.Provider value={setStep}>
        {children}
      </HomePagDispatchContext.Provider>
    </HomePageContext.Provider>
  )
}

export { HomePageProvider, HomePageContext, HomePagDispatchContext }