// styling
import "./Hero.scss";

export default function Hero() {
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
            
            <h1 className="hero__header">
                What if games and digital experiences could make you feel 
                happier, healthier, and more hopeful?
            </h1>
        </section>
    )
};