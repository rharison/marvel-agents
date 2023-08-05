import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { PersonIcon } from '../components/Icons/Person';
import { RouteConfigItem } from '../types/routes';
import { Home, Profile } from '../pages';

export const appRoutes: RouteConfigItem[] = [
    {
        path: '/home',
        label: 'Home',
        icon: <DashboardOutlinedIcon />,
        changeIconStrokeColor: false
    },
    {
        path: '/profile',
        label: 'Perfil',
        icon: <PersonIcon />,
        changeIconStrokeColor: true
    }
]

export const getComponentByPath = (path: string) => {
    switch (path) {
        case '/home':
            return < Home />;
        case '/profile':
            return <Profile />;
        default:
            return <Home />;
    }
}