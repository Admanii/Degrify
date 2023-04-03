// components/layout/defaultNavItems.tsx
import React from "react";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
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
    icon: IMAGES.bar_icon,
  },
  {
    label: "Add Student Details",
    href: "/student/add/details",
    icon: IMAGES.user_icon,
  },
  {
    label: "All Degrees",
    href: "/degrees",
    icon: IMAGES.users_icon,
  },
  {
    label: "Verified Degrees",
    href: "/verified/degrees",
    icon: IMAGES.users_icon,
  },
  {
    label: "Unverified Degrees",
    href: "/unverified/degrees",
    icon: IMAGES.users_icon,
  },
  {
    label: "Edit Requests",
    href: "/edit/requests",
    icon: IMAGES.user_icon,
  },
];
