// styling
import "./Contact.scss";

// components
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Diversity3Icon from '@mui/icons-material/Diversity3';

// libraries
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function ContactPage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>
                    The Verse | Contact Us
                </title>
            </Helmet>

            <section className="contact">
                <div className="full-width-bg-wrapper full-width-bg-wrapper--black">
                    <div className="contact__container">
                        <h2 className="contact__subheader">
                            Get in Touch
                        </h2>

                        <p className="contact__text contact__text--white">
                            Got ideas? Want to build something in The Verse? Let's work together! Collaboration
                            is key to solving today's challenges and making an impact. Join us and create
                            something extraordinary.
                        </p>
                    </div>
                </div>

                <section className="contact__content">
                    <section className="contact__container-info-form">
                        <div className="contact__info-wrapper">
                            <div className="contact__info">
                                <Avatar
                                    sx={{
                                        backgroundColor: "#711C71"
                                    }}   
                                >
                                    <EmailIcon />
                                </Avatar>
                            
                                <div className="">
                                    <h4 className="contact__label">
                                        Email
                                    </h4>

                                    <p className="contact__text">
                                        info@versebuilding.com
                                    </p>
                                </div>
                            </div>

                            <div className="contact__info">
                                    <Avatar
                                        sx={{
                                            backgroundColor: "#343270"
                                        }}   
                                    >
                                        <EmojiEmotionsIcon />
                                    </Avatar>
                                
                                <div className="">
                                    <h4 className="contact__label">
                                        Socials
                                    </h4>

                                    <div className="contact__social-icons">
                                        <a 
                                            href="https://www.x.com/buildingverses"
                                            target="_blank"
                                        >
                                            <img
                                                className="contact__social-icon"
                                                src="/assets/badges/x.svg"
                                            />
                                        </a>

                                        <a
                                            href="https://www.instagram.com/buildingverses/"
                                            target="_blank"
                                        >
                                            <img
                                                className="contact__social-icon"
                                                src="/assets/badges/instagram.svg"
                                            />
                                        </a>

                                        <a
                                            href="https://www.linkedin.com/company/building-the-verse/"
                                            target="_blank"
                                        >
                                            <img
                                                className="contact__social-icon"
                                                src="/assets/badges/linkedin.svg"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="contact__info">
                                    <Avatar
                                        sx={{
                                            backgroundColor: "#3A4A97"
                                        }}
                                    >
                                        <Diversity3Icon />
                                    </Avatar>
                                
                                <div className="">
                                    <h4 className="contact__label">
                                        Join Us
                                    </h4>

                                    <Link className="contact__link" to="https://wellfound.com/company/the-verse" target="_blank">
                                        wellfound.com/company/the-verse
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="contact__form">
                            <iframe
                                className="google-form" 
                                src="https://docs.google.com/forms/d/e/1FAIpQLSdeaffl65AvFlyZZNAuTwVc6FPhHON6mbn2fX3ZIsgoxEUZkg/viewform?embedded=true">
                                    Loading…
                            </iframe>
                        </div>
                    </section>
                </section>
            </section>
        </HelmetProvider>
    );
};