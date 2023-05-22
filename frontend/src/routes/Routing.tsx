import { Navigate, Route, Routes } from "react-router-dom";
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
import AddStudent from "../pages/University/AddStudent";
import MainPageHec from "../pages/HEC/MainPageHec";
import VerifiedDegreesPageHec from "../pages/HEC/VerifiedDegreesPageHec";
import UnverifiedDegreesPageHec from "../pages/HEC/UnverifiedDegreesPageHec";
import AllDegreesPageHec from "../pages/HEC/AllDegreesPageHec";
import ProfileView from "../pages/Student/ProfileView";
import { useSelector } from "react-redux";
import { IsLoggedIn } from "../store/slice/authSlice";
import StudentProfileView from "../pages/University/StudentProfileView";
import DegreeStudent from "../pages/DegreeStudent";
import ApproveDegree from "../pages/University/ApproveDegree";
import AllStudentPage from "../pages/University/AllStudentPage";
import AllUniversitiesPage from "../pages/HEC/AllUniversitiesPage";
import OrganisationProfileView from "../pages/HEC/OrganisationProfileView";
import AddUniversity from "../pages/HEC/AddUniversity";
import EditStudentPage from "../pages/University/EditStudentPage";

interface RouteType {
  path: string;
  isPrivate: boolean;
  isUni?: boolean;
  isHec?: boolean;
  isOrg?: boolean;
  isStudent?: boolean;
  component: any;
}

const PrivateRoute = ({
  element,
  isAuthenticated,
  isUni,
  isHec,
  isOrg,
  isStudent,
  userRole
}: {
  element: any;
  isAuthenticated: boolean;
  isUni?: boolean;
  isHec?: boolean;
  isOrg?: boolean;
  isStudent?: boolean;
  userRole: string;
}) => {
  const accountAddress = localStorage.getItem('accountAddress') ?? '';
  console.log(accountAddress)
  if (isAuthenticated && accountAddress !== '') {
    if (isOrg && userRole !== ('HEC' || 'UNIVERSITY')) {
      return <Navigate to='/login' />;
    }
    else if (isUni && userRole !== 'UNIVERSITY') {
      return <Navigate to='/login' />;
    }
    else if (isHec && userRole !== 'HEC') {
      return <Navigate to='/login' />;
    }
    else if (isStudent && userRole !== 'STUDENT') {
      return <Navigate to='/login' />;
    }
    else {
      return element;
    }
  }
  else {
    return <Navigate to='/login' />;
  }
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
    component: <LandingPage />,
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
    isPrivate: false,
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
    component: <ApproveDegree />,
  },
  {
    path: "/test",
    isPrivate: true,
    component: <TestPage />,
  },
  {
    path: "/AddStudent",
    isPrivate: false,
    component: <AddStudent />,
  },
  // {
  //   path: "/AddStudentDegree",
  //   isPrivate: false,
  //   component: <AddStudentDegree />,
  // },
  {
    path: "/AddUniversity",
    isPrivate: true,
    component: <AddUniversity />,
  },
  {
    path: "/hec/dashboard/",
    isPrivate: true,
    isHec: true,
    component: <MainPageHec />,
  },
  {
    path: "/hec/all/universities/",
    isPrivate: true,
    isHec: true,
    component: <AllUniversitiesPage />,
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
    path: "/student/view",
    isPrivate: true,
    isStudent: true,
    component: <ProfileView />,
  },
  {
    path: "/student/degree",
    isPrivate: true,
    isStudent: true,
    component: <ProfileView />,
  },
  {
    path: "/view/organisationprofile",
    isPrivate: true,
    isOrg: true,
    component: <OrganisationProfileView />,
  },
  {
    path: "/edit/studentprofile",
    isPrivate: true,
    isUni: true,
    component: <EditStudentPage />,
  },
];

export default GetRoutes;
