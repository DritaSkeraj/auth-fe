import MainLayout from "../layouts/MainLayout";
import BlankLayout from "../layouts/BlankLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Home from "../Pages/Home";
import SearchResults from "../Pages/Search/SearchResults";

const routes =  [
    {
        path: '/',
        component: Home,
        layout: MainLayout,
        isProtected: true
    },
    {
        path: '/search',
        component: SearchResults,
        layout: MainLayout,
        isProtected: true
    },
    {
        path: '/auth/login',
        component: Login,
        layout: BlankLayout,
        isProtected: false
    },
    {
        path: '/auth/register',
        component: Register,
        layout: BlankLayout,
        isProtected: false
    }
]

export default routes;