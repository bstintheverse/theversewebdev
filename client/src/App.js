import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// styling
import "./styles/global.scss";
// components
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
// pages
import HomePage from "./pages/Home/Home";
import AboutPage from "./pages/About/About";
import ExperiencesPage from "./pages/Experiences/Experiences";
import GamePage from "./pages/Game/Game";
import OurPeoplePage from "./pages/OurPeople/OurPeople";
import ContactPage from "./pages/Contact/Contact";
import DonatePage from "./pages/Donate/Donate";
import NotFoundPage from "./pages/NotFound/NotFound";
// library
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
// util
import scrollToTop from "./utils/scrollToTop";
import PrivacyPage from "./pages/Privacy/Privacy";
import TermsPage from "./pages/Terms/Terms";
function AppWithLocation() {
    const location = useLocation();
    const renderGlobalHero = !location.pathname.startsWith("/experiences/game/");
    useEffect(() => {
        scrollToTop();
    }, [location]);
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), renderGlobalHero && _jsx(Hero, {}), _jsx("main", { children: _jsx(Routes, { children: _jsxs(Route, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/about-us", element: _jsx(AboutPage, {}) }), _jsx(Route, { path: "/experiences", element: _jsx(ExperiencesPage, {}) }), _jsx(Route, { path: "/experiences/game/:gameId", element: _jsxs(_Fragment, { children: [" ", _jsx(Hero, {}), " ", _jsx(GamePage, {}), " "] }) }), _jsx(Route, { path: "/our-people", element: _jsx(OurPeoplePage, {}) }), _jsx(Route, { path: "/contact-us", element: _jsx(ContactPage, {}) }), _jsx(Route, { path: "/donate", element: _jsx(DonatePage, {}) }), _jsx(Route, { path: "/privacy", element: _jsx(PrivacyPage, {}) }), _jsx(Route, { path: "/terms", element: _jsx(TermsPage, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/404" }) }), _jsx(Route, { path: "/404", element: _jsx(NotFoundPage, {}) })] }) }) }), _jsx(Footer, {})] }));
}
;
export default function App() {
    return (_jsx(BrowserRouter, { children: _jsx(AppWithLocation, {}) }));
}
;
