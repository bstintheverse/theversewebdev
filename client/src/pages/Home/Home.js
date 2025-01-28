import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// styling
import "./Home.scss";
// component
import CustomCarousel from "../../components/Carousel/CustomCarousel";
import { Link } from "react-router-dom";
export default function HomePage() {
    return (_jsxs("section", { className: "home", children: [_jsx("div", { className: "full-width-bg-wrapper full-width-bg-wrapper--blue", children: _jsx("article", { className: "home__video-container", children: _jsx("video", { className: "home__video", controls: true, children: _jsx("source", { src: "/assets/videos/home-page-video.mp4" }) }) }) }), _jsxs("div", { className: "home__work", children: [_jsx("h2", { className: "home__work-header", children: "What We're Building" }), _jsx(CustomCarousel, {})] }), _jsxs("div", { className: "home__community", children: [_jsxs("div", { className: "home__community-content", children: [_jsx("p", { className: "home__community-text home__community-text--bold", children: "Make an Impact" }), _jsx("h2", { className: "home__community-header", children: "Join Our Community" }), _jsx("p", { className: "home__community-text", children: "The Verse is a global community of inspired gamers, developers, designers, scientists, artists, visionaries, teachers, and students who join together to passionately contribute their wide ranging expertise to invent experiences that enhance human flourishing." }), _jsx(Link, { className: "home__community-button-link", to: "/about-us", children: _jsx("p", { className: "home__community-button", children: "Learn More" }) })] }), _jsx("div", { className: "home__community-image-container", children: _jsx("img", { className: "home__community-image", src: "/assets/images/home-page-join-our-community.jpg", alt: "The Verse team members in a video meeting" }) })] })] }));
}
;
