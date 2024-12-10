import "./OurPeople.scss";

import { teamMembers, teamMemberProps } from "../../data/teamMembers";


export default function OurPeoplePage() {
    return (
        <section className="our-people">
            <div className="our-people__container">
                <h2 className="our-people__subheader">
                    Meet The Team
                </h2>

                <p className="our-people__text">
                    The Verse is a global community of inspired gamers, developers, designers, 
                    scientists, artists, visionaries, teachers, and students who join together to 
                    passionately contribute their wide-ranging expertise to invent experiences that 
                    enhance human flourishing. We are committed to “engaging in work that creates 
                    greater happiness, wisdom, and well-being, and relieves suffering in ourselves 
                    and others.” We think of The Verse as a practice.
                </p>
            </div>

            <section className="our-people__team">
                <ul className="card__list">
                    {teamMembers.map((teamMember: teamMemberProps) => (
                        teamMember.id === 1 || teamMember.id === 2 ? (
                            <li className="card card__top">
                                <div className="card__top-wrapper-info">
                                    <img 
                                        className="card__image"
                                        src={teamMember.image}
                                        alt={teamMember.alt}
                                    />

                                    <h3 className="card__top-member-name">
                                        {teamMember.name}
                                    </h3>
                                    
                                    <p className="card__top_member-role">
                                        {teamMember.role}
                                    </p>

                                    <p className="card__top-member-location">
                                        {teamMember.location}
                                    </p>
                                </div>

                                <div className="card__top-wrapper-description">
                                    <h4 className="card__top-member-header">
                                        About
                                    </h4>

                                    <p className="card__top-member-description">
                                        {teamMember.description}
                                    </p>
                                </div>
                            </li>
                        ) : (
                        <li className="card">
                            <img 
                                className="card__image"
                                src={teamMember.image}
                                alt={teamMember.alt}
                            />

                            <h3 className="card__member-name">
                                {teamMember.name}
                            </h3>
                            
                            <p className="card__member-role">
                                {teamMember.role}
                            </p>

                            <p className="card__member-location">
                                {teamMember.location}
                            </p>
                        </li>
                        )
                    ))}
                </ul>
            </section>
        </section>
    )
};