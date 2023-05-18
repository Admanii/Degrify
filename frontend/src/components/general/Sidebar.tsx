// components/layout/Sidebar.tsx
import React, { useRef } from "react";
import { navItemsUni, navItemsHec, navItemsStudent } from "./navItems";
import { useOnClickOutside } from "usehooks-ts";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IMAGES } from "../../constants/images";
import { classNames } from "../../utility/util";
import { logout } from "../../store/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
// define a NavItem prop
export type NavItem = {
    label: string;
    href: string;
    activeIcon: any;
    inactiveIcon: any;
};
// add NavItem prop to component prop
type Props = {
    open: boolean;
    navItems?:
    {
        uni: NavItem[],
        hec: NavItem[],
        student: NavItem[]
    };
    setOpen(open: boolean): void;
};


const Sidebar = ({ open, navItems = { uni: navItemsUni, hec: navItemsHec, student: navItemsStudent }, setOpen }: Props) => {

    const { userInfo } = useSelector((state: any) => state.auth)

    var items: NavItem[] = [];
    var path = '';
    var userRole = userInfo?.user?.userRole ?? '';

    if (userRole === 'HEC') {
        items = navItems.hec;
        path = "/hec/dashboard/";
    }
    else if (userRole === 'UNIVERSITY') {
        items = navItems.uni
        path = "/uni/dashboard/";
    }
    else if (userRole === 'STUDENT') {
        items = navItems.student
        path = "/student/dashboard";
    }

    const dispatch = useDispatch<AppDispatch>();


    const logoutHandler = async () => {
        console.log("Logout clicked");
        await dispatch(logout())
        navigate("/login");
    };

    const navigate = useNavigate()

    const location = useLocation();
    const currentUrl = location.pathname;
    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, (e) => {
        setOpen(false);
    });
    return (
        <div
            className={classNames(
                "flex flex-col justify-between", // layout
                "bg-gray-50 text-zinc-50", // colors
                "md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed", // positioning
                "md:h-[calc(100vh_-_64px)] h-full w-[300px]", // for height and width
                "transition-transform .3s ease-in-out md:-translate-x-0", //animations
                !open ? "-translate-x-full" : "" //hide sidebar to the left when closed
            )}
            ref={ref}
        >

            <nav className="md:sticky top-0 md:top-16">

                {userRole == 'UNIVERSITY' && (
                    <div>
                        <button onClick={() => { navigate('/AddStudent') }} className="p-2 mx-3 mt-8 flex w-11/12 justify-center items-center gap-x-3 bg-black rounded-lg hover:bg-gray-900">
                            <div><img src={IMAGES.plus_icon} alt="plus" /></div>
                            <div className="font-">Register New Student</div>
                        </button>
                        {/* <button className="p-2 mx-3 mt-4 flex w-11/12 justify-center items-center gap-x-3 bg-black rounded-lg">
                            <div><img src={IMAGES.plus_icon} alt="plus" /></div>
                            <div className="font-">Add New Degree</div>
                        </button> */}
                    </div>
                )}

                {userRole === 'HEC' && (
                    <button onClick={() => { navigate('/AddUniversity') }}className="p-2 mx-3 mt-8 flex w-11/12 justify-center items-center gap-x-3 bg-black rounded-lg hover:bg-gray-900">
                        <div><img src={IMAGES.plus_icon} alt="plus" /></div>
                        <div className="font-">Add New University</div>
                    </button>
                )}

                {userRole === 'STUDENT' && (
                    <button className="p-2 mx-3 mt-8 flex w-11/12 justify-center items-center gap-x-3 bg-black rounded-lg">
                        <div><img src={IMAGES.plus_icon} alt="plus" /></div>
                        <div className="font-">Add New Request</div>
                    </button>
                )}


                <Link to={path}>
                    <div className={classNames(
                        "text-gray-600 text-base", //colors
                        "flex gap-4 items-center", //layout
                        "transition-colors duration-300", //animation
                        "rounded-md p-2 mx-6 mt-4", //self style
                        "/uni/dashboard/" === currentUrl ? "font-bold text-black" : "font-medium"
                    )}>
                        <img src={
                            path === currentUrl ? IMAGES.home_active_icon : IMAGES.home_icon
                        }></img> Dashboard
                    </div>
                </Link>

                <div className={classNames(
                    "text-gray-400 font-medium text-base", //colors
                    "flex gap-4 items-center", //layout
                    "rounded-md p-2 mx-6 mt-2", //self style
                )}>
                    ANALYTICS
                </div>
                {/* nav items */}
                <ul className="flex mb-1 flex-col gap-1">
                    {items.map((item, index) => {
                        return (
                            <Link key={index} to={item.href}>
                                <li
                                    className={classNames(
                                        "text-gray-600 text-base", //colors
                                        "flex gap-4 items-center", //layout
                                        "transition-colors duration-300", //animation
                                        "rounded-md p-2 mx-6", //self style
                                        item.href === currentUrl ? "font-bold text-black" : "font-medium"
                                    )}
                                >
                                    <img src={
                                        item.href === currentUrl ? item.activeIcon : item.inactiveIcon
                                    }></img> {item.label}
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </nav>
            {/* account  */}
            <div className="border-t border-gray-700 p-4">
                <div className="flex gap-4 items-center mx-5 cursor-pointer
                " onClick={logoutHandler}>
                    <img src={IMAGES.logout_icon}></img>
                    {/* <img
                        src={
                            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        }
                        height={36}
                        width={36}
                        alt="profile image"
                        className="rounded-full"
                    /> */}
                    <div className="flex text-gray-600 font-medium text-base">
                        LOGOUT
                    </div>
                    {/* <div className="flex flex-col ">
                        <span className="text-indigo-50 my-0">Tom Cook</span>
                        <Link to="/" className="text-indigo-200 text-sm">
                            View Profile
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    );
};
export default Sidebar;