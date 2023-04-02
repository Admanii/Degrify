// components/layout/Sidebar.tsx
import React, { useRef } from "react";
import classNames from 'classnames';
import { navItems } from "./navItems";
import { useOnClickOutside } from "usehooks-ts";
import { Link } from "react-router-dom";
import { IMAGES } from "../../constants/images";
// define a NavItem prop
export type NavItem = {
    label: string;
    href: string;
    icon: any;
};
// add NavItem prop to component prop
type Props = {
    open: boolean;
    navItemss?: NavItem[];
    setOpen(open: boolean): void;
};
const Sidebar = ({ open, navItemss = navItems, setOpen }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, (e) => {
        setOpen(false);
    });
    return (
        <div
            className={classNames({
                "flex flex-col justify-between": true, // layout
                "bg-gray-50 text-zinc-50": true, // colors
                "md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed": true, // positioning
                "md:h-[calc(100vh_-_64px)] h-full w-[300px]": true, // for height and width
                "transition-transform .3s ease-in-out md:-translate-x-0": true, //animations
                "-translate-x-full ": !open, //hide sidebar to the left when closed
            })}
            ref={ref}
        >

            <nav className="md:sticky top-0 md:top-16">

                <button className="p-2 mx-3 mt-6 flex w-11/12 justify-center items-center gap-x-3 bg-black rounded-lg">
                    <div><img src={IMAGES.plus_icon} alt="plus" /></div>
                    <div className="font-">Register New Student</div>
                </button>

                <div className={classNames({
                    "text-gray-600 font-medium hover:bg-gray-800 hover:text-gray-100 text-base": true, //colors
                    "flex gap-4 items-center": true, //layout
                    "transition-colors duration-300": true, //animation
                    "rounded-md p-2 mx-6 mt-4": true, //self style
                })}>
                    <img src={IMAGES.bar_icon}></img> Dashboard
                </div>

                <div className={classNames({
                    "text-gray-400 font-medium text-base": true, //colors
                    "flex gap-4 items-center": true, //layout
                    "rounded-md p-2 mx-6 mt-2": true, //self style
                })}>
                    ANALYTICS
                </div>
                {/* nav items */}
                <ul className="flex mb-1 flex-col gap-1">
                    {navItemss.map((item, index) => {
                        return (
                            <Link key={index} to={item.href}>
                                <li
                                    className={classNames({
                                        "text-gray-600 font-medium hover:bg-gray-800 hover:text-gray-100 text-base": true, //colors
                                        "flex gap-4 items-center": true, //layout
                                        "transition-colors duration-300": true, //animation
                                        "rounded-md p-2 mx-6": true, //self style
                                    })}
                                >
                                    <img src={item.icon}></img> {item.label}
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </nav>
            {/* account  */}
            <div className="border-t border-gray-700 p-4">
                <div className="flex gap-4 items-center mx-5 cursor-pointer">
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