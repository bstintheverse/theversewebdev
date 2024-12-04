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
            
            <div className="hero__content">
                <h1 className="hero__header">
                    The Verse
                </h1>

                <h2 className="hero__subheader">
                    What if games and digital experiences could make you feel <span className="hero__subheader--uppercase">happier, healthier,</span> and more <span className="hero__subheader--uppercase">hopeful</span>?
                </h2>
            </div>
        </section>
    )
};