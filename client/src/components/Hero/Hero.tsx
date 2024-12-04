// styling
import "./Hero.scss";

import { useLocation } from "react-router-dom";

export default function Hero() {
    const subheaderTitles = [
        {
            id: 1,
            path: "/",
            subheader: "What if games and digital experiences could make you feel happier, healthier, and more hopeful?"
        },
        {
            id: 2,
            path: "/about-us",
            subheader: "About Us"
        },
        {
            id: 3,
            path: "/games",
            subheader: "Games & Digital Experiences"
        },
        {
            id: 4,
            path: "/our-people",
            subheader: "Our People"
        },
        {
            id: 5,
            path: "/contact-us",
            subheader: "Contact Us"
        }
    ];

    const location = useLocation();
    const currentSubheader = subheaderTitles.find(title => title.path === location.pathname);

    return (
        <section className="hero">
            <video
                playsInline
                autoPlay
                muted
                loop
                className="hero__video"
            >
                <source src="/assets/videos/hero.mp4" type="video/mp4" />
            </video>
            
            <div className="hero__content">
                <h1 className="hero__header">
                    The Verse
                </h1>

                <h2 className="hero__subheader">
                    {currentSubheader ? currentSubheader.subheader : ""}
                </h2>
            </div>
        </section>
    )
};