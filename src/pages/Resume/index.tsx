const Resume = () => {
    return (
        <div className="resume-wrapper mx-auto rounded-2">
            <div className="resume-header px-4 px-lg-5">
                <div className="resume-profile-holder text-center">
                    <img className="resume-profile-pic rounded-circle" src="assets/images/profile.webp" alt="image"/>
                    
                    <h2 className="resume-name text-uppercase">Maximiliano Restrepo Bedoya</h2>
                    <div className="resume-role-title text-uppercase">Full stack developer | VTEX IO</div>
                    <div className="resume-contact mt-4">
                        <ul className="resume-contact-list list-unstyled list-inline mb-0 justify-content-between">
                            <li className="list-inline-item me-md-3 me-lg-5">
                                <a href="tel:573003064781">
                                    <i className="resume-contact-icon bi bi-telephone-inbound me-2"></i> +57 300 3064781
                                </a>
                            </li>
                            <li className="list-inline-item me-lg-5">
                                <a href="https://www.linkedin.com/in/maximiliano-restrepo/" target="_blank">
                                    <i className="resume-contact-icon bi bi-linkedin me-2"></i> Linkedin
                                </a>
                            </li>
                            <li className="list-inline-item me-md-3 me-lg-5">
                                <a href="mailto:maximitianoreste@gmail.com">
                                    <i className="resume-contact-icon bi bi-envelope me-2"></i> maximitianoreste@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="resume-body p-4 p-lg-5">
                <div className="row">
                    <div className="col-main col-12 col-lg-8 pe-lg-4">
                        <section className="resume-summary-section resume-section">
                            <h3 className="resume-section-heading text-uppercase py-2 py-lg-3 py-2 py-lg-3"><i className="resume-section-heading-icon bi bi-person me-2"></i>About Me</h3>
                            <div className="resume-summary-desc">
                            I am a programmer with extensive experience in developing and maintaining applications and systems. I possess excellent communication, leadership and problem-solving skills. These qualities allow me to work efficiently as a team and meet the quality standards required for each project. I am committed to providing high-value solutions to companies so that they can achieve their desired goals.

                            </div>
                        </section>
                        
                        <hr/>
                        
                        <section className="resume-experience-section resume-section">
                            <h3 className="resume-section-heading text-uppercase py-2 py-lg-3 py-3"><i className="resume-section-heading-icon bi bi-briefcase me-2"></i>Work Experience</h3>
                            <div className="resume-timeline position-relative">
                                <article className="resume-timeline-item position-relative pb-5">
                                    
                                    <div className="resume-timeline-item-header mb-2">
                                        
                                        <div className="resume-position-meta d-flex justify-content-between mb-1">
                                            <div className="resume-position-time">March 2021 - February 2023</div>
                                            <div className="resume-company-name">DevGroup</div>
                                        </div>
                                        <h3 className="resume-position-title mb-1">Full Stack Developer</h3>

                                    </div>
                                    <div className="resume-timeline-item-desc">
                                        
                                        
                                        <ul className="resume-timeline-list">
                                            <li>
                                                Analysis, development, maintenance and implementation of CMS and ecommerces (B2B, B2C and multilenguage)
                                            </li>
                                            <li>
                                                Development of Node services such as loyalty systems, integrations with external systems and customized administrative modules for companies.
                                            </li>
                                            <li>
                                                Code analysis and cleaning, optimization, migrations, SEO improvement and implementations with google analytics
                                            </li>
                                            <li>
                                                Training to companies and teams on programming
                                            </li>
                                            <li>
                                                In charge of leading projects from estimation and costing to deployment and delivery to the client together with a team of people
                                            </li>
                                        </ul>
                                        
                                    </div>

                                </article>
                        
                                <article className="resume-timeline-item position-relative pb-5">

                                    <div className="resume-timeline-item-header mb-2">
                                        
                                        <div className="resume-position-meta d-flex justify-content-between mb-1">
                                            <div className="resume-position-time">May 2023 - Mar 2024</div>
                                            <div className="resume-company-name">GranPanda PE</div>
                                        </div>
                                        <h3 className="resume-position-title mb-1">Full Stack Developer</h3>
                                    </div>
                                    <div className="resume-timeline-item-desc">
                                        <ul className="resume-timeline-list">
                                            <li>
                                                Analysis, development, maintenance and implementation of CMS government and ecommerces
                                            </li>
                                            <li>
                                                Development of tracking services in the purchase flow of a customer with their respective analytics system.
                                            </li>
                                        </ul>
                                        
                                    </div>

                                </article>

                            </div>
                        </section>
                    </div>
                    <div className="col-12 col-lg-4 ps-lg-4">
                        <section className="resume-skills-section resume-section">
                            <h3 className="resume-section-heading text-uppercase py-2 py-lg-3 py-3"><i className="resume-section-heading-icon bi bi-gear me-2"></i>Tech Stack</h3>
                            <ul className="list-inline">
                                <li className="list-inline-item"><span className="badge resume-skill-badge">JavaScript</span></li>
                                <li className="list-inline-item"><span className="badge resume-skill-badge">Java</span></li>
                                <li className="list-inline-item"><span className="badge resume-skill-badge">ReactJS</span></li>
                                <li className="list-inline-item"><span className="badge resume-skill-badge">Typescript</span></li>
                                <li className="list-inline-item"><span className="badge resume-skill-badge">NodeJS</span></li>
                                <li className="list-inline-item"><span className="badge resume-skill-badge">GraphQL</span></li>
                                <li className="list-inline-item"><span className="badge resume-skill-badge">MongoDB</span></li>
                                <li className="list-inline-item"><span className="badge resume-skill-badge">MySQL</span></li>
                                <li className="list-inline-item"><span className="badge resume-skill-badge">VTEX IO</span></li>
                                                            
                            </ul>
                        </section>
                        
                        <hr/>
                        
                        <section className="resume-skills-section resume-section">
                            <h3 className="resume-section-heading text-uppercase py-2 py-lg-3 py-3"><i className="resume-section-heading-icon bi bi-person-gear me-2"></i>Soft Skills</h3>
                            
                            <ul className="list-unstyled">
                                <li className="mb-2"><div className="resume-skill-name">Leadship</div></li>
                                <li className="mb-2"><div className="resume-skill-name">Growth Mindset</div></li>
                                <li className="mb-2"><div className="resume-skill-name">Commitment</div></li>
                                <li className="mb-2"><div className="resume-skill-name">Critical thinking</div></li>
                                <li className="mb-2"><div className="resume-skill-name">Flexibility</div></li>
                            </ul>  
                        </section>
                        
                        
                        <hr/>
                        
                        <section className="resume-educate-section resume-section">
                            <h3 className="resume-section-heading text-uppercase py-2 py-lg-3 py-3"><i className="resume-section-heading-icon bi bi-book me-2"></i>Education</h3>
                            <ul className="list-unstyled">

                                <li className="mb-2">
                                    <div className="resume-degree font-weight-bold">Software Development Technician</div>
                                    <div className="resume-degree-org">Universidad Pascual Bravo</div>
                                    <div className="resume-degree-time">2021</div>
                                </li>
                                <li className="mb-2">
                                    <div className="resume-degree font-weight-bold">Sprint Google Cloud Platform Colombia</div>
                                    <div className="resume-degree-org">Google</div>
                                    <div className="resume-degree-time">2021</div>
                                </li>
                                <li className="mb-2">
                                    <div className="resume-degree font-weight-bold">Software Development and Entrepreneurship</div>
                                    <div className="resume-degree-org">Fundación Rofé</div>
                                    <div className="resume-degree-time">2021</div>
                                </li>
                                <li className="mb-2">
                                    <div className="resume-degree font-weight-bold">Software Development and Entrepreneurship</div>
                                    <div className="resume-degree-org">Oracle One</div>
                                    <div className="resume-degree-time">2023</div>
                                </li>
                                <li>
                                    <div className="resume-degree font-weight-bold">English</div>
                                    <div className="resume-degree-org">Slang</div>
                                    <div className="resume-degree-time">2020 (Currently)</div>
                                </li>
                            </ul>
                        </section>
                        
                        <hr/>
                        
                        <section className="resume-lang-section resume-section">
                            <h3 className="resume-section-heading text-uppercase py-2 py-lg-3 py-3"><i className="resume-section-heading-icon bi bi-translate me-2"></i>Languages</h3>
                                <ul className="list-unstyled resume-lang-list">
                                <li className="mb-2">
                                    <div className="resume-lang-name">Spanish (Native)</div>
                                </li>
                                <li className="mb-2">
                                    <div className="resume-lang-name">English (B1)</div>
                                </li>
                            </ul>
                        </section>
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume