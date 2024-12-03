// styling
import "./styles/global.scss";

// components
import Header from "./components/Header/Header";

// library
import { BrowserRouter } from "react-router-dom";

export default function App() {

  return (
    <BrowserRouter>
      <body>
        <Header />
      </body>
    </BrowserRouter>
  )
};