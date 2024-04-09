import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../../assets/findDoctor.jpg"

const FindDoctor = () => {
    return (
        <>
            <div className="container-fluid about bg-light mt-4 pt-4 py-5">
                <div className="container mt-4 pt-4 py-5">
                    <h2 class=" display-4 navbar-brand text-dark " href="#">150+ Doctors at Saini Hospital</h2>

                    <form class="d-flex justify-content-end">
                        <input class="form-control me-2 w-25" type="search" placeholder="Search By Doctor" aria-label="Search" />
                        <button class="btn btn-color text-light" type="submit">Search</button>
                    </form>
                    <div className="row g-5 align-items-start mt-2">
                        <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
                            <div className="about-img pb-5 ps-5">
                                <img src={img1} className="img-fluid rounded w-100" style={{ objectFit: "cover" }} alt="xx" />
                                <div className="about-img-inner">
                                </div>
                                <div className="about-experience">15 years experience</div>
                            </div>
                        </div>
                        <div className="col-lg-7 wow fadeInRight cards-container" data-wow-delay="0.4s">
                            <div class="cards">
                                <img src="..." class="cards-img-top" alt="..." />
                                <div class="cards-body">
                                    <h5 class="cards-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Cras justo odio</li>
                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                    <li class="list-group-item">Vestibulum at eros</li>

                                </ul>
                                <div class="cards-body">
                                    <Link to="#" class="cards-link">View Profile</Link>
                                    <Link to="#" class="btn btn-color text-light cards-link m-2 p-2">Book An Appointment</Link>
                                </div>
                            </div>
                            <div class="cards">
                                <img src="..." class="cards-img-top" alt="..." />
                                <div class="cards-body">
                                    <h5 class="cards-title">Card title</h5>
                                    <p class="cards-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Cras justo odio</li>
                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                    <li class="list-group-item">Vestibulum at eros</li>

                                </ul>
                                <div class="cards-body">
                                    <Link to="#" class="cards-link">View Profile</Link>
                                    <Link to="#" class="btn btn-color text-light card-link m-2 p-2">Book An Appointment</Link>
                                </div>
                            </div>
                            <div class="cards">
                                <img src="..." class="cards-img-top" alt="..." />
                                <div class="cards-body">
                                    <h5 class="cards-title">Card title</h5>
                                    <p class="cards-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Cras justo odio</li>
                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                    <li class="list-group-item">Vestibulum at eros</li>

                                </ul>
                                <div class="cards-body">
                                    <Link to="#" class="card-link">View Profile</Link>
                                    <Link to="#" class="btn btn-color text-light card-link m-2 p-2">Book An Appointment</Link>
                                </div>
                            </div>
                            <div class="cards">
                                <img src="..." class="cards-img-top" alt="..." />
                                <div class="cards-body">
                                    <h5 class="cards-title">Card title</h5>
                                    <p class="cards-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Cras justo odio</li>
                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                    <li class="list-group-item">Vestibulum at eros</li>

                                </ul>
                                <div class="cards-body">
                                    <Link to="#" class="cards-link">View Profile</Link>
                                    <Link to="#" class="btn btn-color text-light card-link m-2 p-2">Book An Appointment</Link>
                                </div>
                            </div>
                            <div class="cards">
                                <img src="..." class="cards-img-top" alt="..." />
                                <div class="cards-body">
                                    <h5 class="cards-title">Card title</h5>
                                    <p class="cards-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Cras justo odio</li>
                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                    <li class="list-group-item">Vestibulum at eros</li>

                                </ul>
                                <div class="cards-body">
                                    <Link to="#" class="card-link">View Profile</Link>
                                    <Link to="#" class="btn btn-color text-light card-link m-2 p-2">Book An Appointment</Link>
                                </div>
                            </div>
                            <div class="cards">
                                <img src="..." class="cards-img-top" alt="..." />
                                <div class="cards-body">
                                    <h5 class="cards-title">Card title</h5>
                                    <p class="cards-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Cras justo odio</li>
                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                    <li class="list-group-item">Vestibulum at eros</li>

                                </ul>
                                <div class="carda-body">
                                    <Link to="#" class="cards-link">View Profile</Link>
                                    <Link to="#" class="btn btn-color text-light card-link m-2 p-2">Book An Appointment</Link>
                                </div>
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

export default FindDoctor
