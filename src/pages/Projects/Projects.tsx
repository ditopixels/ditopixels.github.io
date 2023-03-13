import "./projects.css"

const PROJECTS = [
    {
        name: "Bata Perú",
        description: "Ecommerce analysis, development and implementation (Home, Search pages, Categories, Product page, Checkout, transactional emails and more)",
        link: "https://www.bata.pe/"
    },
    {
        name: "Samsung",
        description: "<ul><li>Analysis, development and deployment of backend for CMS and promotional landings</li><li>Creation of promotional landings</li><li>Analysis, development and deployment of CMS for dynamic and editable landings with authentication system, roles, user creation, schemas and more</li><li>Support to Angular CMS</li></ul>"
    },
    {
        name: "Mercury",
        description: "Analysis, development and implementation of B2B e-commerce with personalized address system for customer users."
    },
    {
        name: "Invitadisima",
        description: "Multilingual e-commerce analysis, development and implementation (Home, Search pages, Categories, Product page, Checkout, transactional emails and more)"
    },
    {
        name: "Bataclub",
        description: "Analysis and implementation of a gift card provider between the loyalty system and the Bata payment system."
    },
    {
        name: "Mossashoes",
        description: "Analysis, development and implementation of e-commerce with multiple white labels (branches) ",
        link: "https://www.mossashoes.com/"
    },
    {
        name: "Pepeganga",
        description: "Development of datalayers for google analytics specialized to some interactions or events in the store.",
        link: "https://www.pepeganga.com/"
    },
    {
        name: "Tienda de mascotas",
        description: "<ul><li>Development of search section with customized parameters</li><li>Development of a manageable page with graphs and analytics of orders</li><li>Integration of a user's purchase flow with message center (mails)</li><li>Web support and enhancements</li><li>Development of content management system for seller based components</li><li>Development of a salechannel system for the store that connects to a variety of developments.</li></ul>",
        link: "tiendademascotas.com.ar"
    },
    {
        name: "Filtering method",
        description: "CRM development for Norwegian ORG in Angular for the creation, administration and monitoring of forms for different entities."
    },
    {
        name: "Loyalty ecomsultores",
        description: "Development of multi-client loyalty system (Multitenancy) connected to external points system FNET3"
    },
    {
        name: "Blushbar",
        description: "Migration of store and development of about 8 pages including dynamic and manageable quizzes page, giftcards, purchase of products with external points and more.",
        link: "https://www.blush-bar.cl/rutina-perfecta"
    },
    {
        name: "Debarricas",
        description: "Ecommerce development and implementation (Home, Search pages, Categories, Product page, Checkout, transactional emails and more)"
    },
    {
        name: "Faces",
        description: "Ecommerce development and implementation (Home, Search pages, Categories, Product page, Checkout, and more)",
        link: "https://www.co.faces.com/"
    },
    {
        name: "Alfa",
        description: "Implementation of approximately seven developments, including forms, branches page with Google integration, integration with external brand back-end, and more.",
        link: "https://www.alfa.com.co/tiendas"
    },
    {
        name: "Ortopedicos",
        description: "Ecommerce development and implementation (Home, Search pages, Categories, Product page, Checkout, and more)"
    },
    {
        name: "Dermatológica",
        description: "Ecommerce development and implementation (Home, Search pages, Categories, Product page, Checkout, transactional emails and more)",
        link: "https://tiendaonline.dermatologica.com.co/"
    },
    {
        name: "San Isidro Lonas",
        description: "Ecommerce development and implementation (Home, Search pages, Categories, Product page, Checkout, transactional emails and more)",
        link: "https://www.sanisidrolonas.com.ar/"
    },
    {
        name: "The Bar Panama",
        description: "Ecommerce development and implementation (Home, Search pages, Categories, Product page, Checkout, and more)"
    },
    {
        name: "Droguerías Santa Rosa",
        description: "Ecommerce development and implementation (Home, Search pages, Categories, Product page, Checkout, transactional emails and more)"
    },
    {
        name: "Rubbermaid",
        description: "Ecommerce development and implementation (Home, Search pages, Categories, Product page, Checkout, transactional emails and more)"
    }
]

const Projects = () => {
    return (
        <section className="projects-section section mx-auto">
            <div className="row justify-content-center gx-lg-5">

                {PROJECTS.map(({name, description, link}, i)=>(
                    <div id={`${name}`} className="project-item col-12 col-md-6 col-lg-12 mb-5">
                        <div className="project-item-inner row">
                            <div className="col-12 col-lg-5 col-xl-4">
                                <img className="project-thumb rounded-2 mb-3 mb-lg-0 rounded mx-auto" src={`assets/images/projects/${i+1}.webp`} alt={name}/>
                            </div>
                            <div className="col-12 col-lg-7 col-xl-8">
                                <h3 className="title"><a href="case-study.html">{name}</a></h3>
                                <div className="intro mb-3" dangerouslySetInnerHTML={{__html:description}}/>  
                                {link && <a className="more-link" href={link} target="_blank">Visit the website <span className="link-arrow"><i className="bi bi-arrow-right"></i></span></a>}
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            <p className="mb-4">
                Other projects I have also worked on:
            </p>
                    
            <div className="other-projects">
                <img src="assets/images/1.webp" alt="Tommy Hilfiger Peru" style={{padding: "10px"}}/>
                <img src="assets/images/2.webp" alt="Tommy Hilfiger Peru"/>
                <img src="assets/images/3.webp" alt="Tommy Hilfiger Peru"/>
                <img src="assets/images/4.webp" alt="Tommy Hilfiger Peru"/>
                <img src="assets/images/5.webp" alt="Tommy Hilfiger Peru"/>
                <img src="assets/images/6.webp" alt="Tommy Hilfiger Peru"/>
                <img src="assets/images/7.webp" alt="Tommy Hilfiger Peru"/>
                <img src="assets/images/8.webp" alt="Tommy Hilfiger Peru"/>
                <img src="assets/images/9.webp" alt="Tommy Hilfiger Peru" style={{padding: "10px"}}/>
            </div>

        </section>
    )
}

export default Projects