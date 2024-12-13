// styling
import "./OurPeople.scss";

// components
import { TeamMemberFounderCard } from "../../components/Cards/TeamMemberCard/TeamMemberCard";
import { TeamMemberCard } from "../../components/Cards/TeamMemberCard/TeamMemberCard";

// library
import { Helmet, HelmetProvider } from "react-helmet-async";

// data
import { teamMembers, teamMemberProps } from "../../data/teamMembers";

export default function OurPeoplePage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>
                    The Verse | Our People
                </title>
            </Helmet>
            
            <section className="our-people">
                <div className="full-width-bg-wrapper full-width-bg-wrapper--black">
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
                </div>

                <section className="our-people__team">
                    <ul className="our-people__card-list">
                        {teamMembers.map((teamMember: teamMemberProps) => (
                            teamMember.id === 1 || teamMember.id === 2 ? (
                                <TeamMemberFounderCard
                                    key={teamMember.id}
                                    id={teamMember.id}
                                    image={teamMember.image}
                                    alt={teamMember.alt}
                                    name={teamMember.name}
                                    role={teamMember.role}
                                    location={teamMember.location}
                                    description={teamMember.description}
                                />
                            ) : (
                                <TeamMemberCard
                                    key={teamMember.id}
                                    id={teamMember.id}
                                    name={teamMember.name}
                                    image={teamMember.image}
                                    alt={teamMember.alt}
                                    role={teamMember.role}
                                    location={teamMember.location}
                                />
                            )
                        ))}
                    </ul>
                </section>
            </section>
        </HelmetProvider>
    )
};