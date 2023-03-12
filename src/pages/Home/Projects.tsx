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
                            <img src="assets/images/projects/1.png" className="card-img-top" alt="image"/>
                            <div className="card-body px-0">
                                <h5 className="card-title"><a href="case-study.html">Bata Perú</a></h5>
                                <p className="card-text mb-1">Es una empresa líder en el diseño, fabricación y distribución de calzado y accesorios de calidad para toda la familia.</p>
                                <div>
                                    <Link className="card-link more-link" to="projects#bata" target="_blank">View more <span className="link-arrow"><i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img src="assets/images/projects/project-thumb-6.png" className="card-img-top" alt="image"/>
                            <div className="card-body px-0">
                                <h5 className="card-title"><a href="case-study.html">Browser Extension</a></h5>
                                <p className="card-text mb-1">Project summary goes here. Cras vehicula felis sed eros lacinia rhoncus.</p>
                                <div>
                                    <a className="card-link more-link" href="case-study.html">View more <span className="link-arrow"><i className="bi bi-arrow-right"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img src="assets/images/projects/project-thumb-4.png" className="card-img-top" alt="image"/>
                            <div className="card-body px-0">
                                <h5 className="card-title"><a href="case-study.html">Data Analytics App</a></h5>
                                <p className="card-text mb-1">Project summary goes here. Maecenas eget finibus risus. Etiam volutpat elit pellentesque felis dignissim, tempor maximus est commodo.</p>
                                <div><a className="card-link more-link" href="case-study.html">View more <span className="link-arrow"><i className="bi bi-arrow-right"></i></span></a></div>

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