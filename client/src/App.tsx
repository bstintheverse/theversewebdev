// styling
import "./styles/global.scss";

// components
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/Home/Home";

// library
import { BrowserRouter, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/About/About";

export default function App() {

  return (
    <BrowserRouter>
        <Header />
        <Hero />
        <Routes>
        <Route>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/about-us" element={ <AboutPage /> } />
        </Route>
        </Routes>
        <Footer />
    </BrowserRouter>
  )
};