// styling
import { Divider } from "@mui/material";
import "./Footer.scss";

// component
import { Link } from "react-router-dom";
import InputField from "../FormElements/InputField/InputField";

// data
import { games } from "../../data/games";

export default function Footer() {
    return (
        <footer className="footer">
            <section className="footer__contact">
                <div className="footer__contact-wrapper">
                    <h4 className="footer__header">
                        Contact Us
                    </h4>

                    <h5 className="footer__subheader">
                        Join us today!
                    </h5>

                    <p className="footer__text">
                        Got passion? Got purpose? Let's take on some projects 
                        and make an impact together.
                    </p>
                </div>
                
                <div className="footer__contact-form">
                    <form className="contact-form">
                        <label className="contact-form__email">
                            <InputField
                                className="contact-form__input"
                                name="email"
                                value="" // to change
                                placeholder="Email Address"
                            />
                        </label>
                        <p className="contact-form__button">
                            Sign Up
                        </p>
                    </form>
                </div>
            </section>

            <section className="footer__nav">
                <div className="nav__the-verse">
                    <h4 className="nav__header">
                        The Verse
                    </h4>

                    <ul className="nav__list">
                        <Link className="nav__link" to="/experiences">
                            Games & Digital Experiences
                        </Link>
                        
                        {/* {games.map((game) => (
                            <Link to={`/experiences/game/${game.id}`} className="nav__link">
                                {game.name}
                            </Link>
                        ))} */}
                    </ul>
                </div>

                <div className="nav__information">
                    <h4 className="nav__header">
                        Information
                    </h4>

                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/" className="nav__link">
                                Privacy
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to="/" className="nav__link">
                                Terms
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="nav__resources">
                    <h4 className="nav__header">
                        Resources
                    </h4>

                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/contact-us" className="nav__link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="nav__support">
                    <h4 className="nav__header">
                        Support
                    </h4>

                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/donate" className="nav__link--donate">
                                Donate
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>

            <Divider 
                sx={{
                    backgroundColor: "#AEB3B7",
                    margin: "1rem 0"
                }}
            />

            <section className="footer__wrapper">
                <div className="footer__social">

                    <a href="https://www.x.com/buildingverses" target="_blank">
                        <img 
                            className="footer__social-icon"
                            src="/assets/logos/x.png" 
                            alt="X" 
                        />
                    </a>
                    
                    <a href="https://www.instagram.com/buildingverses/" target="_blank">
                        <img 
                            className="footer__social-icon"
                            src="/assets/logos/instagram.svg" 
                            alt="Instagram" 
                        />
                    </a>

                    <a href="https://www.linkedin.com/company/building-the-verse/" target="_blank">
                        <img 
                            className="footer__social-icon"
                            src="/assets/logos/linkedin.png"
                            alt="LinkedIn"
                        />
                    </a>
                </div>

                <p className="footer__copyright">
                    Copyright © The Verse 2024
                </p>
            </section>
        </footer>
    )
};