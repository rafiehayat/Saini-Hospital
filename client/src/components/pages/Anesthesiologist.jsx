import React from 'react'
import FooterTop from '../FooterTop'

const Anesthesiologist = () => {
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
                                <h1 className="display-3 mt-4 pt-4 mb-4">Anesthesiologist</h1>
                                <p>Anesthesiologist Department at NIMMS Hospital is one of the best department functioning based on best clinical practices with complete hematological services – Clinical Hematology, Histopathology, Biochemistry, Serology, Microbiology under one roof. Pathology is branch of clinical medicine which deals with diagnosis and treatment of blood & blood diseases.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterTop/>
    </>
  )
}

export default Anesthesiologist
