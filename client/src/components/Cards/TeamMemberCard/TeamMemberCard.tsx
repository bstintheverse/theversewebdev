// styling
import "./TeamMemberCard.scss";

// types
interface TeamMemberCardProps {
    id: number;
    image: string;
    alt: string;
    name: string;
    role: string;
    location: string;
    description?: string;
};

export function TeamMemberFounderCard({ id, image, alt, name, role, location, description }: TeamMemberCardProps): JSX.Element {
    return (
        <li className="member-card member-card__founder">
            <div className="member-card__founder-wrapper-info">
                <img 
                    className="member-card__image"
                    src={image}
                    alt={alt}
                />

                <h3 className="member-card__founder-name">
                    {name}
                </h3>
                
                <p className="member-card__founder-role">
                    {role}
                </p>

                <p className="member-card__founder-location">
                    {location}
                </p>
            </div>

            <div className="member-card__founder-wrapper-description">
                <h4 className="member-card__founder-subheader">
                    About
                </h4>

                <p className="member-card__founder-description">
                    {description}
                </p>
            </div>
        </li>
    );
};

export function TeamMemberCard({ id, image, alt, name, role, location }: TeamMemberCardProps): JSX.Element {
    return (
        <li className="member-card">
            <img 
                className="member-card__image"
                src={image}
                alt={alt}
            />

            <h3 className="member-card__member-name">
                {name}
            </h3>
            
            <p className="member-card__member-role">
                {role}
            </p>

            <p className="member-card__member-location">
                {location}
            </p>
        </li>
    );
};