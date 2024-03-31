import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import Contcact from "./components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="Reservation" element={<Reservation />} />
          <Route path="Contact" element={<Contcact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
