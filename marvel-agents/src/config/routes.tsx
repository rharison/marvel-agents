import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { PersonIcon } from '../components/Icons/Person';
import { RouteConfigItem } from '../types/routes';

export const appRoutes: RouteConfigItem[] = [
    {
        path: '/home',
        label: 'Home',
        icon: <DashboardOutlinedIcon />,
        element: <div>Home</div>,
        changeIconStrokeColor: false
    },
    {
        path: '/profile',
        label: 'Perfil',
        icon: <PersonIcon />,
        element: <div>Perfil</div>,
        changeIconStrokeColor: true
    }
]