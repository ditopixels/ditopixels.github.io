import { Link } from "react-router-dom"

const Skills = () => {
    return (
        <section className="skills-section section mx-auto mb-0">
                <h3 className="section-heading mb-4">Skills &amp; Experiences</h3>
                <div className="section-intro mb-5 limit-max-width text-md-center">
                    Thing's I've made or learned at the companies I have worked for.
                </div>
                <div className="row tech-list justify-content-center align-items-center">
                    
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/javascript.svg" alt="Javascript"/></div>
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/nodejs.svg" alt="Nodejs"/></div>
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/typescript.svg" alt="Typescript"/></div>
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/react.svg" alt="React"/></div>
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/angular.svg" alt="Angular"/></div>
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/scss.png" alt="Java"/></div>
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/bootstrap5.svg" alt="Bootstrap"/></div>

                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/tailwind.png" alt="Bootstrap"/></div>
                    <div className="clearfix"></div>
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/java.jpg" alt="Java"/></div>
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/graphql.png" alt="Graphql"/></div>
                    
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/mysql.png" alt="MySQL"/></div>
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/mongodb.svg" alt="MongoDB"/></div>
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/docker.webp" alt="Docker"/></div>
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/vtex.png" alt="VTEX IO"/></div>
                </div>
                <div className="section-cta text-center mt-4">
                    <Link className="btn btn-secondary theme-btn-cta" to="/resume">
                        View Resume 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </Link>
                </div>
                
                <div className="skill-blocks py-5 row justify-content-center">
                    <div className="item col-md-6 col-lg-4 text-md-center">
                        <div className="item-icon-holder mx-md-auto"><i className="item-icon bi bi-terminal"></i></div>
                        <h3 className="item-title mb-3">Frontend Development</h3>
                        
                    </div>
                    <div className="item col-md-6 col-lg-4 text-md-center">
                        <div className="item-icon-holder mx-md-auto"><i className="item-icon bi bi-terminal"></i></div>  
                        <h3 className="item-title mb-3">Backend Development</h3>
                        
                    </div>
                    <div className="item col-md-6 col-lg-4 text-md-center">
                        <div className="item-icon-holder  mx-md-auto"><i className="item-icon bi bi-database-check"></i></div>
                        <h3 className="item-title mb-3">Database Infrastructure</h3>
                        
                    </div>
                    <div className="item col-md-6 col-lg-4 text-md-center">
                        <div className="item-icon-holder  mx-md-auto"><i className="item-icon bi bi-infinity"></i></div>
                        <h3 className="item-title mb-3">Technical<br/>consultant</h3>
                        
                    </div>
                    <div className="item col-md-6 col-lg-4 text-md-center">
                        <div className="item-icon-holder  mx-md-auto"><i className="item-icon bi bi-speedometer"></i></div>
                        <h3 className="item-title mb-3">Code optimization <br/>and cleanup</h3>
                        
                    </div>
                </div>
                <div className="section-cta text-center">
                    <Link className="btn btn-secondary theme-btn-cta" to="/contact">
                        Get In Touch 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </Link>
                </div>
            </section>
    )
}

export default Skills