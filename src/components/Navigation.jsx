import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import menuIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";

export const InviteButton = () => {
    return <button className={`bg-gradient-to-r from-LimeGreen to-BrightCyan px-5 py-2 rounded-full text-white font-semibold tracking-wide hover:opacity-80`}>Request Invite</button>;
};

export const Navigation = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#/");
    const handleMenu = () => {
        setNavOpen(!navOpen);
    };
    const handleActiveLink = (link) => {
        setActiveLink(link);
    };
    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 1024) {
                setNavOpen(false);
            }
        });
    });
    const Links = [
        { path: "#/", label: "Home" },
        { path: "#/about", label: "About" },
        { path: "#/contact", label: "Contact" },
        { path: "#/blog", label: "Blog" },
        { path: "#/careers", label: "Careers" },
    ];

    return (
        <>
            {/* Navigation Header - Desktop */}
            <div className='padding-x py-4 mx-auto bg-white shadow-md flex justify-between items-center relative z-50'>
                <img
                    src={logo}
                    alt='logo'
                />
                <nav className='hidden lg:block'>
                    <ul className='text-GrayishBlue flex space-x-7'>
                        {Links.map(({ path, label }) => (
                            <li key={label}>
                                <a
                                    href={path}
                                    className={`${activeLink == path && "text-DarkBlue font-bold"}`}
                                    onClick={() => handleActiveLink(path)}>
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='hidden lg:block'>
                    <InviteButton />
                </div>
                {navOpen ? (
                    <img
                        src={closeIcon}
                        alt='close'
                        className='cursor-pointer lg:hidden'
                        onClick={handleMenu}
                    />
                ) : (
                    <img
                        src={menuIcon}
                        alt='menu'
                        className='cursor-pointer lg:hidden'
                        onClick={handleMenu}
                    />
                )}
            </div>

            {/* Mobile Navigation */}
            {navOpen && (
                <div className='w-full h-full bg-DarkBlue bg-opacity-90 absolute top-[68px] left-0 z-20'>
                    <div className='mt-7 flex justify-center'>
                        <ul className='w-10/12 py-5 bg-VeryLightGray text-DarkBlue text-center font-medium rounded-md space-y-4 sm:w-1/2'>
                            {Links.map(({ path, label }) => (
                                <li key={label}>
                                    <a
                                        href={path}
                                        className={`${activeLink == path && "font-bold"}`}
                                        onClick={() => handleActiveLink(path)}>
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};
