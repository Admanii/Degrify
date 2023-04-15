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
import MainPageStudent from "../pages/Student/MainPageStudent";
import AllDegreesPageHec from "../pages/HEC/AllDegreesPageHec";
import VerifiedDegreesPageHec from "../pages/HEC/VerifiedDegreesPageHec";
import UnverifiedDegreesPageHec from "../pages/HEC/UnverifiedDegreesPageHec";

interface RouteType {
  path: string;
  isPrivate: boolean;
  isUni?: boolean;
  isHec?: boolean;
  isStudent?: boolean;
  component: any;
}

const PrivateRoute = ({
  element,
  isAuthenticated,
  isUni,
  isHec,
  isStudent,
  userRole
}: {
  element: any;
  isAuthenticated: boolean;
  isUni?: boolean;
  isHec?: boolean;
  isStudent?: boolean;
  userRole: string;
}) => {
  console.log(isAuthenticated);
  if (isAuthenticated) {
    if (isUni === true && userRole !== 'UNIVERSITY') {
      //console.log("redirected to home")
      return <Navigate to='/login' />;
    }
    else if (isHec === true && userRole !== 'HEC') {
      //console.log("redirected to home")
      return <Navigate to='/login' />;
    }
    else if (isStudent === true && userRole !== 'STUDENT') {
      //console.log("redirected to home")
      return <Navigate to='/login' />;
    }
    else {
      return element;
    }
  }
  else {
    return <Navigate to='/login' />;
  }
  //return isAuthenticated ? element : <Navigate to='/login' />;
};

const GetRoutes = () => {
  const isAuthenticated = useSelector(IsLoggedIn);
  const { userInfo } = useSelector((state: any) => state.auth)

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
                isUni={route.isUni}
                isHec={route.isHec}
                isStudent={route.isStudent}
                userRole={userInfo?.user?.userRole ?? ''}
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
    isUni: true,
    component: <MainPageUni />,
  },
  {
    path: "/uni/all/degrees",
    isPrivate: true,
    component: <AllDegreesPage />,
  },
  {
    path: "/uni/verified/degrees",
    isPrivate: true,
    component: <VerifiedDegreesPage />,
  },
  {
    path: "/uni/unverified/degrees",
    isPrivate: true,
    component: <UnverifiedDegreesPage />,
  },
  {
    path: "/uni/edit/requests",
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
  {
    path: "/hec/dashboard/",
    isPrivate: true,
    isHec: true,
    component: <MainPageHec />,
  },
  {
    path: "/hec/all/degrees",
    isPrivate: true,
    component: <AllDegreesPageHec />,
  },
  {
    path: "/hec/verified/degrees",
    isPrivate: true,
    component: <VerifiedDegreesPageHec />,
  },
  {
    path: "/hec/unverified/degrees",
    isPrivate: true,
    component: <UnverifiedDegreesPageHec />,
  },
  {
    path: "/student/dashboard/",
    isPrivate: true,
    isStudent: true,
    component: <MainPageStudent />,
  },
];

export default GetRoutes;
