import React, { useState, useEffect } from 'react';
import testimonial1 from '../assets/testimonial1.jpg';
import testimonial2 from '../assets/testimonial2.jpg';
import testimonial3 from '../assets/testimonial3.jpg';
import testimonial4 from '../assets/testimonial4.jpg';

const testimonialsData = [
    {
        id: 1,
        name: 'Anjali Sharma',
        image: testimonial1,
        rating: 4,
        text: 'Very nice hospital with nice doctors and staff…'
    },
    {
        id: 2,
        name: 'Santosh Sharma',
        image: testimonial2,
        rating: 5,
        text: 'A wonderful structure but poor management fount. No list of rules were listed any where all the lift mens were rude. Different people were treated differently. Reception desk could be improved. The team of doctor is supportive and kind.'
    },
    {
        id: 3,
        name: 'Anand Yadav',
        image: testimonial3,
        rating: 4,
        text: 'One of the great hospital of gestrological problems, biggest team of experienced doctors and highly cleanliness and valet parking'
    },
    {
        id: 4,
        name: 'Meena Tiwari',
        image: testimonial4,
        rating: 3,
        text: 'A multi-speciality hospital. Expert doctors and cooperative staff. Equipped with modern facilities and updated technology. Best for rich and upper middle class people.'
    },
];

const TestimonialCarousel = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const handleIndicatorClick = (index) => {
        setCurrentTestimonial(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prevIndex) =>
                prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="container-fluid testimonial py-5 wow zoomInDown" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title mb-5">
                        <div className="sub-style">
                            <h4 className="sub-title text-white px-3 mb-0">Testimonial</h4>
                        </div>
                        <h1 className="display-3 mb-4 text-light">What Clients are Say</h1>
                    </div>
                    <div className="testimonial-carousel">
                        {testimonialsData.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`testimonial-slide ${index === currentTestimonial ? 'active' : ''
                                    }`}
                            >
                                <div className="testimonial-content">
                                    <div className="testimonial-info">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="testimonial-image"
                                        />
                                        <p className="testimonial-name text-light">{testimonial.name}</p>
                                    </div>
                                    <div className="testimonial-text text-light">
                                        <p>{testimonial.text}</p>
                                        <div className="rating">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <span key={i} className="star">&#9733;</span>
                                            ))}
                                            {[...Array(5 - testimonial.rating)].map((_, i) => (
                                                <span key={i} className="star">&#9734;</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="carousel-indicators">
                            {testimonialsData.map((_, index) => (
                                <div
                                    key={index}
                                    className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                                    onClick={() => handleIndicatorClick(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default TestimonialCarousel;