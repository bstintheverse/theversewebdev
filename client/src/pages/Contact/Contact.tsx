//styling
import "./Contact.scss";

import { Link } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";

import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import InputField from "../../components/FormElements/InputField/InputField";
import Textarea from "../../components/FormElements/Textarea/Textarea";

import Joi from "joi";
import emailjs from "emailjs-com";
import Button from "../../components/Button/Button";

const schema = Joi.object({
    name: Joi.string()
        .pattern(/^[A-Za-z\s]+$/)
        .min(3)
        .max(30)
        .required()
        .messages({
            "string.empty": "Name is required",
            "string.min": "Your name should be at least 3 characters long",
            "string.max": "Your name should be at most 30 characters long"
        }),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "ca", "net"]}})
        .required()
        .messages({
            "string.empty": "Email is required",
            "string.email": "Please enter a valid email address"
        }),
    message: Joi.string()
        .required()
        .messages({
            "string.empty": "Message is required",
        }),
});
interface FormData {
    name: string;
    email: string;
    message: string;
};

interface Errors {
    name: string;
    email: string;
    message: string;
};

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState<Errors>({
        name: "",
        email: "",
        message: "",

    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    
        const { error } = schema.validate(formData, { abortEarly: false });
        const newErrors: Errors = { name: "", email: "", message: "" };
    
        if (error) {
            error.details.forEach((detail) => {
                if (detail.message) {
                    if (detail.path[0] === "name") newErrors.name = detail.message;
                    if (detail.path[0] === "email") newErrors.email = detail.message;
                    if (detail.path[0] === "message") newErrors.message = detail.message;
                }
            });
            setErrors(newErrors);
        } else {
            setErrors({ name: "", email: "", message: "" });
    
            const form = e.target as HTMLFormElement;
            emailjs.sendForm(
                "service_number",
                "template_number",
                form,
                "user_number"
            ).then((result) => {
                console.log("Success:", result.text);
                setFormData({ name: "", email: "", message: "" });
                alert("Your message has been sent! We'll get back to you soon.");
            }, (error) => {
                console.error("Error:", error.text);
                alert("Unable to send message. Please try again later.");
            });
        };
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "" 
        }));
    };

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
                <div className="contact__wrapper">
                    <h2 className="contact__subheader contact__subheader--black">
                        Get in Touch
                    </h2>

                    <p className="contact__text">
                        Got ideas? Want to build something in The Verse? Let's work together! Collaboration
                        is key to solving today's challenges and making an impact. Join us and create
                        something extraordinary.
                    </p>
                </div>

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
                        <form className="form" onSubmit={handleSubmit}>
                            <label className="form__name">
                                <p className="form__label">
                                    Name
                                </p>

                                <InputField
                                    className="form__input"
                                    name="name"
                                    value={formData.name}
                                    placeholder="Full name"
                                    onChange={handleInputChange}
                                />

                                {(errors.name && 
                                    <p className="form__errors">{errors.name}</p>
                                )}
                            </label>

                            <label className="form__email">
                                <p className="form__label">
                                    Email
                                </p>

                                <InputField
                                    className="form__input"
                                    name="email"
                                    value={formData.email}
                                    placeholder="Email Address"
                                    onChange={handleInputChange}
                                />

                                {(errors.email && 
                                    <p className="form__errors">{errors.email}</p>
                                )}
                            </label>

                            <label className="form__message">
                                <p className="form__label">
                                    Message
                                </p>

                                <Textarea
                                    className="form__textarea"
                                    name="message"
                                    value={formData.message}
                                    placeholder="Your message..."
                                    onChange={handleInputChange}
                                />

                                {(errors.message && 
                                    <p className="form__errors form__errors--message">{errors.message}</p>
                                )}                                
                            </label>

                            <Button className="button-secondary" type="submit">
                                Submit
                            </Button>
                        </form>
                    </div>
                </section>
            </section>
        </section>
    )
};