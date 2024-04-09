import { React, Link } from "react-router-dom";

const About = () => {
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
                                <h1 className="display-3 mt-4 pt-4 mb-4">About Us</h1>
                                <p>Saini Hospital is a 150-bedded multispeciality hospital based in the Greater Noida of UP in India. the Hospital offers comprehensive, advanced surgical care in specialities such as Cancer, Heart, Blood and Marrow Transplant, Kidney & Liver Transplant, Bone & Joint and Neurosciences.</p>
                                <p>A commitment to providing the best healthcare services and patient experiences are at the core of the hospital's mission. With a team of experienced medical experts, state-of-the-art facilities and world-class infrastructure, the hospital has made a mark for itself not only amongst the domestic patients, but also the international patients coming to India for best medical care.</p>
                                <p>The Hospital follows stringent international practices and believes patient centricity is the cornerstone for providing high-quality care. Riding on years of experience that each surgeon brings to the table and backed by cutting-edge technologies at par with the best in the world, Saini Hospital is today, reckoned amongst the most well-respected healthcare providers of the country</p>
                                <Link to="/" className="btn btn-color rounded-pill text-white py-3 px-5">Discover More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12 container-fluid bg-dark d-lg-block mt-2 mb-2" style={{ height: "100px" }}>
                <div className="banner-text d-flex align-items-center justify-content-center h-100">
                    <p className="text-light mb-0">If this is a medical emergency, call 911 or go to the nearest emergency room.</p>
                </div>
            </div>
        </>
    )
}

export default About