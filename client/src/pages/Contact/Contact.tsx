// styling
import "./Contact.scss";

// components
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Diversity3Icon from '@mui/icons-material/Diversity3';

// libraries
import { Link } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Joi from "joi";
import emailjs from "emailjs-com";

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