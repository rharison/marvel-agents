import { TitleWithDecoration } from "../../components"
import { LayoutHome } from "../../layout"
import { Container, Description } from "./styles"
import usePageLogin from "./usePageLogin"

export const Login = () => {
    const {
        contentPage,
    } = usePageLogin()

    return (
        <LayoutHome>
            <Container
                $height={contentPage.containerHeight}
                $width={contentPage.containerWidth}
            >
                <TitleWithDecoration
                    title={contentPage.title}
                    decoration={contentPage.decoration}
                    margin={contentPage.titleMargin}
                />
                <Description>
                    {contentPage.description}
                </Description>
                {contentPage.rest}
            </Container>
        </LayoutHome>
    )
}