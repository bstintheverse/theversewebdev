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
                    <img 
                        className="navbar__logo"
                        src="/assets/logos/logo.png"
                        alt="The Verse logo"
                    />
                </div>

                <div className="navbar__container navbar__container--right">
                    <Link to="/" className="navbar__button">
                        Donate
                    </Link>

                    {/* mobile navigation */}
                    <DropdownMenu />

                    {/* tablet and desktop navigation */}
                    <ul className="navbar__list">
                        <li className="navbar__item">
                            <Link to="/" className="navbar__link">
                                About Us
                            </Link>
                        </li>

                        <li className="navbar__item">
                            <Link to="/" className="navbar__link">
                                Games & Digital Experiences
                            </Link>
                        </li>

                        <li className="navbar__item">
                            <Link to="/" className="navbar__link">
                                Our People
                            </Link>
                        </li>

                        <li className="navbar__item">
                            <Link to="/" className="navbar__link">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};