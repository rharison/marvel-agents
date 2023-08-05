import { Fade } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Container } from "./styles";
import { SideMenu } from "../../components/SideMenu";

export const LayoutApplication = () => {
    return (
        <Fade in={true} timeout={750}>
            <Container>
                <SideMenu />
                <Outlet />
            </Container>
        </Fade>
    )
};