import useAuth from "../../../../hooks/useAuth";
import { ArrowLogoutIcon } from "../../../Icons/ArrowLogout"
import { Container, Text } from "./styles"

export const ButtonLogout = () => {
    const { logout } = useAuth();

    return (
        <Container
            onClick={logout}
        >
            <ArrowLogoutIcon />
            <Text>
                Sair
            </Text>
        </Container>
    )
}