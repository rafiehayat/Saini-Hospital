import { React, Link } from "react-router-dom";
import FooterTop from "../FooterTop";

const Gynecology = () => {
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
                                <h1 className="display-3 mt-4 pt-4 mb-4">Gynecology</h1>
                                <p>We offer antenatal checkups and offer all diagnostic workups preparing parents for the task ahead. We also offer continuous electronic fetal heart rate monitoring (CTG) and pain relief by psycho prophylaxes, high-risk pregnancy epidural & TENS.We offer medical, minimally invasive & surgical management of all type of gynecological problems like menstrual abnormalities, prolapsed, Pelvic floor depict, fibroids & other tumors of uterus & ovaries. High-risk surgical patient (those with HT, DM, and Heart disease) are cared for with special monitoring in OT and backup by well-equipped ICU.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterTop/>
        </>
    )
}

export default Gynecology