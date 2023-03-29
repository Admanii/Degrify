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
                "bg-white text-zinc-500": true, // colors
                "flex items-center": true, // layout
                "w-full fixed z-10 px-4 shadow-sm h-16": true, //positioning & styling
            })}
        >
            <div className="flex justify-center items-center">
                <div><img src={IMAGES.degrify_logo} alt="logo" /> </div>
                <div className="font-bold text-lg text-black">DegriFy</div>
            </div>

            <div className="flex-grow"></div> {/** spacer */}
            <button className="md:hidden" onClick={props.onMenuButtonClick}>
                <Bars3Icon className="h-6 w-6" />
            </button>
        </nav>
    );
};
export default Navbar;

