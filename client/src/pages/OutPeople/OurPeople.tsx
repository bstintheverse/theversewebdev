//styling
import "./OurPeople.scss";

export default function OurPeoplePage() {
    return (
        <section className="our-people">
            <div className="our-people__container">
                <h2 className="our-people__header">
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
                    <li className="card card--top">
                        <div className="card__wrapper">
                            <img 
                                className="card__image"
                                src="/assets/images/placeholder-square.jpg"
                                alt="Photo of Ben Simon-Thomas"
                            />

                            <h3 className="card__member-name">
                                Ben Simon-Thomas
                            </h3>
                            
                            <p className="card__member-role">
                                Founder and Executive Director
                            </p>

                            <p className="card__member-location">
                                Berkeley, CA
                            </p>
                        </div>

                        <h4 className="card__member-description">
                            About
                        </h4>

                        <p className="card__text">
                        Creating games, experiences, and rituals that uplift humanity. || 
                        Member Catalyst 2030 & Coordinator IDG Berkeley Uplift Lab. || 
                        World Builder - Team Builder - Connector/Collaborator - Human
                        </p>
                    </li>

                    <li className="our-people__item">

                    </li>
                </ul>
            </section>
        </section>
    )
};