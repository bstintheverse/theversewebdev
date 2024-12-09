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