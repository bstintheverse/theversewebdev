//styling
import "./Experiences.scss";

import { games } from "../../data/games";
import { Link } from "react-router-dom";

export default function ExperiencesPage() {
    return (
        <section className="experiences">
            <article className="experience__cards">
                <ul className="experience__card-list">
                    {games.map((game) => {
                        return (
                            <li className="experience__card-item">
                                <div className="experience__container">
                                <h2 className="experience__header">
                                    {game.name}
                                </h2>
                                    {game.video ? (
                                        <video className="experience__video" controls>
                                            <source src={game.video} />
                                        </video>
                                    ) : game.image ? (
                                        <img 
                                            className="experience__image"
                                            src={game.image}
                                            alt={game.alt}
                                        />
                                    ) : null}

                                    <p className="experience__description">
                                        {game.description}
                                    </p>
                                </div>

                                <div className="experience__wrapper">
                                    <Link to={game.link} className="experience__link">
                                        <p className="experience__button">
                                            Learn More
                                        </p>
                                    </Link>
                                </div>
                            </li>
                        )
                    })}
                    
                </ul>
            </article>
        </section>
    )
};