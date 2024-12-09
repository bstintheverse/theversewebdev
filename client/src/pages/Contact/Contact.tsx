//styling
import "./Contact.scss";

import { Link } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import { Stack } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import InputField from "../../components/FormElements/InputField/InputField";
import Textarea from "../../components/FormElements/Textarea/Textarea";

import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function ContactPage() {
    return (
        <section className="contact">
            <div className="contact__container">
                <h2 className="contact__subheader">
                    Lorem Ipsum
                </h2>

                <p className="contact__text contact__text--white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <section className="contact__content">
                <h2 className="contact__subheader contact__subheader--black">
                    Get in Touch
                </h2>

                <p className="contact__text">
                    Got ideas? Want to build something in The Verse? Let's work together! Collaboration
                    is key to solving today's challenges and making an impact. Join us and create
                    something extraordinary.
                </p>

                <section className="contact__container-info-form">
                    <div className="contact__info">
                        <div className="">
                            <Avatar
                                sx={{
                                    backgroundColor: "#711C71"
                                }}   
                            >
                                <EmailIcon />
                            </Avatar>
                        </div>
                        
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
                        <div className="">
                            <Avatar
                                sx={{
                                    backgroundColor: "#343270"
                                }}   
                            >
                                <EmojiEmotionsIcon />
                            </Avatar>
                        </div>
                        
                        <div className="">
                            <h4 className="contact__label">
                                Socials
                            </h4>


                        </div>
                    </div>

                    <div className="contact__info">
                        <div className="">
                            <Avatar
                                sx={{
                                    backgroundColor: "#3A4A97"
                                }}
                            >
                                <Diversity3Icon />
                            </Avatar>
                        </div>
                        
                        <div className="">
                            <h4 className="contact__label">
                                Join Us
                            </h4>

                            <Link className="contact__link" to="https://wellfound.com/company/the-verse" target="_blank">
                                wellfound.com/company/the-verse
                            </Link>
                        </div>
                    </div>

                    <div className="contact__form">
                        <form className="form">
                            <label className="form__name">
                                <p className="form__label">
                                    Name
                                </p>

                                <InputField
                                    className="form__input"
                                    name="name"
                                    placeholder="Full name"
                                />
                            </label>

                            <label className="form__email">
                                <p className="form__label">
                                    Email
                                </p>

                                <InputField
                                    className="form__input"
                                    name="name"
                                    placeholder="Email Address"
                                />
                            </label>

                            <label className="form__message">
                                <p className="form__label">
                                    Message
                                </p>

                                <Textarea
                                    className="form__input"
                                    name="name"
                                    placeholder="Your message..."
                                />
                            </label>

                            <button className="form__button">
                                Submit
                            </button>
                        </form>
                    </div>
                </section>
            </section>
        </section>
    )
};