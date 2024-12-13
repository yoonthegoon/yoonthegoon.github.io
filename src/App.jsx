import { BrowserRouter, Route, Routes } from "react-router";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import ReCaptcha from "./components/ReCaptcha.jsx";

export default function App() {
  return (
    <>
      <Nav />

      <main className="container mx-auto my-12 flex flex-grow">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/recaptcha" element={<ReCaptcha />} />
          </Routes>
        </BrowserRouter>
      </main>

      <Footer />
    </>
  );
}
