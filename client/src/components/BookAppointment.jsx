import { useState } from "react";
import { React } from "react-router-dom";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    callTime: "",
    gender: "",
    date: "",
    department: "",
    comments: "",
  });

  const changeHandler = (event) => {
    setFormData((prevformData) => {
      return {
        ...prevformData,
        [event.target.name]: event.target.value,
      };
    });
  };
  console.log(formData);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/api/book-appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form submitted successfully");
          setFormData({
            fullName: "",
            email: "",
            mobile: "",
            callTime: "",
            gender: "",
            date: "",
            department: "",
            comments: "",
          });
        } else {
          console.error("Form submission failed:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <div className="container-fluid appointment mt-4 pt-4 py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2">
              <div className="section-title text-start">
                <h4 className="display-5 sub-title pe-3 mb-0 text-light">
                  Doctor's Appointment
                </h4>
                <h6 className="display-6 mb-4">
                  Now get expert medical care in the comfort of your home with
                  Saini Hospital services.
                </h6>
                <p className="mb-4 text-light">
                  Preventive health checkups can provide you with an early
                  diagnosis of medical conditions, giving your treatment a
                  headstart.
                </p>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
              <div className="appointment-form rounded p-5">
                <p className="fs-4 text-uppercase text-dark">Get In Touch</p>
                <h1 className="display-5 mb-4">Get Appointment</h1>
                <form onSubmit={handleSubmit}>
                  <div className="row gy-3 gx-4">
                    <div className="col-xl-6">
                      <input
                        type="text"
                        className="form-control py-3 border-primary bg-transparent text-dark"
                        name="fullName"
                        onChange={changeHandler}
                        value={formData.fullName}
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="email"
                        className="form-control py-3 border-primary bg-transparent text-white"
                        name="email"
                        onChange={changeHandler}
                        value={formData.email}
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="number"
                        className="form-control py-3 border-primary bg-transparent"
                        name="mobile"
                        onChange={changeHandler}
                        value={formData.mobile}
                        placeholder="Enter Mobile No."
                      />
                    </div>
                    <div className="col-xl-6">
                      <select
                        name="callTime"
                        onChange={changeHandler}
                        value={formData.callTime}
                        className="form-select py-3 border-primary bg-transparent"
                        aria-label="Default select example"
                      >
                        <option selected>Preferred Time To Call</option>
                        <option>08:00 AM - 09: 00 AM</option>
                        <option>09:00 AM - 10: 00 AM</option>
                        <option>10:00 AM - 11: 00 AM</option>
                        <option>11:00 AM - 12: 00 PM</option>
                        <option>01:00 PM - 02: 00 PM</option>
                        <option>02:00 PM - 03: 00 PM</option>
                        <option>03:00 PM - 04: 00 PM</option>
                        <option>04:00 PM - 05: 00 PM</option>
                        <option>05:00 PM - 06: 00 PM</option>
                        <option>06:00 PM - 07: 00 PM</option>
                        <option>07:00 PM - 08: 00 PM</option>
                        <option>08:00 PM - 09: 00 PM</option>
                        <option>09:00 PM - 10: 00 PM</option>
                        <option>10:00 PM - 11: 00 PM</option>
                      </select>
                    </div>
                    <div className="col-xl-6">
                      <select
                        name="gender"
                        onChange={changeHandler}
                        value={formData.gender}
                        className="form-select py-3 border-primary bg-transparent"
                        aria-label="Default select example"
                      >
                        <option selected>Your Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                      </select>
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="date"
                        name="date"
                        onChange={changeHandler}
                        value={formData.date}
                        className="form-control py-3 border-primary bg-transparent"
                      />
                    </div>
                    <div className="col-12">
                      <select
                        name="department"
                        onChange={changeHandler}
                        value={formData.department}
                        className="form-select py-3 border-primary bg-transparent"
                        aria-label="Default select example"
                      >
                        <option selected>Department</option>
                        <option>PEDIATRICS & NEONATOLOGY</option>
                        <option>PEDIATRIC & NEONATOLOGY SURGERY</option>
                        <option>NEURO SURGERY</option>
                        <option>LAPAROSCOPY & VASCULAR SURGERY</option>
                        <option>PLASTIC SURGERY</option>
                        <option>ORTHOPEDICS</option>
                        <option>GYNECOLOGY</option>
                        <option>ENT</option>
                        <option>MEDICINE,RESPIRATORY & PULMONARY</option>
                        <option>OPHTHALMOLOGY</option>
                        <option>RADIOLOGY</option>
                        <option>PATHOLOGY</option>
                        <option>DERMATOLOGY & COSMETOLOGY</option>
                        <option>DENTAL CARE</option>

                      </select>
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control border-primary bg-transparent text-white"
                        name="comments"
                        onChange={changeHandler}
                        value={formData.comments}
                        id="area-text"
                        cols="30"
                        rows="5"
                        placeholder="Write Comments"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-color text-white w-100 py-3 px-5"
                      >
                        SUBMIT NOW
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
