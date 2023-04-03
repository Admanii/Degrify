import { NavItem } from "./Sidebar";
import { IMAGES } from "../../constants/images";

export const navItems: NavItem[] = [
  // {
  //   label: "Dashboard",
  //   href: "/",
  //   icon: IMAGES.home_icon,
  // },
  {
    label: "All Students",
    href: "/students",
    activeIcon: IMAGES.bar_icon,
    inactiveIcon: IMAGES.bar_icon,
  },
  {
    label: "Add Student Details",
    href: "/student/add/details",
    activeIcon: IMAGES.user_icon,
    inactiveIcon: IMAGES.user_icon,
  },
  {
    label: "All Degrees",
    href: "/degrees",
    activeIcon: IMAGES.users_icon,
    inactiveIcon: IMAGES.users_icon,
  },
  {
    label: "Verified Degrees",
    href: "/verified/degrees",
    activeIcon: IMAGES.users_icon,
    inactiveIcon: IMAGES.users_icon,
  },
  {
    label: "Unverified Degrees",
    href: "/unverified/degrees",
    activeIcon: IMAGES.users_icon,
    inactiveIcon: IMAGES.users_icon,
  },
  {
    label: "Edit Requests",
    href: "/edit/requests",
    activeIcon: IMAGES.user_icon,
    inactiveIcon: IMAGES.user_icon,
  },
];
