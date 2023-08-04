import { createContext, useState } from "react";
import { LoginSteps } from "../pages/Login/types";

type HomePageContextProps = {
  children: JSX.Element[]
}

const HomePageContext = createContext(LoginSteps.LOGIN);
const HomePagDispatchContext = createContext({} as React.Dispatch<React.SetStateAction<LoginSteps>>);

function HomePageProvider({ children }: HomePageContextProps) {
  const [step, setStep] = useState<LoginSteps>(LoginSteps.LOGIN);

  return (
    <HomePageContext.Provider value={step}>
      <HomePagDispatchContext.Provider value={setStep}>
        {children}
      </HomePagDispatchContext.Provider>
    </HomePageContext.Provider>
  )
}


export { HomePageProvider, HomePageContext, HomePagDispatchContext }