import React from "react";
import onlineBanking from "../images/icon-online.svg";
import simpleBudgeting from "../images/icon-budgeting.svg";
import onboarding from "../images/icon-onboarding.svg";
import openApi from "../images/icon-api.svg";

export const WhySection = () => {
    const easybankBenefits = [
        {
            title: "Online Banking",
            desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
            icon: `${onlineBanking}`,
        },
        {
            title: "Simple Budgeting",
            desc: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
            icon: `${simpleBudgeting}`,
        },
        {
            title: "Fast Onboarding",
            desc: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
            icon: `${onboarding}`,
        },
        {
            title: "Open API",
            desc: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
            icon: `${openApi}`,
        },
    ];

    return (
        <>
            <div className='padding-x py-20 bg-LightGrayishBlue text-align'>
                <div
                    className='max-w-2xl mx-auto lg:mx-0'
                    data-aos='fade'>
                    <h2 className='text-4xl'>Why choose Easybank?</h2>
                    <p className='py-6'>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                </div>
                <div className='pt-8 responsive-grid gap-x-8'>
                    {easybankBenefits.map(({ title, desc, icon }) => (
                        <div key={title}>
                            <div data-aos='zoom-in'>
                                <img
                                    src={icon}
                                    alt={title}
                                    className='mx-auto lg:mx-0 transition-transform duration-500 last:hover:scale-110'
                                />
                            </div>
                            <h4 className='py-6 text-2xl font-medium whitespace-nowrap'>{title}</h4>
                            <p className='text-[16px] sm:line-clamp-4 lg:line-clamp-5'>{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
