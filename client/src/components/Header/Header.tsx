// styling
import "./Header.scss";

// components
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <section className="navbar__left">
                <img className="navbar__logo" alt="The Verse logo" />

                <div className="navbar__link-container">
                    <ul className="navbar__link-list">
                        <li className="navbar__link-item">
                            <Link to="/" className="navbar__link">
                                About Us
                            </Link>
                        </li>

                        <li className="navbar__link-item">
                            <Link to="/" className="navbar__link">
                                Games & Digital Experiences
                            </Link>
                        </li>

                        <li className="navbar__link-item">
                            <Link to="/" className="navbar__link">
                                Our People
                            </Link>
                        </li>

                        <li className="navbar__link-item">
                            <Link to="/" className="navbar__link">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="navbar__right">
                <Link to="/" className="navbar__button">
                    Donate
                </Link>
            </section>
        </header>
    )
};