// styling
import "./About.scss";

// library
import { Helmet, HelmetProvider } from "react-helmet-async";

// component
import ActionAreaCard from "../../components/Cards/ActionAreaCard/ActionAreaCard";

export default function AboutPage() {
    const imagePath = "/assets/images/cards/our-community-cards/action-area-card";
    const ourCommunityContent = [
        {
            id: 1, 
            image: `${imagePath}-1.jpg`,
            alt: "",
            content: "Over 250 contributors at The Verse"
        },
        {
            id: 2,
            image: `${imagePath}-2.jpg`,
            alt: "",
            content: "Over 47,000 hours on Verse Projects"
        },
        {
            id: 3,
            image: `${imagePath}-3.jpg`,
            alt: "",
            content: "During summers, we have 50+ working on average 25 hours a week"
        },
        {
            id: 4,
            image: `${imagePath}-4.jpg`,
            alt: "",
            content: "You know who you are! Multi-talented, creative, and inspired to change the world"
        },
        {
            id: 5,
            image: `${imagePath}-5.jpg`,
            alt: "",
            content: "Versers feel empowered, enriched, connected, and productive"
        }
    ];
    
    return (
        <HelmetProvider>
            <Helmet>
                <title>
                    The Verse | About Us
                </title>
            </Helmet>

            <section className="about">
                <div className="about__container">
                    <p className="about__quote">
                        In The Verse magic happens every day. In the emergence of the
                        uplifting experiences we conceive and build together. And for the people working in
                        The Verse, joyful co-creation and self-discovery.
                    </p>

                    <p className="about__quote about__quote--author">
                        — Ben Simon-Thomas, Co-Founder
                    </p>
                </div>

                <div className="about__the-verse">
                    <h2 className="about__the-verse-header">
                        The Verse
                    </h2>

                    <p className="about__the-verse-text">
                        The Verse, we create games, experiences, and rituals that uplift humanity. 
                        We are a global community of gamers, developers, designers, scientists, 
                        artists, visionaries, teachers, and students—each of us contributing our 
                        expertise to invent experiences that foster human flourishing.
                    </p>
                </div>

                <div className="about__mission">
                    <h2 className="about__mission-header">
                        Our Mission
                    </h2>

                    <h3 className="about__mission-subheader">
                        Our Mission
                    </h3>

                    <p className="about__mission-text">
                        The Verse collaboratively creates digital therapeutics and experiences that
                        are playful, embodied, and ritual-enriched, that invite co-creation and 
                        foster participation and that enhance health, improve well-being, and raise
                        consciousness.
                    </p>

                    <h3 className="about__mission-subheader">
                        Our Guiding Principle: Connection
                    </h3>

                    <p className="about__mission-text">
                        The key elements of Interconnection in The Verse are:
                    </p>

                    <div className="about__mission-elements">
                        {/* make this section dynamic as opposed to being hardcoded later */}
                        <ul className="mission-element__list">
                            <li className="mission-element__item">
                                <img 
                                    className="mission-element__image"
                                    src="/assets/images/guiding-principle-1.jpg"
                                    alt="Alt text"
                                />
                                
                                <p className="mission-element__label">
                                    Human-first Approach
                                </p>
                            </li>

                            <li className="mission-element__item">
                                <img 
                                    className="mission-element__image"
                                    src="/assets/images/guiding-principle-2.jpg"
                                    alt="Alt text"
                                />
                                
                                <p className="mission-element__label">
                                    Collaboration
                                </p>
                            </li>

                            <li className="mission-element__item">
                                <img 
                                    className="mission-element__image"
                                    src="/assets/images/guiding-principle-3.jpg"
                                    alt="Alt text"
                                />
                                
                                <p className="mission-element__label">
                                    Holistic Thinking
                                </p>
                            </li>

                            <li className="mission-element__item">
                                <img 
                                    className="mission-element__image"
                                    src="/assets/images/guiding-principle-4.jpg"
                                    alt="Alt text"
                                />
                                
                                <p className="mission-element__label">
                                    Play, Ritual, Story
                                </p>
                            </li>

                            <li className="mission-element__item">
                                <img 
                                    className="mission-element__image"
                                    src="/assets/images/guiding-principle-5.jpg"
                                    alt="Alt text"
                                />
                                
                                <p className="mission-element__label">
                                    Servant Leadership
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="about__history">
                    <h2 className="about__history-header">
                        Our History
                    </h2>

                    <h3 className="about__history-subheader">
                        How We Got Here
                    </h3>

                    <p className="about__history-text">
                        The founders of The Verse met at a tech conference in 2019 and discovered that
                        we shared the vision of making different kinds of games — one that brings joy
                        and uplift — and finding a different way to do it, in the spirit of collaboration,
                        empowerment and playfulness.
                    </p>

                    <h3 className="about__history-subheader">
                        The Problem We Are Addressing
                    </h3>

                    <p className="about__history-text">
                        In a world embroiled in an ongoing polycrisis, there is a great need (and
                        significant market interest) for solutions improving mental health, well-being
                        and building human connection.
                    </p>

                    <h3 className="about__history-subheader">
                        How We Create Impact
                    </h3>

                    <p className="about__history-text">
                        Through our process of ideation, research, prototyping, and testing we guide our projects
                        toward targeted partners and their audiences, seeking always to address vital issues
                        and generate measureable outcomes.
                    </p>
                </div>

                <div className="about__our-way">
                    <h2 className="about__our-way-header">
                        The Way of The Verse
                    </h2>

                    <p className="about__our-way-text">
                        We seek unity and integrity with every collective step, enveloping our
                        processes and our products in the spirit and practice of interconnectedness.
                    </p>

                    <p className="about__our-way-text">
                        We think of <span className="about__our-way-text--bold">The Verse as practice</span>.
                    </p>

                    <p className="about__our-way-text">
                        This is <span className="about__our-way-text--bold">The Way of the Verse</span>, our true north.
                    </p>

                    <p className="about__our-way-text--small">
                        *From the Eightfold Path of Buddhism
                    </p>
                </div>

                <div className="about__our-community">
                    <h2 className="about__our-community-header">
                        Our Community
                    </h2>
                    
                    <article className="about__our-community-cards">
                        {ourCommunityContent.map((content) => (
                            <ActionAreaCard
                                className="about__our-community-card"
                                image={content.image}
                                alt={content.alt}
                                content={content.content}
                            />
                        ))}
                    </article>
                </div>
            </section>
        </HelmetProvider>
    )
};