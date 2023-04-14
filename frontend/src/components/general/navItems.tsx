import { NavItem } from "./Sidebar";
import { IMAGES } from "../../constants/images";

export const navItemsUni: NavItem[] = [
  {
    label: "All Degrees",
    href: "/all/degrees",
    activeIcon: IMAGES.bar_icon_active,
    inactiveIcon: IMAGES.bar_icon,
  },
  {
    label: "Verified Degrees",
    href: "/verified/degrees",
    activeIcon: IMAGES.verified_icon_active,
    inactiveIcon: IMAGES.verified_icon,
  },
  {
    label: "Unverified Degrees",
    href: "/unverified/degrees",
    activeIcon: IMAGES.user_icon_active,
    inactiveIcon: IMAGES.user_icon,
  },
  {
    label: "Edit Requests",
    href: "/edit/requests",
    activeIcon: IMAGES.users_icon_active,
    inactiveIcon: IMAGES.users_icon,
  },
];


export const navItemsHec: NavItem[] = [
  {
    label: "All Degrees",
    href: "/all/degrees",
    activeIcon: IMAGES.bar_icon_active,
    inactiveIcon: IMAGES.bar_icon,
  },
  {
    label: "Verified Degrees",
    href: "/verified/degrees",
    activeIcon: IMAGES.verified_icon_active,
    inactiveIcon: IMAGES.verified_icon,
  },
  {
    label: "Unverified Degrees",
    href: "/unverified/degrees",
    activeIcon: IMAGES.user_icon_active,
    inactiveIcon: IMAGES.user_icon,
  },
];

export const navItemsStudent: NavItem[] = [
  {
    label: "View Details",
    href: "/view/details",
    activeIcon: IMAGES.user_icon_active,
    inactiveIcon: IMAGES.user_icon,
  },
];
