import { useContext, useEffect, useMemo, useState } from "react"
import { HomePageContext } from "../../context/HomePageContext"
import { FormLogin } from "./components/FormLogin"
import { LoginSteps } from "./types"
import { FormRecoveryPassword } from "./components/FormRecoveryPassword"
import { SuccessRecoveryPassword } from "./components/SuccessRecoveryPassword"
import { FormSelectAgent } from "./components/FormSelectAgent"

const usePageLogin = () => {
    const homePageStep = useContext(HomePageContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [homePageStep])

    const contentPage = useMemo(() => {
        switch (homePageStep) {
            case LoginSteps.LOGIN:
                return {
                    title: "Bem-vindo",
                    description: "informe as suas credenciais de acesso ao portal",
                    rest: <FormLogin />
                }
            case LoginSteps.RECOVERY_PASSWORD:
                return {
                    title: "Recuperar senha",
                    description: "Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha.",
                    rest: <FormRecoveryPassword />
                }
            case LoginSteps.AFTER_RECOVERY_PASSWORD:
                return {
                    title: "Tudo certo",
                    decoration: ';)',
                    description: "Foi enviado um e-mail para você com instruções de como redefinir a sua senha.",
                    rest: <SuccessRecoveryPassword />
                }
            case LoginSteps.SELECT_AGENT:
                return {
                    title: "Selecione o seu agente mais legal",
                    description: "Tenha a visão completa do seu agente.",
                    containerProps: {
                        padding: '36px 37px',
                        width: 405,
                        height: 319,
                    },
                    titleMargin: '0 0 2rem 0',
                    rest: <FormSelectAgent />
                }
        }
    }, [homePageStep])

    return {
        contentPage,
        isLoading
    }
}

export default usePageLogin