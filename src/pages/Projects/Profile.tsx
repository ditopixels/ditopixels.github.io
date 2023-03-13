import { Link } from "react-router-dom"

const Profile = () => {
    return (
        <section className="page-intro-section section has-profile-image mx-auto ">	
            <div className="profile-holder text-center">
                <img className="profile-pic rounded-circle" src="assets/images/profile.webp" alt="image"/>
            </div>
            <div className="intro-holder">
                <h2 className="intro-name text-center">My Projects</h2>
                <div className="profile-intro text-center limit-max-width mx-auto">
                    <p className="mb-4">
                        Discover the projects I've worked on! Throughout my professional career, I have led and taken full or nearly full implementation of several projects. Besides these, I have also supported other projects by performing tasks like code cleaning and very particular developments for each client. Check out all the projects I have worked on!<br/>
                        Need help with your project? Book a free session with me to discuss your specific project requirements and how I can help you. 
                    </p>
                    <div className="text-center mt-4">
                        <Link className="btn btn-secondary" to="/contact">
                            Start A Conversation 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
                
            </div>
            
        </section>
    )
}

export default Profile