import { React, Link } from "react-router-dom";
const Footer = () => {
    return (
        <div>
            {/* <!-- Footer Start --> */}
            <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4"><i className="fas fa-star-of-life me-3"></i>Saini Hospitals</h4>
                                <h5 className="text-light mb-4">Newsletter</h5>
                                <p className="text-light">Subscribe our newsletter service to get updated about Us</p>
                                <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                                    <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                    <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="mb-4 text-white">Patient Guide</h4>
                                <Link to="/about" className="text-light"><i className="fas fa-angle-right me-2 text-light"></i> Find A Doctor</Link>
                                <Link to="/contactus" className="text-light"><i className="fas fa-angle-right me-2 text-light"></i> Our Network</Link>
                                <Link to="" className="text-light"><i className="fas fa-angle-right me-2 text-light"></i> Book an Appointment</Link>
                                <Link to="" className="text-light"><i className="fas fa-angle-right me-2 text-light"></i> Make an Enquiry</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="mb-4 text-white">Diseases We Treat</h4>
                                <Link to="" className="text-light"><i className="fas fa-angle-right me-2"></i> Chest Pain</Link>
                                <Link to="" className="text-light"><i className="fas fa-angle-right me-2"></i> Heart Attack</Link>
                                <Link to="" className="text-light"><i className="fas fa-angle-right me-2"></i> Varicose Veins</Link>
                                <Link to="" className="text-light"><i className="fas fa-angle-right me-2"></i> Thyroid Problems</Link>
                                <Link to="" className="text-light"><i className="fas fa-angle-right me-2"></i> View All</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="mb-4 text-white">Contact Info</h4>
                                <Link to="" className="text-light" ><i className="fa fa-map-marker-alt me-2 text-light"></i> Jalpura, Greater Noida, Uttar Pradesh</Link>
                                <Link to="" className="text-light" ><i className="fas fa-envelope me-2 text-light"></i>info@sainihospitals.com</Link>
                                <Link to="" className="text-light" ><i className="fas fa-phone me-2 text-light"></i> +91 9312278831</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}

            {/* <!-- Copyright Start --> */}
            <div className="container-fluid copyright py-4">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-md-6 text-center text-md-start mb-md-0">
                            <span className="text-white"><Link to="/"><i className="fas fa-copyright text-light me-2"></i>Saini Hospital</Link>, All right reserved.</span>
                        </div>
                        <div className="col-md-6 text-center text-md-end text-white">
                            Designed By <Link className="border-bottom" to="/">VMS Solutions</Link> 
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Copyright End --> */}
        </div>
    )
}

export default Footer