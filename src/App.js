import "./App.css";
import { useEffect } from "react";
import { Pages } from "./components/pages/Pages";
import { Header } from "./components/common/Header";
import { Home } from "./components/home/Home";
import { Services } from "./components/pages/Services";
import { About } from "./components/pages/About";
import { Portfolio } from "./components/pages/Portfolio";
import Footer from "./components/common/Footer";
import { Testimonials } from "./components/pages/Testimonials";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//npm install --save aos@next
//aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Blog } from "./components/pages/Blog";
import { Contact } from "./components/pages/Contact";

function App() {
  //aos
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
