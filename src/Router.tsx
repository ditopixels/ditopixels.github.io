import { FC } from "react";
import { 
    HashRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";


const Router:FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </HashRouter>
    )
}

export default Router