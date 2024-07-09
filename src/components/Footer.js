'use client';
import React from "react";
import SiteLinks from './SiteLinks';
import ShoppingInfo from "./ShoppingInfo";
import Socials from "./Socials";

class Footer extends React.Component {
    render() {
        return (
            <div className="bg-customGray flex flex-col justify-content fixed bottom-0 px-2 w-full">
                <div className="flex justify-between items-center p-1">
                    <SiteLinks />
                    <ShoppingInfo />
                    <Socials />
                </div>
                <footer className="text-white pb-4 text-center">
                    &copy; {new Date().getFullYear()} Timbu. All right reserved
                </footer>
            </div>

        );
    }
}

export default Footer;