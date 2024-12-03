// styling
import "./styles/global.scss";

// components
import Header from "./components/Header/Header";

// library
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

export default function App() {

  return (
    <BrowserRouter>
        <Header />
        <Hero />
        <Footer />
    </BrowserRouter>
  )
};