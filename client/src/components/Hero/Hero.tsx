// styling
import "./Hero.scss";

// hook
import { useLocation } from "react-router-dom";

// type
interface headerTitleProps {
    id: number;
    path: string;
    subheader: string;
};

export default function Hero() {
    const headerTitles: headerTitleProps[] = [
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
            path: "/experiences",
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
        },
        {
            id: 6,
            path: "/donate",
            subheader: "Donate"
        },
        {
            id: 7,
            path: "/404",
            subheader: "Oops! Page not found!"
        }
    ];

    const location = useLocation();
    const currentHeader = headerTitles.find(title => title.path === location.pathname);

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
                    {currentHeader ? currentHeader.subheader : ""}
                </h1>
            </div>
        </section>
    )
};