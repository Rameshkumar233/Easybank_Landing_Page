import React from "react";
import bgIntroDesktop from "../images/bg-intro-desktop.svg";
import bgIntroMobile from "../images/bg-intro-mobile.svg";
import mockups from "../images/image-mockups.png";
import { InviteButton } from "./Navigation";

export const HeroSection = () => {
    return (
        <>
            <div className='text-align flex flex-col-reverse lg:justify-between lg:flex-row xl:h-[566px] lg:h-[500px]'>
                <div className='padding-x pb-20 pt-12 lg:max-w-xl lg:mt-24 lg:pb-0 xl:mt-32 xl:max-w-2xl'>
                    <header>
                        <h1 className='text-4xl lg:text-5xl xl:text-[52px]'>Next generation digital banking</h1>
                    </header>
                    <p className='py-6 text-sm sm:text-base'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <InviteButton />
                </div>

                <div>
                    {/* Desktop Background */}
                    <img
                        src={bgIntroDesktop}
                        alt='desktop-intro'
                        className='hidden -z-20 lg:block lg:absolute lg:-top-[26%] lg:-right-[40%] xl:-top-[33%] xl:-right-[36%]'
                    />

                    {/* Mobile Background */}
                    <img
                        src={bgIntroMobile}
                        alt='mobile-intro'
                        className='w-full h-96 xs:h-[620px] sm:h-[700px] lg:hidden'
                    />
                    <div className='w-full flex justify-center lg:block lg:w-auto absolute -top-20 sm:-top-56 lg:-top-6 lg:-right-24 xl:-top-10 xl:-right-28'>
                        <div className=''>
                            <img
                                src={mockups}
                                alt='mockup'
                                className='h-full lg:h-[740px] xl:h-[850px]'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
