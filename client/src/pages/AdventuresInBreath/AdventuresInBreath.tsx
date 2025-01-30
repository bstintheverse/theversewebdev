// styling
import "./AdventuresInBreath.scss";

// data
import { AdventuresInBreathInfo } from "../../data/adventuresInBreath";
import GameTrailerCard from "../../components/Cards/GameTrailerCard/GameTrailerCard";

export default function AdventuresInBreathPage() {
    return (
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
                                className={`aib__image--${asset.id}`}
                                src={asset.src}
                                alt={asset.alt}
                            />
                        ))}
                    </div>

                    {header.id === 2 ? (
                        <GameTrailerCard />
                    ): null}
                </div>
            ))}
        </section>
    );
};