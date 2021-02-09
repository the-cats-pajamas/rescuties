import { lazy } from "react";
const Login = lazy(() => import("../views/authentication/Login"));
const Register = lazy(() => import("../views/authentication/Register"));

var authRoutes = [
  {
    path: "/authentication/login",
    name: "Login",
    icon: "mdi mdi-account-key",
    component: Login,
  },
  {
    path:"/authentication/register",
    name: "Register",
    icon: "mdi mdi-account-plus",
    component: Register,
  },
];
export default authRoutes;
