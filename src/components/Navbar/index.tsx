import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return ReactDOM.createPortal((
    <ul className="main-nav navbar-nav text-center">                   
        <li className="nav-item">
            <Link className="nav-link active d-flex flex-column" to="/"><span className="icon-holder"><i className="fa-solid fa-circle-user"></i></span><span className="nav-text">About</span></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link d-flex flex-column" to="/projects"><span className="icon-holder"><i className="fa-solid fa-briefcase"></i></span><span className="nav-text">Projects</span></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link d-flex flex-column" to="/blog-home"><span className="icon-holder"><i className="fa-solid fa-pen-fancy"></i></span><span className="nav-text">Blog</span></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link d-flex flex-column" to="/resume"><span className="icon-holder"><i className="fa-solid fa-file-lines"></i></span><span className="nav-text">Resume</span></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link d-flex flex-column" to="/contact"><span className="icon-holder"><i className="fa-solid fa-comment-dots"></i></span><span className="nav-text">Contact</span></Link>
        </li>
        <li className="nav-item nav-item-close">
            <button aria-label="Close" className="btn-close" data-bs-dismiss="offcanvas" type="button"><i className="bi bi-x"></i></button>
        </li>
    </ul>
  ), document.getElementById('navbar')!)
}

export default Navbar