import { Link } from "react-router-dom"
import "./projects.css"

const Projects = () => {
    return (
        <section className="featured-projects-section section mx-auto">
            <h3 className="section-heading mb-5">Featured Projects</h3>
            <div className="featured-project-list container">
                <div className="row justify-content-center gy-4">

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img src="assets/images/projects/1.webp" className="card-img-top" alt="image"/>
                            <div className="card-body px-0">
                                <h5 className="card-title"><a href="case-study.html">Bata Perú</a></h5>
                                <p className="card-text mb-1">It is a leading company in the design, manufacture, and distribution of quality footwear and accessories for the whole family.</p>
                                <div>
                                    <Link className="card-link more-link" to="projects" target="_blank">View more <span className="link-arrow"><i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img src="assets/images/projects/2.webp" className="card-img-top" alt="image"/>
                            <div className="card-body px-0">
                                <h5 className="card-title"><a href="case-study.html">Samsung</a></h5>
                                <p className="card-text mb-1">It is a leading company in technological innovation, offering high-quality electronic products such as smartphones, laptops and tablets to meet the needs of consumers.</p>
                                <div>
                                    <Link className="card-link more-link" to="projects" target="_blank">View more <span className="link-arrow"><i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img src="assets/images/projects/3.webp" className="card-img-top" alt="image"/>
                            <div className="card-body px-0">
                                <h5 className="card-title"><a href="case-study.html">Mercury</a></h5>
                                <p className="card-text mb-1">Grupo Mercury, the leading importer of the most comprehensive portfolio of lighting, electricals, SmartHome and hardware. They are leading the lighting industry.</p>
                                <div>
                                    <Link className="card-link more-link" to="projects" target="_blank">View more <span className="link-arrow"><i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="section-cta text-center mt-3">
                    <Link className="btn btn-secondary theme-btn-cta" to="/projects">
                        More Projects
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </Link>
                </div>
            </div>
                
        </section>
    )
}

export default Projects