// components/layout/Navbar.tsx
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { IMAGES } from "../../constants/images";
type Props = {
    onMenuButtonClick(): void;
};
const Navbar = (props: Props) => {
    return (
        <nav
            className={classNames({
                "bg-gray-50 text-zinc-500": true, // colors
                "flex items-center justify-between": true, // layout
                "w-full fixed z-10 px-4 shadow-sm h-16": true, //positioning & styling
            })}
        >
                <div className="flex items-center gap-x-1">
                    <div><img src={IMAGES.degrify_logo} alt="logo" /> </div>
                    <div className="font-bold text-2xl text-black">DegriFy</div>
                </div>
                <div className="hidden md:block">
                    <img
                        src={
                            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        }
                        height={40}
                        width={40}
                        alt="avatar"
                        className="rounded-full"
                    />
                </div>

            <div className="flex-grow md:hidden"></div> {/** spacer */}
            <button className="md:hidden" onClick={props.onMenuButtonClick}>
                <Bars3Icon className="h-6 w-6" />
            </button>
        </nav>
    );
};
export default Navbar;

