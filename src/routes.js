import LoginView from 'views/Login';
import HomeView from 'views/Home';
import TreballadorsView from 'views/Treballadors';
import PressupostosView from 'views/Presupostos';

export const dashboardRoutes = [
    {
        path: '/home',
        name: 'Home',
        component: HomeView,
        layout: '/private',
    },
    {
        path: '/treballador',
        name: 'Treballadors',
        component: TreballadorsView,
        layout: '/private',
    },
    {
        path: '/pressupost',
        name: 'Pressupostos',
        component: PressupostosView,
        layout: '/private',
    },
];

export const homeRoutes = [
    {
        path: '/',
        name: 'Login',
        component: LoginView,
        layout: '/public',
    },
];
