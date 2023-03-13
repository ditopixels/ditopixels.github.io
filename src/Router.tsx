import { FC } from "react";
import { 
    HashRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ContactButton from "./components/ContactButton";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";


const Router:FC = () => {
    return (
        <HashRouter>
            <Navbar/>
            <ContactButton/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/resume" element={<Resume/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </HashRouter>
    )
}

export default Router