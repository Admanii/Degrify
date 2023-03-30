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
                        src= {IMAGES.avatar_icon}
                        height={55}
                        width={55}
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

