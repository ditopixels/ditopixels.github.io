import { Link } from "react-router-dom"

const Profile = () => {
  return (
    <section className="page-intro-section section has-profile-image mx-auto">
                
                <div className="profile-holder text-center">
                    <img className="profile-pic rounded-circle" src="assets/images/profile.webp" alt="image"/>
                </div>
                <div className="intro-holder">
                    <h2 className="intro-name text-center mb-3">Juan Diego Morales</h2>
                    <div className="profile-intro text-md-center limit-max-width mx-auto">
                        <p>Hi! I'm a Full Stack Developer with 2+ years of experience in eCommerce, CMS, Node services, system implementation, optimization and more. I specialize in providing high-value solutions to companies, and have strong communication, leadership and problem-solving skills. Welcome to my online portfolio! Check out my <Link to="/projects">latest projects</Link>.</p>   
                    </div>
                </div>
                
                <div className="section-cta text-center mt-4">
                    <Link className="btn btn-secondary theme-btn-cta" to="/resume">
                        View Resume
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </Link>
                </div>
                
            </section>
  )
}

export default Profile