import { React, Link } from "react-router-dom";
import FooterTop from "../FooterTop";

const DentalCare = () => {
    return (
        <>
            <div className="container-fluid about bg-light mt-4 pt-4 py-5">
                <div className="container mt-4 pt-4 py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
                            <div className="about-img pb-5 ps-5">
                                <img src="img/hospital.jpg" className="img-fluid rounded w-100" style={{ objectFit: "cover" }} alt="xx" />
                                <div className="about-img-inner">
                                    <img src="img/hospital-2.jpg" className="img-fluid rounded-circle w-100 h-100" alt="xx" />
                                </div>
                                <div className="about-experience">15 years experience</div>
                            </div>
                        </div>
                        <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.4s">
                            <div className="section-title text-start mb-5">
                                <h1 className="display-3 mt-4 pt-4 mb-4">Dental Care</h1>
                                <p>Our wide range of cosmetic procedures will provide any patient with the perfect smile through expert craftsmanship. All prosthesis is designed through patient’s individual needs.</p>
                                <ul>
                                    <li>Complete dentures</li>
                                    <li>Partial dentures</li>
                                    <li>Crown and Bridge Work</li>
                                    <li>Aesthetic Rehabilitation</li>
                                    <li>Metal Based Dentures</li>
                                    <li>Full Ceramic Crowns</li>
                                    <li>Smile Design</li>
                                    <li>Flexible Denture</li>
                                    <li>Veneers Laminates</li>
                                    <li>Treatment of dark gums.</li>
                                    <li>Teeth whitening</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterTop/>
        </>
    )
}

export default DentalCare