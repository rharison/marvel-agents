import { TitleWithDecoration } from "../../components"
import { LayoutHome } from "../../layout"
import { Container, Description } from "./styles"
import { LoginSteps } from "./types"
import usePageLogin from "./usePageLogin"

export const Login = () => {
    const {
        contentPage,
        updateStepLogin
    } = usePageLogin({ initialStep: LoginSteps.LOGIN })

    return (
        <LayoutHome>
            <Container>
                <TitleWithDecoration
                    title={contentPage.title}
                    decoration={contentPage.decoration}
                />
                <Description>
                    {contentPage.description}
                </Description>
            </Container>
        </LayoutHome>
    )
}