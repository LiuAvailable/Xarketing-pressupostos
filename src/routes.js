import LoginView from 'views/Login';
import HomeView from 'views/Home';
import TreballadorsView from 'views/Treballadors';
import PressupostosView from 'views/Presupostos';
import WorkSheetView from 'views/Worksheet';
import ComparatorView from 'views/Comparator';
import MaterialsView from 'views/Materials';
import FeinesView from 'views/Feines';

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
    {
        path: '/materials',
        name: 'Materials',
        component: MaterialsView,
        layout: '/private',
    },
    {
        path: '/feines',
        name: 'Feines',
        component: FeinesView,
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
