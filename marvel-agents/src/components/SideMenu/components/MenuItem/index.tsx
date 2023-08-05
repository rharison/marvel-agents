import { Container, TextMenuItem } from "./styles"
import { MenuItemProps } from "./types"
import { useLocation } from "react-router-dom"

export const MenuItem = ({ routeItem }: MenuItemProps) => {
    const location = useLocation();

    return (
        <Container
            $isActive={location.pathname === routeItem.path}
            $changeIconStrokeColor={routeItem.changeIconStrokeColor}
        >
            {routeItem.icon}
            <TextMenuItem>
                {routeItem.label}
            </TextMenuItem>
        </Container>
    )
}