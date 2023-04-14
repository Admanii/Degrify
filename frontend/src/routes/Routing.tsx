import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/general/Layout";
import SideBar from "../components/general/SideBar-copy";
import LoginPage from "../pages/LoginPage";
import MainPageUni from "../pages/University/MainPageUni";
import TestPage from "../pages/TestPage";
import VerifiedDegreesPage from "../pages/University/VerifiedDegreesPage";
import UnverifiedDegreesPage from "../pages/University/UnverifiedDegreesPage";
import DegreeViewPage from "../pages/DegreeViewPage";
import EditRequestsPage from "../pages/University/EditRequestsPage";
import AllDegreesPage from "../pages/University/AllDegreesPage";
import AddStudent from "../components/University/AddStudent/AddStudent";
import { useSelector } from "react-redux";
import { IsLoggedIn } from "../store/slice/authSlice";
import MainPageHec from "../pages/HEC/MainPageHec";

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
  console.log(isAuthenticated);
  return isAuthenticated ? element : <Navigate to='/login' />;
};

const GetRoutes = () => {
  const isAuthenticated = useSelector(IsLoggedIn);

  return (
    <Routes>
      {routeList.map((route: RouteType, index) =>
        route.isPrivate ? (
          <Route
            path={route.path}
            key={index}
            element={
              <PrivateRoute
                isAuthenticated={isAuthenticated ?? false}
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
    isPrivate: false,
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
    path: "/all/degrees",
    isPrivate: true,
    component: <AllDegreesPage />,
  },
  {
    path: "/verified/degrees",
    isPrivate: true,
    component: <VerifiedDegreesPage />,
  },
  {
    path: "/unverified/degrees",
    isPrivate: true,
    component: <UnverifiedDegreesPage />,
  },
  {
    path: "/edit/requests",
    isPrivate: true,
    component: <EditRequestsPage />,
  },
  {
    path: "/view/degree",
    isPrivate: true,
    component: <DegreeViewPage />,
  },
  {
    path: "/test",
    isPrivate: true,
    component: <TestPage />,
  },
  {
    path: "/AddStudent",
    isPrivate: true,
    component: <AddStudent />,
  },

];

export default GetRoutes;
