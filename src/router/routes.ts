import MainPage from "../pages/MainPage";

export type IRoute = {
  path: string;
  component: () => JSX.Element;
};

export const routes: IRoute[] = [{ path: "/", component: MainPage }];
