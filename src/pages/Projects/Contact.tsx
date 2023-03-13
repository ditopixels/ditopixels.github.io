import { Link } from "react-router-dom"

const Contact = () => {
    return (
        <section className="leadgen-section section mx-auto">
	   
            <h3 className="section-heading text-start text-md-center text-highlight"> Need Help With Your Project?</h3>
            <div className="text-center mt-4">
                <Link className="btn btn-secondary" to="/contact">
                    Get In Touch 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
                    </svg>
                </Link>
            </div>
            
        </section>
    )
}

export default Contact