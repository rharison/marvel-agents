import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../config/routes";
import { MenuItem } from "./components/MenuItem";

const useSideMenu = () => {
    const navigate = useNavigate();

    const handleClickLogo = () => {
        navigate('/');
    }

    const renderMenuItens = () => {
        return appRoutes.map(route => (
            <MenuItem
                key={route.path}
                routeItem={route}
            />
        ))
    };

    return {
        handleClickLogo,
        renderMenuItens
    }
}

export default useSideMenu;