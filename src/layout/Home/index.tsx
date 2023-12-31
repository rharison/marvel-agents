import { Fade } from "@mui/material";
import { ChildrenContainer, Container, ContainerContent, Content, Header } from "./styles";
import { LayoutHomeProps } from "./types";

export const LayoutHome = ({ children }: LayoutHomeProps) => {
    return (
        <Fade in={true} timeout={750}>
            <Container>
                <Header>
                    <img src="logo_pontua_white.png" alt="Logo Pontua" />
                </Header>
                <ContainerContent>
                    <Content>
                        <img src="building_illustration.png" alt="Ilustração de construção civil" />
                        <ChildrenContainer>
                            {children}
                        </ChildrenContainer>
                    </Content>
                </ContainerContent>
            </Container>
        </Fade>
    )
};