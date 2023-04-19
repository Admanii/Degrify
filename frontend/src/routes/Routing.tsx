import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/general/Layout";
import SideBar from "../components/general/SideBar-copy";
import LoginPage from "../pages/LoginPage";
import MainPageUni from "../pages/University/MainPageUni";
import TestPage from "../pages/TestPage";
import VerifiedDegreesPage from "../pages/University/VerifiedDegreesPage";
import UnverifiedDegreesPage from "../pages/University/UnverifiedDegreesPage";
import LandingPage from "../pages/LandingPage";
import AllDegreesPage from "../pages/University/AllDegreesPage";
import EditRequestsPage from "../pages/University/EditRequestsPage";
import DegreeViewPage from "../pages/DegreeViewPage";
import AddStudent from "../components/University/AddStudent/AddStudent";
import MainPageHec from "../pages/HEC/MainPageHec";
import VerifiedDegreesPageHec from "../pages/HEC/VerifiedDegreesPageHec";
import UnverifiedDegreesPageHec from "../pages/HEC/UnverifiedDegreesPageHec";
import AllDegreesPageHec from "../pages/HEC/AllDegreesPageHec";
import MainPageStudent from "../pages/Student/MainPageStudent";
import { useSelector } from "react-redux";
import { IsLoggedIn } from "../store/slice/authSlice";
import StudentProfileView from "../pages/StudentProfileView";
import DegreeStudent from "../pages/DegreeStudent";
import ApproveDegree from "../pages/University/ApproveDegree";
import AllStudentPage from "../pages/University/AllStudentPage";

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
    path: "/landing",
    isPrivate: true,
    component: <LandingPage />,
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
    path: "/uni/all/students",
    isPrivate: true,
    isUni: true,
    component: <AllStudentPage />,
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
    path: "/view/degreecertificate",
    isPrivate: true,
    component: <DegreeViewPage />,
  },
  {
    path: "/view/studentprofile",
    isPrivate: true,
    component: <StudentProfileView />,
  },
  {
    path: "/view/degreedetails",
    isPrivate: true,
    component: <DegreeStudent />,
  },
  {
    path: "/approvedegree",
    isPrivate: true,
    component: <ApproveDegree/>,
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
