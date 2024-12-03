// styling
import "./Home.scss";

export default function HomePage() {
    return (
        <section className="home">
            <article className="home__video-container">
                <video className="home__video" controls>
                    <source src="/assets/videos/placeholder-video.mp4" />
                </video>
            </article>
        </section>
    )
};