import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/general/Layout";
import SideBar from "../components/general/SideBar-copy";
import LoginPage from "../pages/LoginPage";
import MainPageUni from "../pages/University/MainPageUni";
import TestPage from "../pages/TestPage";

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
    component: <Layout/>,
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
    path: "/mainpageuni",
    isPrivate: true,
    component: <MainPageUni />,
  },


];

export default GetRoutes;
