// components/layout/Navbar.tsx
import React, { Children } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { IMAGES } from "../../constants/images";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

type Props = {
    onMenuButtonClick(): void;
    children?: React.ReactNode;
    isButton: boolean;
};
const Navbar = (props: Props) => {
    const navigate = useNavigate()

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
            {props.isButton && (
                <div className="hidden md:block">
                    <Button className='rounded-lg' buttonText="Sign In" width={130} onClick={() => navigate('/login')} />
                </div>
            )}

            <div className="flex-grow md:hidden"></div> {/** spacer */}
            <button className="md:hidden" onClick={props.onMenuButtonClick}>
                <Bars3Icon className="h-6 w-6" />
            </button>
        </nav>
    );
};
export default Navbar;

