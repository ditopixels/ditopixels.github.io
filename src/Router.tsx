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


const Router:FC = () => {
    return (
        <HashRouter>
            <Navbar/>
            <ContactButton/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </HashRouter>
    )
}

export default Router