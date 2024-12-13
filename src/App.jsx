import { BrowserRouter, Route, Routes } from "react-router";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./elements/Home.jsx";
import About from "./elements/About.jsx";
import Contact from "./elements/Contact.jsx";

export default function App() {
  return (
    <>
      <Nav />

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}
