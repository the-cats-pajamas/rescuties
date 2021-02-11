import { lazy } from "react";
import Pets from '../layouts/layout-components/viewPets/viewPets';
const Home = lazy(() => import('../layouts/layout-components/home/home'));
const Rehome = lazy(() => import('../layouts/layout-components/rehome/rehome'));
const Quiz = lazy(() => import('../layouts/layout-components/quiz/quiz'));
const Favorites = lazy(() =>  import('../layouts/layout-components/favorites'))
// const Pets = lazy(() => import('../layouts/layout-components/viewPets/viewPets'));
const HappyTails = lazy(() => import('../layouts/layout-components/happyTails/happyTails'));


console.log(typeof Pets);
console.log(Pets);

const ThemeRoutes = [
  {
    path: "/page",
    name: "Home",
    icon: "mdi mdi-paw",
    component: Home,
  },
  {
    path: "/page/quiz",
    name: "Quiz",
    icon: "mdi mdi-pencil",
    component: Quiz,
  },
  {
    path: "/page/pets",
    name: "View Available Pets",
    icon: "mdi mdi-cat",
    component: Pets,
  },
  {
    path: "/page/happytails",
    name: "Happy Tails",
    icon: "mdi mdi-heart",
    component: HappyTails,
  },
  {
    path: "/page/rehome",
    name: "Rehome A Pet",
    icon: "mdi mdi-home",
    component: Rehome,
  },
  {
    path: "/page/favorites",
    name: "Saved Pets",
    icon: "mdi mdi-star",
    component: Favorites,
  }
  // { path: "/", pathTo: "/home", name: "Home", redirect: true },
];


export { ThemeRoutes };
