import MainPage from "../pages/MainPage";
import RegisterPage from "../pages/RegisterPage";
import UsersPage from "../pages/UsersPage";
import { URL_BASE, URL_REGISTER, URL_USERS } from "./urls";

export type IRoute = {
  path: string;
  component: () => JSX.Element;
};

export const routes: IRoute[] = [
  { path: URL_BASE, component: MainPage },
  { path: URL_USERS, component: UsersPage },
  { path: URL_REGISTER, component: RegisterPage },
];
