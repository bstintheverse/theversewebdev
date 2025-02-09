// styling
import "./GameCard.scss";

// component
import { Link } from "react-router-dom";

// types
interface GameCardProps {
    id: number;
    name: string;
    image?: string;
    alt?: string;
    video?: string;
    description: string;
    link: string;
};

export default function GameCard({ id, name, video, image, alt, description, link }: GameCardProps): JSX.Element {
    return (
        <li className="game-card__item" key={id}>
            <div className="game-card__container">
                <h2 className="game-card__header">
                    {name}
                </h2>

                {video ? (
                    <video className="game-card__video" controls>
                        <source src={video} />
                    </video>
                ) : image ? (
                    <img 
                        className="game-card__image"
                        src={image}
                        alt={alt}
                    />
                ) : null}

                <p className="game-card__description">
                    {description}
                </p>
            </div>

            <div className="game-card__wrapper">
                <Link to={link}>
                    <p className="game-card__button">
                        Learn More
                    </p>
                </Link>
            </div>
        </li>
    );
};