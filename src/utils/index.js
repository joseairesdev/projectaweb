import { AiOutlineDashboard } from 'react-icons/ai';
import { ImHome } from "react-icons/im";

export const menuItem = [

    {
        path: '/',
        name: "Home",
        icon: <ImHome size={30} />,
    },
    {
        path: '/Dashboard',
        name: "Dashboard",
        icon: <AiOutlineDashboard size={30} />,
    }
]