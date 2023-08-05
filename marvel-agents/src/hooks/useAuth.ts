import { isExpired, decodeToken } from "react-jwt";

const useAuth = () => {
    const isAuthenticated = () => {
        const token = localStorage.getItem('token') || '';
        const decodedToken = decodeToken(token);
        const tokenIsExpired = isExpired(token);

        return Boolean(decodedToken && !tokenIsExpired);
    };

    return {
        isAuthenticated
    }
}

export default useAuth