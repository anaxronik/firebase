import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import RegisterPage from "../pages/RegisterPage";
import UsersPage from "../pages/UsersPage";
import { PAGE_BASE, PAGE_LOGIN, PAGE_REGISTER, PAGE_USERS } from "./urls";

export type IRoute = {
  path: string;
  component: () => JSX.Element;
};

export const routes: IRoute[] = [
  { path: PAGE_BASE, component: MainPage },
  { path: PAGE_USERS, component: UsersPage },
  { path: PAGE_REGISTER, component: RegisterPage },
  { path: PAGE_LOGIN, component: LoginPage },
];
