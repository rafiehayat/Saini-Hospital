import { React ,Link } from "react-router-dom";

const Team = () => {
  return (
    <div>
        <div className="container-fluid team py-2">
            <div className="container py-2">
                <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="sub-style">
                        <h4 className="sub-title px-2 mb-0">Meet our team</h4>
                    </div>
                    <h1 className="display-5 mb-4">Pioneer Team of Experts</h1>
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item rounded">
                            <div className="team-img rounded-top h-50">
                                <img src="img/team-1.jpg" className="img-fluid rounded-top w-100" alt="" />
                                <div className="team-icon d-flex justify-content-center">
                                    <Link className="btn btn-square btn-primary text-white rounded-circle mx-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square btn-primary text-white rounded-circle mx-1" to=""><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square btn-primary text-white rounded-circle mx-1" to=""><i className="fab fa-instagram"></i></Link>
                                    <Link className="btn btn-square btn-primary text-white rounded-circle mx-1" to=""><i className="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                            <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
                                <h5>Full Name</h5>
                                <p className="mb-0">Message Physio Therapist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item rounded">
                            <div className="team-img rounded-top h-50">
                                <img src="img/team-2.jpg" className="img-fluid rounded-top w-100" alt="" />
                                <div className="team-icon d-flex justify-content-center">
                                    <Link className="btn btn-square btn-primary text-white rounded-circle mx-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square btn-primary text-white rounded-circle mx-1" to=""><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square btn-primary text-white rounded-circle mx-1" to=""><i className="fab fa-instagram"></i></Link>
                                    <Link className="btn btn-square btn-primary text-white rounded-circle mx-1" to=""><i className="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                            <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
                                <h5>Full Name</h5>
                                <p className="mb-0">Rehabilitation Therapist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item rounded">
                            <div className="team-img rounded-top h-50">
                                <img src="img/team-3.jpg" className="img-fluid rounded-top w-100" alt="" />
                                <div className="team-icon d-flex justify-content-center">
                                    <Link className="btn btn-square btn-primary text-white rounded-circle mx-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square btn-primary text-white rounded-circle mx-1" to=""><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square btn-primary text-white rounded-circle mx-1" to=""><i className="fab fa-instagram"></i></Link>
                                    <Link className="btn btn-square btn-primary text-white rounded-circle mx-1" to=""><i className="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                            <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
                                <h5>Full Name</h5>
                                <p className="mb-0">Doctor of Physical therapy</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item rounded">
                            <div className="team-img rounded-top h-50">
                                <img src="img/team-4.jpg" className="img-fluid rounded-top w-100" alt=""/>
                                <div className="team-icon d-flex justify-content-center">
                                    <Link className="btn btn-square btn-primary text-white rounded-circle mx-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square btn-primary text-white rounded-circle mx-1" to=""><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square btn-primary text-white rounded-circle mx-1" to=""><i className="fab fa-instagram"></i></Link>
                                    <Link className="btn btn-square btn-primary text-white rounded-circle mx-1" to=""><i className="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                            <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
                                <h5>Full Name</h5>
                                <p className="mb-0">Doctor of Physical therapy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team