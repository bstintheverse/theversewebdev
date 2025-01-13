//styling
import { Link } from "react-router-dom";
import "./DropdownMenu.scss";

// component
import MenuIcon from '@mui/icons-material/Menu';

export default function DropdownMenu() {
    return (
        <div className="dropdown">
            <button className="dropdown__button">
                <MenuIcon
                    className="dropdown__menu-icon"
                />
            </button>

            <div className="dropdown__content">
                <ul className="dropdown__list">
                    <li className="dropdown__item">
                        <Link to="/about-us" className="dropdown__link">
                            About Us
                        </Link>
                    </li>

                    <li className="dropdown__item">
                        <Link to="/experiences" className="dropdown__link">
                            Games & Digital Experiences
                        </Link>
                    </li>

                    <li className="dropdown__item">
                        <Link to="/our-people" className="dropdown__link">
                            Our People
                        </Link>
                    </li>

                    <li className="dropdown__item">
                        <Link to="/contact-us" className="dropdown__link">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};