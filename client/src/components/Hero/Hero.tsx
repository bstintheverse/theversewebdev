// styling
import "./Hero.scss";

// data
import { games } from "../../data/games";

// hooks
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

// type
interface headerTitleProps {
    id: number;
    path: string;
    subheader: string;
};

export default function Hero() {
    const { gameId } = useParams();
    const location = useLocation();

    const [header, setHeader] = useState<string>("");

    useEffect(() => {
        const getHeader = () => {
            console.log("Current Path:", location.pathname);
            console.log("Game ID:", gameId);

            
            if (location.pathname.startsWith("/experiences/game/") && gameId) {
                const game = games.find((g) => g.id === Number(gameId));

                if (game) {
                    return game.name;
                } else {
                    return "Game not found."
                };
            };

            switch (location.pathname) {
                case "/":
                    return "What if games and digital experiences could make you feel happier, healthier, and more hopeful?";
                case "/about-us":
                    return "About Us";
                case "/experiences":
                    return "Games & Digital Experiences";
                case "/our-people":
                    return "Our People";
                case "/contact-us":
                    return "Contact Us";
                case "/donate":
                    return "Donate";
                case "/404":
                    return "Page Not Found";
                default:
                    return "";
            };
        };
        setHeader(getHeader());
    }, [location.pathname, gameId]);

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
                    {header}
                </h1>
            </div>
        </section>
    )
};