import { FC, lazy } from "react";
import { 
    HashRouter,
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import ContactButton from "./components/ContactButton";
import Loadable from "./components/Loadeable/Loadable";

const Home = Loadable(lazy(() => import('./pages/Home')));
const Projects = Loadable(lazy(() => import('./pages/Projects')));
const Resume = Loadable(lazy(() => import('./pages/Resume')));
const Contact = Loadable(lazy(() => import('./pages/Contact')));

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