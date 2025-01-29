//styling
import { Link } from "react-router-dom";
import "./DropdownMenu.scss";

// component
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

export default function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <button className="dropdown__button" onClick={toggleMenu}>
                <MenuIcon
                    className="dropdown__menu-icon"
                />
            </button>

            <div className={`dropdown__content ${isOpen ? "open" : ""}`}>
                <ul className="dropdown__list">
                    <li className="dropdown__item">
                        <Link to="/about-us" className="dropdown__link" onClick={closeMenu}>
                            About Us
                        </Link>
                    </li>

                    <li className="dropdown__item">
                        <Link to="/experiences" className="dropdown__link" onClick={closeMenu}>
                            Games & Digital Experiences
                        </Link>
                    </li>

                    <li className="dropdown__item">
                        <Link to="/our-people" className="dropdown__link" onClick={closeMenu}>
                            Our People
                        </Link>
                    </li>

                    <li className="dropdown__item">
                        <Link to="/contact-us" className="dropdown__link" onClick={closeMenu}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};