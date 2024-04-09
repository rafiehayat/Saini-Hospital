import { React, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid bg-dark px-5 d-none d-lg-block backgroundColor-green">
                <div className="row gx-0 align-items-center" style={{ height: "45px" }}>
                    <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                        <div className="d-flex flex-wrap">
                            <Link to="/" className="text-light me-4"><i className="fas fa-map-marker-alt text-primary me-2"></i>Village Jalpura, Sector 1,Greater Noida</Link>
                            <Link to="/find-doc" className="text-light">Find A Doctor</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-flex align-items-center justify-content-end">
                            {/* <Link to="/" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="/" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-twitter"></i></Link>
                            <Link to="/" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-instagram"></i></Link>
                            <Link to="/" className="btn btn-light btn-square border rounded-circle nav-fill me-0"><i className="fab fa-linkedin-in"></i></Link> */}
                            <Link to="tel:9312278831" className="text-light me-4"><i className="fas fa-phone-alt text-primary me-2" ></i>+91 9312278831</Link>

                            <Link to="mailto:info@sainihospitals.com" className="text-light me-0"><i className="fas fa-envelope text-primary me-2"></i>info@sainihospitals.com</Link>

                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light bg-white  px-4 px-lg-5 py-lg-0">
                    <Link to="/" className="navbar-brand p-0">
                        <img className="bg-light" src="img/logo.png" alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">

                        <div className="navbar-nav ms-auto py-0">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/about" className=" nav-link">About</Link>
                            <Link to="/services" className="nav-item nav-link">Facilities</Link>
                            <Link to="/blog" className="nav-item nav-link">Blog</Link>
                            <Link to="/contactus" className="nav-item nav-link">ContactUs</Link>
                            <div className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" type="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" style={{ height: "30px", border: "none", backgroundColor: "transparent" }}>
                                    Department
                                </button>
                                <div className="dropdown-menu dropdown-menu-right ">
                                    <Link to="/pathology" className="dropdown-item ">PATHOLOGY</Link>
                                    <Link to="/pediatrics" className="dropdown-item ">PEDIATRICS</Link>
                                    <Link to="/orthopedics" className="dropdown-item ">ORTHOPEDICS</Link>
                                    <Link to="/gynecology" className="dropdown-item ">GYNECOLOGY</Link>
                                    <Link to="/dental" className="dropdown-item ">DENTAL CARE</Link>
                                    <Link to="/gen-phy" className="dropdown-item ">GENERAL PHYSICIAN</Link>
                                    <Link to="/gen-surgeon" className="dropdown-item ">GENERAL SURGEON</Link>
                                    <Link to="/anesthesiologist" className="dropdown-item ">ANESTHESIOLOGIST</Link>
                                    <Link to="/physiotherapist" className="dropdown-item ">PHYSIOTHERAPIST</Link>



                                </div>
                            </div>
                        </div>

                        <Link to="/bookappointment" className="btn btn-color rounded-pill text-white py-2 px-4 flex-wrap flex-sm-shrink-0">Book Appointment</Link>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default Navbar