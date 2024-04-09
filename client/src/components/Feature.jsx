import { React ,Link } from "react-router-dom";

const Feature = () => {
  return (
    <div>
        {/* <!-- Feature Start --> */}
        <div className="container-fluid feature py-5">
            <div className="container py-5 pt-4 mt-4">
                <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="sub-style">
                        <h4 className="sub-title px-3 mb-0">Why Choose Us</h4>
                    </div>
                    {/* <h1 className="display-5 mb-3">Get Your Life Style Back</h1> */}
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="row-cols-1 feature-item p-4">
                            <div className="col-12 text-center">
                                <div className="feature-icon mb-3">
                                    <div className="p-3 d-inline-flex bg-white rounded">
                                        <i className="fas fa-briefcase-medical fa-4x text-primary"></i>
                                    </div>
                                </div>
                                <div className="feature-content d-flex flex-column">
                                    <h5 className="mb-3 text-dark">Emergency</h5>
                                    <p className="mb-0 text-dark">Equipped With the State of the Art facility to manage all types of Trauma, Medical Queries, or Surgical emergencies. Our Emergency Department</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="row-cols-1 feature-item p-4">
                            <div className="col-12 text-center">
                                <div className="feature-icon mb-3">
                                    <div className="p-3 d-inline-flex bg-white rounded">
                                        <i className="fas fa-hospital-user fa-4x text-primary"></i>
                                    </div>
                                </div>
                                <div className="feature-content d-flex flex-column">
                                    <h5 className="mb-3">Blood Bank</h5>
                                    <p className="mb-0 text-dark">The 24hour Blood Bank present within the campus is equipped with an ultramodern collection centre, component lab and single donor plateletpheresis (SDP).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="row-cols-1 feature-item p-4">
                            <div className="col-12 text-center">
                                <div className="feature-icon mb-3">
                                    <div className="p-3 d-inline-flex bg-white rounded">
                                        <i className="fas fa-ambulance fa-4x text-primary"></i>
                                    </div>
                                </div>
                                <div className="feature-content d-flex flex-column">
                                    <h5 className="mb-3">Ambulance</h5>
                                    <p className="mb-0 text-dark">Popular Hospital has Air Ambulance services. It also provides ground ambulance services to shift patient from one hospital to another hospital.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="row-cols-1 feature-item p-4">
                            <div className="col-12 text-center">
                                <div className="feature-icon mb-3">
                                    <div className="p-3 d-inline-flex bg-white rounded">
                                        <i className="fas fa-diagnoses fa-4x text-primary"></i>
                                    </div>
                                </div>
                                <div className="feature-content d-flex flex-column">
                                    <h5 className="mb-3">Diagnostics & Imaging</h5>
                                    <p className="mb-0 text-dark">The Pathology Laboratory at Popular Hospital is fully licensed .The laboratory supplements its testing capability by using reference laboratories that provide high quality service.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="row-cols-1 feature-item p-4">
                            <div className="col-12 text-center">
                                <div className="feature-icon mb-3">
                                    <div className="p-3 d-inline-flex bg-white rounded">
                                        <i className="fas fa-wheelchair fa-4x text-primary"></i>
                                    </div>
                                </div>
                                <div className="feature-content d-flex flex-column">
                                    <h5 className="mb-3">ICU Service</h5>
                                    <p className="mb-0 text-dark">Intensive care Unit is needed if someone is seriously ill and requires intensive treatment and close monitoring, or surgery intensive care can help them to recover.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="row-cols-1 feature-item p-4">
                            <div className="col-12 text-center">
                                <div className="feature-icon mb-3">
                                    <div className="p-3 d-inline-flex bg-white rounded">
                                        <i className="fas fa-capsules fa-4x text-primary"></i>
                                    </div>
                                </div>
                                <div className="feature-content d-flex flex-column">
                                    <h5 className="mb-3">Pharmacy</h5>
                                    <p className="mb-0 text-dark">Hospital Pharmacy is situated in the campus of all the hospitals to facilitate patients fulfilling their emergency needs as well as the medicines as prescribed inside the hospital .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
                        <Link to="/feature" className="btn btn-color rounded-pill text-white py-3 px-5">More Details</Link>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Feature End --> */}
    </div>
  )
}

export default Feature