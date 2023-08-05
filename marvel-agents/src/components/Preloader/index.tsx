import { CircularProgress } from "@mui/material";
import { Container, Content } from "./styles";

export const Preloader = () => {
    return (
        <Container>
            <Content>
                <img src="logo_pontua_white.png" alt="Logo Pontua" />
                <CircularProgress />
            </Content>
        </Container>
    )
};