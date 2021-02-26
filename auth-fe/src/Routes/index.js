import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home";
import SearchResults from "../pages/search/SearchResults";
import BlankLayout from "../layouts/BlankLayout";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import NotFound from "../pages/notfound/NotFound";

const routes = [
  {
    path: "/",
    component: Home,
    layout: MainLayout,
    isProtected: true,
  },
  {
    path: "/search",
    component: SearchResults,
    layout: MainLayout,
    isProtected: true,
  },
  {
    path: "/auth/login",
    component: Login,
    layout: BlankLayout,
    isProtected: false,
  },
  {
    path: "/auth/register",
    component: Register,
    layout: BlankLayout,
    isProtected: false,
  },
  {
    path: "/404",
    component: NotFound,
    layout: BlankLayout,
    isProtected: false,
  },
];

export default routes;
