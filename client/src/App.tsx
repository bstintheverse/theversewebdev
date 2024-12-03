// styling
import "./styles/global.scss";

// components
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/Home/Home";

// library
import { BrowserRouter } from "react-router-dom";

export default function App() {

  return (
    <BrowserRouter>
        <Header />
        <Hero />
        <main>
          <HomePage />
        </main>
        <Footer />
    </BrowserRouter>
  )
};