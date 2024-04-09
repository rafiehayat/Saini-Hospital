import { React, Link } from "react-router-dom";
import FooterTop from "../FooterTop";

const Orthopedics = () => {
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
                                <h1 className="display-3 mt-4 pt-4 mb-4">OrthoPedics</h1>
                                <p>This department provides all facilities for the treatment of a fracture with plaster and surgery (Knee, Spine, Joint & Hip Replacement Surgery) including the latest technique limb deformity whether congenital or acquired due to polio, Trauma, Cancer, Leprosy, Tuberculosis. The addition of ‘C’ arm image intensifier has made fracture reduction and nailing more accurate. Surgeries we performed are joint replacement, Complex primary knee and hip replacement, Complex revision joint replacement, Bone banking and allograft reconstructions, Unicondylar knee replacement, Newer bearing for young arthritis patients, Minimally Invasive Spinal</p>
                                <p>joint replacement, Bone banking and allograft reconstructions, Unicondylar knee replacement, Newer bearing for young arthritis patients, Minimally Invasive Spinal Procedures : Transforaminal endoscopic discectomies, selective nerve root, Blocks, Microscopic Spinal decompression, instrumentation and stabilization procedures, Percutaneous Endoscopic Cervical Discenctomy, Percutaneous Vertebroplasty and Kyphoplasty, Spinal Deformity Correction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterTop/>
        </>
    )
}

export default Orthopedics