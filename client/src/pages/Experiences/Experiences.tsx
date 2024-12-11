// styling
import "./Experiences.scss";

// data
import { games } from "../../data/games";

// component
import GameCard from "../../components/Cards/GameCard/GameCard";

export default function ExperiencesPage() {
    return (
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
    );
};