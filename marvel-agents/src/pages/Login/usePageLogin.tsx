import { useMemo, useState } from "react"
import { LoginSteps } from "./types"

type UsePageLoginProps = {
    initialStep: LoginSteps
}

const usePageLogin = ({ initialStep }: UsePageLoginProps) => {
    const [stepLogin, setStepLogin] = useState<LoginSteps>(initialStep)

    const contentPage = useMemo(() => {
        switch (stepLogin) {
            case LoginSteps.LOGIN:
                return {
                    title: "Bem-vindo",
                    description: "informe as suas credenciais de acesso ao portal",
                }
            case LoginSteps.RECOVERY_PASSWORD:
                return {
                    title: "Recuperar senha",
                    description: "Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha.",
                }
            case LoginSteps.AFTER_RECOVERY_PASSWORD:
                return {
                    title: "Tudo certo",
                    decoration: ';)',
                    description: "Foi enviado um e-mail para você com instruções de como redefinir a sua senha.",
                }
            case LoginSteps.SELECT_AGENT:
                return {
                    title: "Selecione o seu agente mais legal",
                    description: "Tenha a visão completa do seu agente.",
                }
        }
    }, [stepLogin])

    return {
        contentPage,
        updateStepLogin: setStepLogin,
    }

}

export default usePageLogin