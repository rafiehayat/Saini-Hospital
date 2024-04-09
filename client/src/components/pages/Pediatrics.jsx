import { React, Link } from "react-router-dom";
import FooterTop from "../FooterTop";

const Pediatrics = () => {
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
                                <h1 className="display-3 mt-4 pt-4 mb-4">Pediatrics And Neonatology</h1>
                                <p>Pediatrics is the branch of medicine that deals with the medical care of infants, children, and adolescents. NIMMS MULTISPECIALITY HOSPITAL has an outstanding team of pediatric specialties covering 24×7 facility all major fields of pediatrics. Our Hospital centre has well equipped Pediatric and Neonatal Intensive Care Units, comparable to the best in the greater noida. The department has PICU, provide NICU & Septic nurseries which are equipped with the modern warmer, incubators, ventilators with the facilities of all sorts of neonatal and infant operations are provided here. Department provides all types of immunization. Nebulization therapy for bronchitis and bronchial asthma and humidifier for acute bronchitis is also available.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterTop/>
        </>
    )
}

export default Pediatrics