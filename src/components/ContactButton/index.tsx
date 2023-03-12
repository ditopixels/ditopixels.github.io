import ReactDOM from "react-dom"
import { Link } from "react-router-dom"

const ContactButton = () => {
  return ReactDOM.createPortal((
    <Link className="btn btn-primary top-bar-cta" to="/contact">Contact</Link>
  ), document.getElementById("btn-contact")!)
}

export default ContactButton