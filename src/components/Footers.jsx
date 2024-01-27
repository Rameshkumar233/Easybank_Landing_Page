import React from "react";
import logoLight from "../images/logo-light.svg";
import { Facebook, Instagram, Pinterest, Twitter, Youtube } from "./SocialIcons";
import { InviteButton } from "./Navigation";

function Footers() {
    return (
        <footer className='bg-DarkBlue'>
            <div className='padding-x py-8 grid grid-cols-1 justify-items-center xs:grid-cols-2 lg:grid-cols-3 lg:justify-items-start'>
                <div className='flex flex-col space-y-10'>
                    <img
                        src={logoLight}
                        alt='logo-light'
                        width={160}
                    />
                    {/* Social Links */}
                    <ul className='flex items-center space-x-4 '>
                        <li>
                            <Facebook />
                        </li>
                        <li>
                            <Youtube />
                        </li>
                        <li>
                            <Twitter />
                        </li>
                        <li>
                            <Pinterest />
                        </li>
                        <li>
                            <Instagram />
                        </li>
                    </ul>
                </div>
                {/* Quick Links */}
                <ul className='mt-8 text-white text-sm text-center space-y-3 xs:mt-0 xs:text-left xs:grid xs:grid-cols-2 xs:gap-y-3 xs:space-y-0 lg:gap-x-5'>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Support</li>
                    <li>Privacy Policy</li>
                </ul>
                <div className='mt-8 text-sm flex flex-col items-center xs:col-span-2 lg:col-span-1 lg:justify-self-end lg:items-end lg:mt-0'>
                    <InviteButton />
                    <p className='mt-5 whitespace-nowrap'>&#169; Easybank.All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footers;
