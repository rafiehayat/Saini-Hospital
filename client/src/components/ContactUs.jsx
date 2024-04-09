import { useState } from "react";
import { React, Link } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/api/create-contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setFormData({
            fullName: "",
            gender: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
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
      <div className="container-fluid contact py-5 mt-4 pt-4">
        <div className="container py-5 mt-4 pt-4">
          <div
            className="section-title mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="sub-style mb-4">
              <h4 className="sub-title text-white px-3 mb-0 mt-4 pt-4">
                Contact Us
              </h4>
            </div>
          </div>
          <div className="row g-4 align-items-center">
            <div
              className="col-lg-5 col-xl-5 contact-form wow fadeInLeft"
              data-wow-delay="0.1s"
            >
              <h2 className="display-5 text-light mb-2">Enquiry Form</h2>
              <p className="mb-4 text-light">
                If you have any medical, or hospital process related query,
                reach out to us and don't hesitate to ask. We are here to
                provide you transparent, seamless, and informative care Please
                fill in the required details and our team will get in touch with
                you.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-transparent border border-dark"
                        id="name"
                        name="fullName"
                        onChange={handleChange}
                        value={formData.fullName}
                        placeholder="Your Name"
                      />
                      <label for="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <select
                        onChange={handleChange}
                        name="gender"
                        value={formData.gender}
                        className="form-control bg-transparent border border-dark"
                        aria-label="Default select example"
                      >
                        <option selected> Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control bg-transparent border border-dark"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                      />
                      <label for="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="phone"
                        className="form-control bg-transparent border border-dark"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                      />
                      <label for="phone">Your Phone</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-transparent border border-dark"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                      />
                      <label for="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control bg-transparent border border-dark"
                        name="message"
                        onChange={handleChange}
                        value={formData.message}
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "160px" }}
                      ></textarea>
                      <label for="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-light text-primary w-100 py-3"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="col-lg-2 col-xl-2 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="bg-transparent rounded">
                <div className="d-flex flex-column align-items-center text-center mb-4">
                  <div
                    className="bg-white d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "50px",
                    }}
                  >
                    <i className="fa fa-map-marker-alt fa-2x text-primary"></i>
                  </div>
                  <h4 className="text-dark">Addresses</h4>
                  <p className="mb-0 text-white">
                    Jalpura, Greater Noida, Uttar Pradesh
                  </p>
                </div>
                <div className="d-flex flex-column align-items-center text-center mb-4">
                  <div
                    className="bg-white d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "50px",
                    }}
                  >
                    <i className="fa fa-phone-alt fa-2x text-primary"></i>
                  </div>
                  <h4 className="text-dark">Mobile</h4>
                  <p className="mb-0 text-white">+91 9312278831</p>
                </div>

                <div className="d-flex flex-column align-items-center text-center">
                  <div
                    className="bg-white d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "50px",
                    }}
                  >
                    <i className="fa fa-envelope-open fa-2x text-primary"></i>
                  </div>
                  <h4 className="text-dark">Email</h4>
                  <p className="mb-0 text-white">info@sainihospitals.com</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-xl-5 wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <div className="d-flex justify-content-center mb-4">
                <Link
                  className="btn btn-lg-square btn-light rounded-circle mx-2"
                  to="/"
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link
                  className="btn btn-lg-square btn-light rounded-circle mx-2"
                  to="/"
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  className="btn btn-lg-square btn-light rounded-circle mx-2"
                  to="/"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link
                  className="btn btn-lg-square btn-light rounded-circle mx-2"
                  to="/"
                >
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
              <div className="rounded h-100">
                <iframe
                title="Description"
                  className="rounded w-100"
                  style={{ height: "500px" }}
                  src="https://maps.google.com/maps?q=Village%20Jalpura,%20Sector%201,%20Bisrakh%20Road,%20Jalpura,%20Greater%20Noida%20-%20201306&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
