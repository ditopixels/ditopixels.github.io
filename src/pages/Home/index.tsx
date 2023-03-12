const Home = () => {
    return (
        <>
            <section className="page-intro-section section has-profile-image mx-auto">
                
                <div className="profile-holder text-center">
                    <img className="profile-pic rounded-circle" src="assets/images/profile.png" alt="image"/>
                </div>
                <div className="intro-holder">
                    <h2 className="intro-name text-center mb-3">Daniel Lopez</h2>
                    <div className="profile-intro text-md-center limit-max-width mx-auto">
                        <p>Hi! I’m a Senior Developer with more than ten years of experience working in mobile banking apps. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Welcome to my online portfolio! Check out my <a href="projects.html">latest projects and case studies</a>.</p>   
                    </div>
                </div>
                
                <div className="section-cta text-center mt-4">
                    <a className="btn btn-secondary theme-btn-cta" href="resume.html">View Resume<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
</svg></a>
                </div>
                
            </section>
            
            <section className="featured-projects-section section mx-auto">
                <h3 className="section-heading mb-4">Featured Projects</h3>
                <div className="section-intro mb-5 limit-max-width mx-auto text-md-center">Brief intro goes here. My main experience lies in building lorem ipsum dolor sit amet, consectetur adipiscing elit. I'm currently working on lacinia tristique.</div>
                <div className="featured-project-list container">
                    <div className="row justify-content-center gy-4">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <img src="assets/images/projects/project-thumb-1.png" className="card-img-top" alt="image"/>
                                <div className="card-body px-0">
                                    <h5 className="card-title"><a href="case-study.html">Trading App</a></h5>
                                    <p className="card-text mb-1">Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <div><a className="card-link more-link" href="case-study.html">View more <span className="link-arrow"><i className="bi bi-arrow-right"></i></span></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <img src="assets/images/projects/project-thumb-6.png" className="card-img-top" alt="image"/>
                                <div className="card-body px-0">
                                    <h5 className="card-title"><a href="case-study.html">Browser Extension</a></h5>
                                    <p className="card-text mb-1">Project summary goes here. Cras vehicula felis sed eros lacinia rhoncus.</p>
                                    <div><a className="card-link more-link" href="case-study.html">View more <span className="link-arrow"><i className="bi bi-arrow-right"></i></span></a></div>
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
                        <a className="btn btn-secondary theme-btn-cta" href="projects.html">More Projects<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
</svg></a>
                    </div>
                </div>
                    
            </section>
                    
            <section className="testimonials-section section py-5 mx-auto">
                <div className="container">
                    <h3 className="mb-4 text-center section-heading">Clients I Worked With</h3>
                    
                    <div className="client-logo-list row d-flex justify-content-center align-items-stretch py-4 gx-2 gx-lg-3">
                        <div className="logo-item col-4 col-md-3 col-lg-auto mb-3"><div className="logo-holder"><img className="logo-image" src="assets/images/clients/client-logo-1.svg"/></div></div>
                        <div className="logo-item col-4 col-md-3 col-lg-auto mb-3"><div className="logo-holder"><img className="logo-image" src="assets/images/clients/client-logo-2.svg"/></div></div>
                        <div className="logo-item col-4 col-md-3 col-lg-auto mb-3"><div className="logo-holder"><img className="logo-image" src="assets/images/clients/client-logo-3.svg"/></div></div>
                        <div className="logo-item col-4 col-md-3 col-lg-auto mb-3"><div className="logo-holder"><img className="logo-image" src="assets/images/clients/client-logo-4.svg"/></div></div>
                        <div className="logo-item col-4 col-md-3 col-lg-auto mb-3"><div className="logo-holder"><img className="logo-image" src="assets/images/clients/client-logo-5.svg"/></div></div>
                        <div className="logo-item col-4 col-md-3 col-lg-auto mb-3"><div className="logo-holder"><img className="logo-image" src="assets/images/clients/client-logo-6.svg"/></div></div>
                        <div className="logo-item col-4 col-md-3 col-lg-auto mb-3"><div className="logo-holder"><img className="logo-image" src="assets/images/clients/client-logo-7.svg"/></div></div>
                        <div className="logo-item col-4 col-md-3 col-lg-auto mb-3"><div className="logo-holder"><img className="logo-image" src="assets/images/clients/client-logo-8.svg"/></div></div>
                        <div className="logo-item col-4 col-md-3 col-lg-auto mb-3"><div className="logo-holder"><img className="logo-image" src="assets/images/clients/client-logo-9.svg"/></div></div>
                        <div className="logo-item col-4 col-md-3 col-lg-auto mb-3"><div className="logo-holder"><img className="logo-image" src="assets/images/clients/client-logo-10.svg"/></div></div>
                    </div>

                    <div className="slider-container text-center px-md-4 px-lg-5">
                        
                        <div className="testimonials-slider tiny-slider">
                            <div className="item">
                                <div className="item-inner position-relative">    
                                    <div className="quote-holder">
                                        <i className="quote-icon fa-solid fa-quote-left"></i>
                                        <i className="quote-icon fa-solid fa-quote-right"></i>
                                        <blockquote className="quote-content px-3 px-lg-5 mb-3 text-start">
                                            You can list client testimonials here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at erat vel quam cursus sagittis. <span className="quote-highlight">Highlighted text example etiam volutpat ornare quam</span> at cursus mi tristique sit amet.
                                        </blockquote>
                                    </div>
                                    <div className="source-holder ps-3 ps-lg-5 text-start">
                                        <div className="source-meta">
                                            <div className="name">Sam Doe, Lead Developer at Stripe</div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-inner">    
                                    <div className="quote-holder">
                                        <i className="quote-icon fa-solid fa-quote-left"></i>
                                        <i className="quote-icon fa-solid fa-quote-right"></i>
                                        <blockquote className="quote-content px-3 px-lg-5 mb-3 text-start">
                                            <i className="quote-icon fa-solid fa-quote-left"></i>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at erat vel quam cursus sagittis.  <span className="quote-highlight">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>. In egestas est at lorem lacinia malesuada vel at arcu. 
                                        </blockquote>
                                    </div>
                                    <div className="source-holder ps-3 ps-lg-5 text-start">
                                        <div className="source-meta">
                                            <div className="name">Sarah Doe, Project Manager at Revlout</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-inner">    
                                    <div className="quote-holder text-start text-md-center">
                                        <i className="quote-icon fa-solid fa-quote-left"></i>
                                        <i className="quote-icon fa-solid fa-quote-right"></i>
                                        <blockquote className="quote-content px-3 px-lg-5 mb-3 text-start">
                                            <i className="quote-icon fa-solid fa-quote-left"></i>
                                            Excellent lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at erat vel quam cursus sagittis. Curabitur vestibulum mollis leo, sed ultricies felis egestas ac. <span className="quote-highlight">Etiam volutpat ornare quam</span>.
                                        </blockquote>
                                    </div>
                                    <div className="source-holder ps-3 ps-lg-5 text-start">
                                        <div className="source-meta">
                                            <div className="name">James Doe, Tech Lead at Coinbase</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        <div className="slider-custom-controls d-none d-md-block">
                            <div className="prev" data-controls="prev">
                                <i className="fas fa-chevron-left"></i>
                            </div>
                            <div className="next" data-controls="next">
                                <i className="fas fa-chevron-right"></i>         
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-cta text-center mt-5">
                        <a className="btn btn-secondary theme-btn-cta" href="contact.html">Get In Touch <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
</svg></a>
                    </div>
                </div>
            </section>
                    
            <section className="skills-section section mx-auto mb-0">
                <h3 className="section-heading mb-4">Skills &amp; Experiences</h3>
                <div className="section-intro mb-5 limit-max-width text-md-center">
                    Section intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. You can replace or add more tech icons below to reflect your skillset.
                </div>
                <div className="row tech-list justify-content-center align-items-center">
                    
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/javascript.svg" alt=""/></div>
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/nodejs.svg" alt=""/></div>
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/typescript.svg" alt=""/></div>
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/react.svg" alt=""/></div>
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/angular.svg" alt=""/></div>
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/bootstrap5.svg" alt=""/></div>

                    <div className="clearfix"></div>
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/python.svg" alt=""/></div>
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/django-alt.svg" alt=""/></div>
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/solidity.svg" alt=""/></div>
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/golang.svg" alt=""/></div>
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/c++.svg" alt=""/></div>
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/php.svg" alt=""/></div>
                    
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/postgresql.svg" alt=""/></div>
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/redis.svg" alt=""/></div>
                    <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5"><img className="rounded" src="assets/images/tech-icons/mongodb.svg" alt=""/></div>
                </div>
                <div className="section-cta text-center mt-4">
                    <a className="btn btn-secondary theme-btn-cta" href="resume.html">View Resume <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
</svg></a>
                </div>
                
                <div className="skill-blocks py-5 row justify-content-center">
                    <div className="item col-md-6 col-lg-4 text-md-center">
                        <div className="item-icon-holder mx-md-auto"><i className="item-icon bi bi-terminal"></i></div>
                        <h3 className="item-title mb-3">Web Development</h3>
                        <div className="item-desc">
                        Describe your expertise here. You can change the icon above to any of the <a href="https://icons.getbootstrap.com/" target="_blank">free Bootstrap icons</a>, consectetur adipiscing elit. Phasellus enim quam, gravida accumsan dignissim eu. 
                        </div>
                    </div>
                    <div className="item col-md-6 col-lg-4 text-md-center">
                        <div className="item-icon-holder  mx-md-auto"><i className="item-icon bi bi-database-check"></i></div>
                        <h3 className="item-title mb-3">Database Infrastructure</h3>
                        <div className="item-desc">
                            Describe your expertise here. You can change the icon above to any of the free Bootstrap icons, consectetur adipiscing elit. Phasellus enim quam, gravida accumsan dignissim eu. 
                        </div>
                    </div>
                    <div className="item col-md-6 col-lg-4 text-md-center">
                        <div className="item-icon-holder  mx-md-auto"><i className="item-icon bi bi-infinity"></i></div>
                        <h3 className="item-title mb-3">DevOps</h3>
                        <div className="item-desc">
                            Describe your expertise here. You can change the icon above to any of the free Bootstrap icons, consectetur adipiscing elit. Phasellus enim quam, gravida accumsan dignissim eu. 
                        </div>
                    </div>
                    <div className="item col-md-6 col-lg-4 text-md-center">
                        <div className="item-icon-holder  mx-md-auto"><i className="item-icon bi bi-apple"></i></div>
                        <h3 className="item-title mb-3">iOS App <br/>Development</h3>
                        <div className="item-desc">
                            Describe your expertise here. You can change the icon above to any of the free Bootstrap icons, consectetur adipiscing elit. Phasellus enim quam, gravida accumsan dignissim eu. 
                        </div>
                    </div>
                    <div className="item col-md-6 col-lg-4 text-md-center">
                        <div className="item-icon-holder  mx-md-auto"><i className="item-icon bi bi-android2"></i></div>
                        <h3 className="item-title mb-3">Android App <br/>Development</h3>
                        <div className="item-desc">
                            Describe your expertise here. You can change the icon above to any of the free Bootstrap icons, consectetur adipiscing elit. Phasellus enim quam, gravida accumsan dignissim eu. 
                        </div>
                    </div>
                </div>
                <div className="section-cta text-center">
                    <a className="btn btn-secondary theme-btn-cta" href="contact.html">Get In Touch <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
</svg></a>
                </div>
            </section>
        </>
    )
}

export default Home