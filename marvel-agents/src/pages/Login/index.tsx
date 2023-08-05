import { TitleWithDecoration } from "../../components"
import { Preloader } from "../../components"
import { LayoutHome } from "../../layout"
import { Container, Description } from "./styles"
import usePageLogin from "./usePageLogin"

export const Login = () => {
    const {
        contentPage,
        isLoading
    } = usePageLogin()

    return (
        <>
            {!isLoading &&
                <LayoutHome>
                    <Container
                        $height={contentPage.containerProps?.height}
                        $width={contentPage.containerProps?.width}
                        $padding={contentPage.containerProps?.padding}
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
            }
            {isLoading && <Preloader />}
        </>
    )
}