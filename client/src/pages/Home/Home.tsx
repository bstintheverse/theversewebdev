// styling
import "./Home.scss";

// component
import CustomCarousel from "../../components/Carousel/CustomCarousel";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <section className="home">
            <div className="full-width-bg-wrapper full-width-bg-wrapper--blue">
                <article className="home__video-container">
                    <video className="home__video" controls>
                        <source src="/assets/videos/placeholder-video.mp4" />
                    </video>
                </article>
            </div>
            
            <div className="home__work">
                <h2 className="home__work-header">
                    What We're Building
                </h2>

                <CustomCarousel />
            </div>

            <div className="home__community">
                <div className="home__community-content">
                    <p className="home__community-text home__community-text--bold">
                        Make an Impact
                    </p>

                    <h2 className="home__community-header">
                        Join Our Community
                    </h2>

                    <p className="home__community-text">
                        The Verse is a global community of inspired gamers, developers, designers,
                        scientists, artists, visionaries, teachers, and students who join together
                        to passionately contribute their wide ranging expertise to invent experiences
                        that enhance human flourishing.
                    </p>

                    <Link className="home__community-button-link" to="/about-us">
                        <p className="home__community-button">
                            Learn More
                        </p>
                    </Link>
                </div>

                <div className="home__community-image-container">
                    <img 
                        className="home__community-image"
                        src="/assets/images/placeholder-image.jpg"
                        alt="The Verse team members in a video meeting"
                    />
                </div>
            </div>

            {/* <div className="home__support">
                <div className="home__support-container">
                    <h2 className="home__support-heading">
                        Support The Verse
                    </h2>

                    <p className="home__support-text">
                        Your contribution go directly towards a team of 50 people who donate around 20 hours
                        per week to build games and experiences that impact health and consciousness.
                    </p>

                    <p className="home__support-button">
                        Donate
                    </p>
                </div>
            </div> */}
        </section>
    )
};