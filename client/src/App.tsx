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
import { BrowserRouter, Navigate, Route, Routes, useLocation} from "react-router-dom";
import { useEffect } from "react";

// util
import scrollToTop from "./utils/scrollToTop";
import PrivacyPage from "./pages/Privacy/Privacy";
import TermsPage from "./pages/Terms/Terms";
import WalkXRPage from "./pages/WalkXR/WalkXR";
import KarmaPage from "./pages/Karma/Karma";
import AdventuresInBreathPage from "./pages/AdventuresInBreath/AdventuresInBreath";

function AppWithLocation() {
  const location = useLocation();
  const renderGlobalHero = !location.pathname.startsWith("/experiences/game/");

  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <>
      <Header />
      {/* {renderGlobalHero && <Hero />} */}
      <Hero />
      <main>
        <Routes>
          <Route>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/about-us" element={ <AboutPage /> } />
            <Route path="/experiences" element={ <ExperiencesPage /> } />
            <Route path="/experiences/game/walk-xr" element={ <WalkXRPage /> } />
            <Route path="/experiences/game/karma-the-six-realms" element={ <KarmaPage /> } />
            <Route path="/experiences/game/adventures-in-breath" element={ <AdventuresInBreathPage /> } />
            <Route path="/our-people" element={ <OurPeoplePage /> } />
            <Route path="/contact-us" element={ <ContactPage /> } />
            <Route path="/donate" element={ <DonatePage /> } />
            <Route path="/privacy" element={ <PrivacyPage /> } />
            <Route path="/terms" element={ <TermsPage /> } />
            <Route path="*" element={ <Navigate to="/404" /> } />
            <Route path="/404" element={ <NotFoundPage /> } />
          </Route>
        </Routes>
        </main>
      <Footer />
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AppWithLocation />
    </BrowserRouter>
  );
};