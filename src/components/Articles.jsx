import React from "react";
import currency from "../images/image-currency.jpg";
import restaurant from "../images/image-restaurant.jpg";
import plane from "../images/image-plane.jpg";
import confetti from "../images/image-confetti.jpg";

export const Articles = () => {
    const articlesList = [
        {
            name: "By Claire Robinson",
            title: "Receive money in any currency with no fees",
            desc: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single",
            img: `${currency}`,
        },
        {
            name: "By Wilson Hutton",
            title: "Treat yourself without worrying about money",
            desc: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you",
            img: `${restaurant}`,
        },
        {
            name: "By Wilson Hutton",
            title: "Take your Easybank card wherever you go",
            desc: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you",
            img: `${plane}`,
        },
        {
            name: "By Claire Robinson",
            title: "Our invite-only Beta accounts are now live!",
            desc: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site",
            img: `${confetti}`,
        },
    ];
    return (
        <div className='padding-x py-16 mx-auto bg-VeryLightGray'>
            <h3 className='pb-8 text-3xl text-align'>Latest Articles</h3>
            <div className='max-w-3xl mx-auto responsive-grid sm:gap-x-12 lg:gap-x-5 lg:max-w-7xl'>
                {articlesList.map(({ name, title, desc, img }) => (
                    <div
                        data-aos={"zoom-in-up"}
                        key={title}>
                        <article className='border-4 border-LightGrayishBlue shadow-xl rounded-lg transition-transform duration-500 hover:scale-105'>
                            <img
                                src={img}
                                alt={title}
                                className='w-full h-44 object-cover'
                            />
                            <div className='py-4 px-5 bg-white lg:min-h-56'>
                                <span className='text-xs'>{name}</span>
                                <h6 className='py-2 text-lg font-semibold tracking-tight leading-tight line-clamp-3'>{title}</h6>
                                <p className='text-xs sm:text-sm line-clamp-6'>{desc}</p>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </div>
    );
};
