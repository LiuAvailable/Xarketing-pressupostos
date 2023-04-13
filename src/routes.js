import LoginView from 'views/Login';
import HomeView from 'views/Home';
import TreballadorsView from 'views/Treballadors';

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
];

export const homeRoutes = [
    {
        path: '/',
        name: 'Login',
        component: LoginView,
        layout: '/public',
    },
];
