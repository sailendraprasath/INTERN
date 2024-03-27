import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="Reservation" element={<Reservation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
