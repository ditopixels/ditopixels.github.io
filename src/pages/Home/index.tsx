import { Link } from "react-router-dom"
import Brands from "./Brands"
import Profile from "./Profile"
import Projects from "./Projects"
import Skills from "./Skills"

const Home = () => {
    return (
        <>
            <Profile/>
            <Projects/>
            <Brands/>    
            <Skills/>
        </>
    )
}

export default Home