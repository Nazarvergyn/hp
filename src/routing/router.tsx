import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout/RootLayout";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage/ProjectDetailsPage";
import ProjectStatisticsPage from "../pages/ProjectStatisticsPage/ProjectStatisticsPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import { MAIN_ROUTES } from "./mainRoutes";

export const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        path: MAIN_ROUTES.HOME,
        element: <HomePage />,
      },
      {
        path: MAIN_ROUTES.LOGIN,
        element: <LoginPage />,
      },
      {
        path: MAIN_ROUTES.SIGN_UP,
        element: <SignUpPage />,
      },
      {
        path: MAIN_ROUTES.DASHBOARD,
        element: <DashboardPage />,
      },
      {
        path: `${MAIN_ROUTES.PROJECTS_STATISTICS}/:id`,
        element: <ProjectStatisticsPage />,
      },
      {
        path: `${MAIN_ROUTES.PROJECT}/:id`,
        element: <ProjectDetailsPage />,
      },
    ],
  },
]);