// styling
import "./Header.scss";

// components
import { Link } from "react-router-dom"
import DropdownMenu from "../DropdownMenu/DropdownMenu";

export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar__container navbar__container--left">
                    <Link to="/" className="navbar__logo-link">
                        <img 
                            className="navbar__logo"
                            src="/assets/logos/logo.png"
                            alt="The Verse logo"
                        />

                        <div className="navbar__logo-title">
                            The Verse
                        </div>
                    </Link>
                </div>

                <div className="navbar__container navbar__container--right">
                    {/* mobile navigation */}
                    <DropdownMenu />

                    {/* tablet and desktop navigation */}
                    <ul className="navbar__list">
                        <li className="navbar__item">
                            <Link to="/about-us" className="navbar__link">
                                About Us
                            </Link>
                        </li>

                        <li className="navbar__item">
                            <Link to="/experiences" className="navbar__link">
                                Games & Digital Experiences
                            </Link>
                        </li>

                        <li className="navbar__item">
                            <Link to="/our-people" className="navbar__link">
                                Our People
                            </Link>
                        </li>

                        <li className="navbar__item">
                            <Link to="/contact-us" className="navbar__link">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};