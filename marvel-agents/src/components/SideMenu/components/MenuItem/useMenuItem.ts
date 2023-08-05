import { useLocation, useNavigate } from "react-router-dom"

const useMenuItem = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path: string) => {
        return location.pathname === path;
    }

    const handleClickeMenuItem = (path: string) => {
        navigate(path);
    }

    return {
        isActive,
        handleClickeMenuItem
    }
}

export default useMenuItem