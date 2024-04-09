import { React } from "react-router-dom";

const Whychoose = () => {
    return (
        <>
            <div className="container-fluid service py-5  bgcolors">
                <div className="container py-5">

                    <div class="row align-items-center justify-content-around ">

                        <div class="col-lg-7 ">
                            <div class="about-text">
                                <h3 class="text-light">Why Choose Saini Hospital?</h3>
                                <p class='text-light p-2'>Established by Dr saini  in 1983, Saini Hospital Healthcare has a robust presence across the healthcare ecosystem.
                                    From routine wellness & preventive health care to innovative life-saving treatments and diagnostic services,
                                    Saini Hospital Hospitals has touched more than 200 million lives from over 120 countries.
                                </p>

                                <div class="row g-xl-5 g-2 pt-lg-4 pt-2 pb-3 pb-lg-0">

                                    <div class="col-md-6">
                                        <div class="d-flex gap-3">
                                            <div class="vr"></div>
                                            <div class="d-flex gap-4 py-2 pt-3 why_point">
                                                <div class="flex-shrink-0">
                                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/healinghands.svg"
                                                        alt="" class="point_icon" />
                                                </div>
                                                <div class="flex-grow-1 why_ah_points">
                                                    <h4><span class="counter-holder">73</span>+</h4>
                                                    <div className="text-light">Largest private healthcare network of Hospitals</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="d-flex gap-3">
                                            <div class="vr"></div>
                                            <div class="d-flex gap-4 py-2 pt-3 why_point">
                                                <div class="flex-shrink-0">
                                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/pharmacies.svg"
                                                        alt="" class="point_icon" />
                                                </div>
                                                <div class="flex-grow-1 why_ah_points">
                                                    <h4><span class="counter-holder">400</span>+</h4>
                                                    <div className="text-light">Largest private network of clinics across India</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="d-flex gap-3">
                                            <div class="vr"></div>
                                            <div class="d-flex gap-4 py-2 pt-3 why_point">
                                                <div class="flex-shrink-0">
                                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/pharmacies.svg"
                                                        alt="" class="point_icon" />
                                                </div>
                                                <div class="flex-grow-1 why_ah_points">
                                                    <h4><span class="counter-holder">10,000</span>+</h4>
                                                    <div className="text-light">Pin codes Served across India</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="d-flex gap-3">
                                            <div class="vr"></div>
                                            <div class="d-flex gap-4 py-2 pt-3 why_point">
                                                <div class="flex-shrink-0">
                                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/pharmacies.svg"
                                                        alt="" class="point_icon" />
                                                </div>
                                                <div class="flex-grow-1 why_ah_points">
                                                    <h4><span class="counter-holder">11,000</span>+</h4>
                                                    <div className="text-light">Doctors</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div class="col-lg-5">

                            <div class="card border-0 who-card">
                                <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/whychoseapollo_ah.webp"
                                    class="card-img " alt="..." />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whychoose