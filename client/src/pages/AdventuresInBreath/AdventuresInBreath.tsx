// styling
import "./AdventuresInBreath.scss";

// data
import { AdventuresInBreathInfo } from "../../data/adventuresInBreath";
import GameTrailerCard from "../../components/Cards/GameTrailerCard/GameTrailerCard";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function AdventuresInBreathPage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>
                    The Verse | Adventures in Breath
                </title>
            </Helmet>

            <section className="aib">
                {AdventuresInBreathInfo.headers.map((header) => (
                    <div 
                        className="aib__container"
                        key={header.id}
                    >
                        <h2 className="aib__header">
                            {header.title}
                        </h2>

                        <p className="aib__text">
                            {header.content}
                        </p>
                        
                        <div className={`aib__assets-container--${header.id}`}>
                            {header.assets?.map((asset) => (
                                <img
                                    className={`aib__image--${header.id}`}
                                    src={asset.src}
                                    alt={asset.alt}
                                />
                            ))}
                        </div>

                        {header.id === 2 ? (
                            <GameTrailerCard />
                        ): null}
                        

                        {header.id === 3 ? (
                            <div className="aib__play-island-tour">
                                <iframe src="https://itch.io/embed/3175754" />
                            </div>
                        ) : null }
                    </div>
                ))}
            </section>
        </HelmetProvider>
    );
};