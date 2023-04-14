import LoginView from 'views/Login';
import HomeView from 'views/Home';
import TreballadorsView from 'views/Treballadors';
import PressupostosView from 'views/Presupostos';
import WorkSheetView from 'views/Worksheet';
import ComparatorView from 'views/Comparator';

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
    {
        path: '/fullsfeina',
        name: 'Fulls de feina',
        component: WorkSheetView,
        layout: '/private',
    },
    {
        path: '/comparador',
        name: 'Comparador',
        component: ComparatorView,
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
