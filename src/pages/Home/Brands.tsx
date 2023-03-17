import { Link } from "react-router-dom"

const Brands = () => {
    return (
        <section className="testimonials-section section py-5 mx-auto">
            <div className="container">
                <h3 className="mb-4 text-center section-heading">Clients I Worked With</h3>
                        
                <div className="client-logo-list row d-flex justify-content-center align-items-stretch py-4 gx-2 gx-lg-3">
                    <div className="logo-item col-4 col-md-3 col-lg-auto mb-3"><div className="logo-holder"><img className="logo-image" src="assets/images/clients/logo2.png" alt="Samsung Pe"/></div></div>
                    <div className="logo-item col-4 col-md-3 col-lg-auto mb-3"><div className="logo-holder"><img className="logo-image" src="assets/images/clients/logo1.png" alt="Bata Pe"/></div></div>
                    <div className="logo-item col-4 col-md-3 col-lg-auto mb-3"><div className="logo-holder"><img className="logo-image" src="assets/images/clients/logo3.svg" alt="Brandlive Co"/></div></div>
                    <div className="logo-item col-4 col-md-3 col-lg-auto mb-3"><div className="logo-holder"><img className="logo-image" src="assets/images/clients/logo4.png" alt="Sideas"/></div></div>
                    <div className="logo-item col-4 col-md-3 col-lg-auto mb-3"><div className="logo-holder"><img className="logo-image" src="assets/images/clients/logo10.png" alt="Ecomsultores"/></div></div>
                    <div className="logo-item col-4 col-md-3 col-lg-auto mb-3"><div className="logo-holder"><img className="logo-image" src="assets/images/clients/logo9.png" alt="Devgroup"/></div></div>
                    <div className="logo-item col-4 col-md-3 col-lg-auto mb-3"><div className="logo-holder"><img className="logo-image" src="assets/images/clients/logo5.png" alt="Gran Panda"/></div></div>
                    <div className="logo-item col-4 col-md-3 col-lg-auto mb-3"><div className="logo-holder"><img className="logo-image" src="assets/images/clients/logo6.png" alt="Audiomusica Pe"/></div></div>
                    <div className="logo-item col-4 col-md-3 col-lg-auto mb-3"><div className="logo-holder"><img className="logo-image" src="assets/images/clients/logo7.webp" alt="eHommer"/></div></div>
                    <div className="logo-item col-4 col-md-3 col-lg-auto mb-3"><div className="logo-holder"><img className="logo-image" src="assets/images/clients/logo8.png" alt="Tribu"/></div></div>
                </div>
                        
                <div className="section-cta text-center mt-5">
                    <Link className="btn btn-secondary theme-btn-cta" to="/contact">
                        Get In Touch 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Brands