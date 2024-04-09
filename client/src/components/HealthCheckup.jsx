import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../assets/checkup1.webp"
import img2 from "../assets/checkup2.webp"
import img3 from "../assets/checkup3.webp"
import img4 from "../assets/checkup4.webp"
import img5 from "../assets/checkup5.webp"
import img6 from "../assets/checkup6.webp"


const HealthCheckup = () => {
  return (
    <>
       <div className="container-fluid blog mt-4 pt-4 py-2">
            <div className="container mt-4 pt-4 py-5">
                <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="display-3 mb-2">Preventive Health Checkup</h1>
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="blog-item rounded">
                            <div className="blog-img">
                                <img src={img1} className="img-fluid w-100" alt="" />
                            </div>
                            <div className="blog-centent p-4">
                                <Link to="#" className="h4 text-light">FULL BODY CHECKUP - MIN (30 TESTS)</Link>
                                <p className="text-dark truncate">Tests for screening of the health status Like Lipid, Liver,Thyroid, Iron, Kidney.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="blog-item rounded">
                            <div className="blog-img">
                                <img src={img2} className="img-fluid w-100" alt="" />
                            </div>
                            <div className="blog-centent p-4">
                                <Link to="#" className="h4 text-light">FULL BODY CHECKUP - ADVANCED (95 TESTS)</Link>
                                <p className=" text-dark truncate">Tests includes Cardiac Risk Markers, Complete Hemogram,Diabetics, Iron, Lipid, Liver, Kidney, Thyroid, Vitamin.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="blog-item rounded">
                            <div className="blog-img">
                                <img src={img3} className="img-fluid w-100" alt="" />
                            </div>
                            <div className="blog-centent p-4">
                                <Link to="#" className="h5 text-light truncate">INFECTION CHECKUP PROFILE (32 TESTS)</Link>
                                <p className=" text-dark truncate">Thyrocare launches Infection Checkup Profile which aids in clinical diagnosis of any infectious disease including Covid-19.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="blog-item rounded">
                            <div className="blog-img">
                                <img src={img4} className="img-fluid w-100" alt="" />
                            </div>
                            <div className="blog-centent p-4">
                                <Link to="#" className="h5 text-light truncate">AAROGYAM MASTER PLUS (139 TESTS)</Link>
                                <p className=" text-dark truncate">Arthritis, Cardiac Risk Markers, Hormone, Complete Hemogram, Diabetics Iron, Kidney, Thyroid, Steroid and more..</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="blog-item rounded">
                            <div className="blog-img">
                                <img src={img5} className="img-fluid w-100" alt="" />
                            </div>
                            <div className="blog-centent p-4">
                                <Link to="#" className="h5 text-light truncate">AAROGYAM B (60 TESTS)</Link>
                                <p className=" text-light truncate">Tests for screening of the health status Like Lipid, Liver,Thyroid, Iron, Diabetic,Complete Hemogram,Kidney.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="blog-item rounded">
                            <div className="blog-img">
                                <img src={img6} className="img-fluid w-100" alt="" />
                            </div>
                            <div className="blog-centent p-4">
                                <Link to="#" className="h5 text-light truncate">AAROGYAM C (63 TESTS)</Link>
                                <p className=" text-light truncate">Tests for screening of the health status Like Lipid, Liver,Thyroid, Iron, Diabetic, CBC, Kidney, Hormone, Vitamins and more..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HealthCheckup
