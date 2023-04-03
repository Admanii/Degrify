import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/general/Layout";
import SideBar from "../components/general/SideBar-copy";
import LoginPage from "../pages/LoginPage";
import MainPageUni from "../pages/University/MainPageUni";
import TestPage from "../pages/TestPage";
import VerifiedDegrees from "../pages/University/VerifiedDegrees";
import UnverifiedDegrees from "../pages/University/UnverifiedDegrees";

interface RouteType {
  path: string;
  isPrivate: boolean;
  component: any;
}

const PrivateRoute = ({
  element,
  isAuthenticated,
}: {
  element: any;
  isAuthenticated: Boolean;
}) => {
  console.log({ isAuthenticated });
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const GetRoutes = () => {
  //const isAuthenticated = useSelector(IsLoggedIn);

  return (
    <Routes>
      {routeList.map((route: RouteType, index) =>
        route.isPrivate ? (
          <Route
            path={route.path}
            key={index}
            element={
              <PrivateRoute
                isAuthenticated={true}
                element={route.component}
              />
            }
          />
        ) : (
          <Route path={route.path} key={index} element={route.component} />
        )
      )}
    </Routes>
  );
};

export const routeList: RouteType[] = [
  {
    path: "/",
    isPrivate: false,
    component: <Layout />,
  },
  {
    path: "/login",
    isPrivate: true,
    component: <LoginPage />,
  },
  {
    path: "/home",
    isPrivate: true,
    component: <SideBar />,
  },
  {
    path: "/uni/dashboard/",
    isPrivate: true,
    component: <MainPageUni />,
  },
  {
    path: "/verified/degrees",
    isPrivate: true,
    component: <VerifiedDegrees />,
  },
  {
    path: "/unverified/degrees",
    isPrivate: true,
    component: <UnverifiedDegrees />,
  },
  {
    path: "/test",
    isPrivate: true,
    component: <TestPage />,
  },

];

export default GetRoutes;
