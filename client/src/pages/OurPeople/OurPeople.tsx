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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <section className="our-people__team">
                <ul className="card__list">
                    {teamMembers.map((teamMember: teamMemberProps) => (
                        teamMember.id === 1 || teamMember.id === 2 ? (
                            <li className="card card--top">
                                <div className="card__wrapper">
                                    <img 
                                        className="card__image"
                                        src={teamMember.image}
                                        alt={teamMember.alt}
                                    />

                                    <h3 className="card__member-name card__member-name--white card__member-name--lg">
                                        {teamMember.name}
                                    </h3>
                                    
                                    <p className="card__member-role card__member-role--white card__member-role--lg">
                                        {teamMember.role}
                                    </p>

                                    <p className="card__member-location card__member-location--white card__member-location--lg">
                                        {teamMember.location}
                                    </p>
                                </div>

                            <h4 className="card__member-description-header">
                                About
                            </h4>

                            <p className="card__description">
                                {teamMember.description}
                            </p>
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