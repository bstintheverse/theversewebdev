// styling
import "./styles/global.scss";

// components
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/Home/Home";

// library
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/About/About";
import ExperiencesPage from "./pages/Experiences/Experiences";
import OurPeoplePage from "./pages/OurPeople/OurPeople";
import ContactPage from "./pages/Contact/Contact";
import DonatePage from "./pages/Donate/Donate";
import NotFoundPage from "./pages/NotFound/NotFound";

export default function App() {

  return (
    <BrowserRouter>
        <Header />
        <Hero />
        <Routes>
        <Route>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/about-us" element={ <AboutPage /> } />
          <Route path="/experiences" element={ <ExperiencesPage /> } />
          <Route path="/our-people" element={ <OurPeoplePage /> } />
          <Route path="/contact-us" element={ <ContactPage /> } />
          <Route path="/donate" element={ <DonatePage /> } />
          <Route path="*" element={ <Navigate to="/404" /> } />
          <Route path="/404" element={ <NotFoundPage /> } />
        </Route>
        </Routes>
        <Footer />
    </BrowserRouter>
  )
};