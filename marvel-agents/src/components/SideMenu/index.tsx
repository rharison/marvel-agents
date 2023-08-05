import { Container, ContainerMenuItens, Header } from "./styles"
import useSideMenu from "./useSideMenu";

export const SideMenu = () => {
    const {
        handleClickLogo,
        renderMenuItens
    } = useSideMenu();

    return (
        <Container>
            <Header>
                <img
                    src="logo_pontua_black.png"
                    alt="Logo Pontua"
                    onClick={handleClickLogo}
                />
            </Header>
            <ContainerMenuItens>
                {renderMenuItens()}
            </ContainerMenuItens>
        </Container>
    )
}