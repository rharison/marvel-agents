import { ChildrenContainer, Container, Content, Header } from "./styles";
import { LayoutHomeProps } from "./types";

export const LayoutHome = ({ children }: LayoutHomeProps) => {
    return (
        <Container>
            <Header>
                <img src="logo_pontua_white.png" alt="Logo Pontua" />
            </Header>
            <Content>
                <img src="building_illustration.png" alt="Ilustração de construção civil" />
                <ChildrenContainer>
                    {children}
                </ChildrenContainer>
            </Content>
        </Container>
    )
};