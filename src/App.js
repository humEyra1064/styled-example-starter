import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import People from "./components/pages/People";
import Projects from "./components/pages/Projects";

const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/people" element={<People/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
};

export default App;
