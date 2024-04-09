import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Services from "./components/Services";
import ReadMore1 from "./components/ReadMore1";
import ReadMore2 from "./components/ReadMore2";
import ReadMore3 from "./components/ReadMore3";
import ReadMore4 from "./components/ReadMore4";
import ReadMore5 from "./components/ReadMore5";
import ReadMore6 from "./components/ReadMore6";
import ReadMore7 from "./components/ReadMore7";
import ReadMore8 from "./components/ReadMore8";



import About from "./components/About";
import ContactUs from "./components/ContactUs";
import BookAppointment from "./components/BookAppointment";

import Footer from "./components/Footer";
import Feature from "./components/Feature";
import Team from "./components/Team";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import Whychoose from "./components/Whychoose";
import TestimonialCarousel from "./components/Testimonial";
import DentalCare from "./components/pages/DentalCare";
import Gynecology from "./components/pages/Gynecology";
import Orthopedics from "./components/pages/Orthopedics";
import Pathology from "./components/pages/Pathology";
import Pediatrics from "./components/pages/Pediatrics";
import FindDoctor from "./components/pages/FindDoctor";
import HealthCheckup from "./components/HealthCheckup";
import GeneralPhysician from "./components/pages/GeneralPhysician";
import GeneralSurgeon from "./components/pages/GeneralSurgeon";
import Anesthesiologist from "./components/pages/Anesthesiologist";
import Physiotherapist from "./components/pages/Physiotherapist";


function App() {
  return (
    <>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/whychoose" element={<Whychoose/>} />
          <Route path="/readmore" element={<ReadMore1 />} />
          <Route path="/readmore2" element={<ReadMore2 />} />
          <Route path="/readmore3" element={<ReadMore3 />} />
          <Route path="/readmore4" element={<ReadMore4 />} />
          <Route path="/readmore5" element={<ReadMore5 />} />
          <Route path="/readmore6" element={<ReadMore6 />} />
          <Route path="/readmore7" element={<ReadMore7 />} />
          <Route path="/readmore8" element={<ReadMore8 />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/bookappointment" element={<BookAppointment />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonial" element={<TestimonialCarousel />} />
          <Route path="/dental" element={<DentalCare />} />
          <Route path="/gynecology" element={<Gynecology />} />
          <Route path="/orthopedics" element={<Orthopedics />} />
          <Route path="/pathology" element={<Pathology />} />
          <Route path="/pediatrics" element={<Pediatrics />} />
          <Route path="/gen-phy" element={<GeneralPhysician />} />
          <Route path="/gen-surgeon" element={<GeneralSurgeon />} />
          <Route path="/anesthesiologist" element={<Anesthesiologist />} />
          <Route path="/physiotherapist" element={<Physiotherapist />} />

          <Route path="/find-doc" element={<FindDoctor />} />
          <Route path="/health-check" element={<HealthCheckup />} />


          
          {/*<Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
