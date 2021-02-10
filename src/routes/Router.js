import { lazy } from "react";
import Pets from '../layouts/layout-components/viewPets/viewPets';
const Home = lazy(() => import('../layouts/layout-components/home/home'));
const Rehome = lazy(() => import('../layouts/layout-components/rehome/rehome'));
const Quiz = lazy(() => import('../layouts/layout-components/quiz/quiz'));
// const Pets = lazy(() => import('../layouts/layout-components/viewPets/viewPets'));
const HappyTails = lazy(() => import('../layouts/layout-components/happyTails/happyTails'));
console.log(typeof Pets);
console.log(Pets);

var ThemeRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "mdi mdi-paw",
    component: Home,
  },
  {
    path: "/quiz",
    name: "Quiz",
    icon: "mdi mdi-pencil",
    component: Quiz,
  },
  {
    path: "/pets",
    name: "View Available Pets",
    icon: "mdi mdi-cat",
    component: Pets,
  },
  {
    path: "/happytails",
    name: "Happy Tails",
    icon: "mdi mdi-heart",
    component: HappyTails,
  },
  {
    path: "/rehome",
    name: "Rehome A Pet",
    icon: "mdi mdi-home",
    component: Rehome,
  }
  ,
  { path: "/", pathTo: "/home", name: "Home", redirect: true },
];
export default ThemeRoutes;
