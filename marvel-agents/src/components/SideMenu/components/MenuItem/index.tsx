import { Container, TextMenuItem } from "./styles";
import { MenuItemProps } from "./types";
import useMenuItem from "./useMenuItem";

export const MenuItem = ({ routeItem }: MenuItemProps) => {
    const {
        isActive,
        handleClickeMenuItem
    } = useMenuItem();

    return (
        <Container
            onClick={() => handleClickeMenuItem(routeItem.path)}
            $isActive={isActive(routeItem.path)}
            $changeIconStrokeColor={routeItem.changeIconStrokeColor}
        >
            {routeItem.icon}
            <TextMenuItem>
                {routeItem.label}
            </TextMenuItem>
        </Container>
    )
}