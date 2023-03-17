import "./contact.css"

const Contact = () => {
  return (
    <section className="page-intro-section section has-profile-image mx-auto ">
					
      <div className="profile-holder text-center">
        <img className="profile-pic rounded-circle" src="assets/images/profile.webp" alt="image"/>
      </div>
      <div className="intro-holder">
        <h2 className="intro-name text-center">Get In Touch</h2>
        <div className="contact-intro text-md-center limit-max-width mx-auto">
            <p>If you are interested in learning more about how I can help you. Contact me to discuss how we can work together to achieve your goals. I am confident that we can find a successful solution.</p>
            
            
        </div>
        
        <ul className="social-list list-inline mx-auto d-block d-lg-none py-3 text-center">

          <li className="list-inline-item me-1 me-lg-2"><a target="_blank" href="https://github.com/ditopixels"><i className="fa-brands fa-github fa-fw"></i></a></li>
          <li className="list-inline-item me-1 me-lg-2"><a target="_blank" href="https://www.linkedin.com/in/juan-diego-durango-morales/"><i className="fa-brands fa-linkedin-in fa-fw"></i></a></li>
          <li className="list-inline-item me-1 me-lg-2"><a target="_blank" download="Juan Diego Morales - Curriculum.pdf" href="/curriculum.pdf"><i className="fa-solid fa-file fa-fw"></i></a></li>
        </ul>
        
      </div>
      
      <div className="contact-form-wrapper pt-3">
        <div className="contact-intro text-md-center limit-max-width mx-auto">
          <ul className="list-inline">
              <li className="list-inline-item">
                <span className="badge btns-contact">
                  <a className="btn btn-secondary top-bar-cta" href="tel:573246215603">Call me</a>
                  <a className="btn btn-secondary top-bar-cta" href="mailto:juandiego90123@gmail.com">Email</a>
                  <a className="btn btn-secondary top-bar-cta" href="https://api.whatsapp.com/send?phone=573246215603" target="_blank">Whatsapp</a>
                </span>
              </li>                       
          </ul>      
        </div>
      </div>
      
    </section>
  )
}

export default Contact