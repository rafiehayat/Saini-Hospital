import { Link, React } from "react-router-dom";
import Services from './Services'
import Feature from "./Feature";
import Team from "./Team";
import Blog from "./Blog";
import Testimonial from "./Testimonial";
import banner from "../assets/banner.png";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg"
import banner5 from "../assets/Sainibanner.jpg"
import banner6 from "../assets/SainiBanner2.png"


import Whychoose from "./Whychoose";

const Home = () => {
  return (
    <>

      <div>
        <div>
        </div>
        <div className="container-fluid pt-lg-5 my-lg-5">
          <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="w-100" src={banner5} alt="xx" />
              </div>
              <div className="carousel-item ">
                <img className="w-100" src={banner6} alt="xx" />
              </div>
              <div className="carousel-item ">
                <img className="w-100" src={banner1} alt="xx" />
              </div>
              <div className="carousel-item ">
                <img className="w-100" src={banner4} alt="xx" />
              </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-12 container-fluid btn-color d-lg-block" style={{ height: "100px" }}>
        <div className="banner-text d-flex align-items-center justify-content-between">
          <h2 className="text-light pt-2 w-75">Visit Saini MultiSpeciality Hospital Center</h2>
          <Link to="/bookappointment" className="btn btn-primary rounded mt-4">Schedule Now</Link>

        </div>
      </div>
      <Services />
      <div class="col-md-12 mt-4">
        <div class="banner-image">
          <img src={banner} alt="xx" class="img-fluid w-100 pb-2 mb-2" style={{ height: "150px" }} />
        </div>
      </div>
      <Whychoose />
      <Feature />
      <div class="row btn-color " >
        <div class="col-md-6" >
          <div class="banner-text " >
            <h2 className="text-light">Healthcare for seniors on Saini Hospital</h2>
            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et suscipit felis, at gravida turpis. Fusce id eros ullamcorper, convallis nunc a, tempus felis. Integer hendrerit fermentum felis, non consequat justo volutpat vitae.</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="banner-image">
            <img src={banner} alt="Banner" class="img-fluid" style={{ height: "200px" }} />
          </div>
        </div>
      </div>
      <Team />

      <Testimonial />
      <Blog />
      <div className="col-md-12 container-fluid btn-color d-lg-block mt-2 mb-2" style={{ height: "100px" }}>
        <div className="banner-text d-flex align-items-center justify-content-center h-100">
          <p className="text-light mb-0">If this is a medical emergency, call 911 or go to the nearest emergency room.</p>
        </div>
      </div>
    </>
  )
}

export default Home