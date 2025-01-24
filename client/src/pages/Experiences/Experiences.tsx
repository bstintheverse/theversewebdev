// styling
import "./Experiences.scss";

// component
import GameCard from "../../components/Cards/GameCard/GameCard";

// library
import { Helmet, HelmetProvider } from "react-helmet-async";

// data
import { games } from "../../data/games";

export default function ExperiencesPage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>
                    The Verse | Experiences
                </title>
            </Helmet>
            <section className="experiences">
                <article className="experience__cards">
                    <ul className="experience__card-list">
                        {games.map((game) => (
                            <GameCard
                                key={game.id}
                                id={game.id}
                                name={game.name}
                                video={game.video}
                                image={game.image}
                                alt={game.alt}
                                description={game.description}
                                link={game.link}
                            />
                        ))}
                    </ul>
                </article>
            </section>
        </HelmetProvider>
    );
};