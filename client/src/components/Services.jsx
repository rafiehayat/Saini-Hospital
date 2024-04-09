// import { React, Link } from "react-router-dom";
// import data from "../assets/data.json"

// const Services = () => {
//     return (
//         <>
//             <div className="container-fluid service  ">
//                 <div className="container mt-4 pt-4">
//                     <div className="section-title mb-2 wow fadeInUp" data-wow-delay="0.2s">
//                         <h4 className="display-6 mb-4 mt-4 pt-4 ">We cover a big variety of medical services</h4>
//                     </div>

//                     <div className="row g-4 justify-content-center">
//                         <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
//                             <Link to="/readmore">

//                                 <div className="service-item rounded">
//                                     <div className="service-img rounded-top">
//                                         <img src="img/service-uro.png" className=" rounded-top w-100" alt="" height="200px" />
//                                     </div>
//                                     <div className="service-content rounded-bottom bg-light p-2">
//                                         <div className="service-content-inner">
//                                             <h5 className="mb-2">URO Surgery</h5>
//                                             <p className="mb-1 truncate text-dark">The Department of Urology at Our Hospital offers advanced urological care at par with international standards. We offer full spectrum of diagnostics and treatment for urology cancers, prostate diseases, laparoscopic urology.</p>
//                                             {/* <Link to="/readmore" className="btn btn-color rounded-pill text-white mb-2 px-2 ">Read More</Link> */}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Link>

//                         </div>



//                         <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
//                             <Link to="/readmore2">
//                                 <div className="service-item rounded">
//                                     <div className="service-img rounded-top">
//                                         <img src="img/service2-laparoscopic.png" className="rounded-top w-100" alt="" height="200px" />
//                                     </div>
//                                     <div className="service-content rounded-bottom bg-light p-2">
//                                         <div className="service-content-inner">
//                                             <h5 className="mb-2">Laparoscopic Urology</h5>
//                                             <p className="mb-1 truncate text-dark">Laparoscopic or &ldquo;minimally invasive&rdquo; surgery is a specialized technique for performing surgery. In the past, this technique was commonly used for gynecologic surgery and for gallbladder surgery.</p>
//                                             {/* <Link to="/readmore2" className="btn btn-color rounded-pill text-white mb-2 px-2 ">Read More</Link> */}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Link>
//                         </div>
//                         <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
//                         <Link to="/readmore3">

//                             <div className="service-item rounded">
//                                 <div className="service-img rounded-top">
//                                     <img src="img/services3-tt.png" className="rounded-top w-100" alt="" height="200px" />
//                                 </div>
//                                 <div className="service-content rounded-bottom bg-light p-2">
//                                     <div className="service-content-inner">
//                                         <h5 className="mb-2">TT Vaccine</h5>
//                                         <p className="mb-1 truncate text-dark">Tetanus, also known as lockjaw, is a potentially life-threatening bacterial infection that attacks your nervous system. Caused by the Clostridium tetani bacterium, it triggers painful and prolonged muscle contractions,...</p>
//                                         {/* <Link to="/readmore3" className="btn btn-color rounded-pill text-white mb-2 px-2 ">Read More</Link> */}
//                                     </div>
//                                 </div>
//                             </div>
//                             </Link>

//                         </div>
//                         <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
//                         <Link to="/readmore4">

//                             <div className="service-item rounded">
//                                 <div className="service-img rounded-top">
//                                     <img src="img/services-typhoid.png" className="rounded-top w-100" alt="" height="200px" />
//                                 </div>
//                                 <div className="service-content rounded-bottom bg-light p-2">
//                                     <div className="service-content-inner">
//                                         <h5 className="mb-2">Typhoid Vaccine</h5>
//                                         <p className="mb-1 truncate text-dark">Typhoid is a highly contagious infection caused by eating food or water contaminated by the bacteria Salmonella enterica serovar Typhi. Typhoid is common in parts of the world that have poor sanitation and limited access to clean water.</p>
//                                         {/* <Link to="/readmore4" className="btn btn-color rounded-pill text-white mb-2 px-2 ">Read More</Link> */}
//                                     </div>
//                                 </div>
//                             </div>
//                             </Link>

//                         </div>

//                         <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp mt-5" data-wow-delay="0.1s">
//                         <Link to="/readmore5">

//                             <div className="service-item rounded">
//                                 <div className="service-img rounded-top">
//                                     <img src="img/services-dpthib.png" className="rounded-top w-100" alt="" height="200px" />
//                                 </div>
//                                 <div className="service-content rounded-bottom bg-light p-2">
//                                     <div className="service-content-inner">
//                                         <h5 className="mb-2">DPT, HIB, POLIO Vaccine </h5>
//                                         <p className="mb-1 truncate text-dark">When a new member is welcomed into the family, it is a special moment for every parent. But the care of this junior one is essential to its health purpose. </p>
//                                         {/* <Link to="/readmore5" className="btn btn-color rounded-pill text-white mb-2 px-2 ">Read More</Link> */}
//                                     </div>
//                                 </div>
//                             </div>
//                             </Link>

//                         </div>
//                         <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp mt-5" data-wow-delay="0.3s">
//                         <Link to="/readmore6">

//                             <div className="service-item rounded">
//                                 <div className="service-img rounded-top">
//                                     <img src="img/services-mmr.png" className="rounded-top w-100" alt="" height="200px" />
//                                 </div>
//                                 <div className="service-content rounded-bottom bg-light p-2">
//                                     <div className="service-content-inner">
//                                         <h5 className="mb-2">MMR Vaccine</h5>
//                                         <p className="mb-1 truncate text-dark">MMR vaccine can prevent measles, mumps, and rubella. Before vaccines, these diseases were very common in the United States, especially among children</p>
//                                         {/* <Link to="/readmore6" className="btn btn-color rounded-pill text-white mb-2 px-2 ">Read More</Link> */}
//                                     </div>
//                                 </div>
//                             </div>
//                             </Link>
//                         </div>
//                         <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp mt-5" data-wow-delay="0.5s">
//                         <Link to="/readmore7">

//                             <div className="service-item rounded">
//                                 <div className="service-img rounded-top">
//                                     <img src="img/services7-pneum.png" className="rounded-top w-100" alt="" height="200px" />
//                                 </div>
//                                 <div className="service-content rounded-bottom bg-light p-2">
//                                     <div className="service-content-inner">
//                                         <h5 className="mb-2">PNEUMOCOCCAL Vaccine</h5>
//                                         <p className="mb-1 truncate text-dark">Pneumococcal disease is any type of infection caused by Streptococcus pneumoniae bacteria. It's a common cause of ear infections, pneumonia and bloodstream infections.</p>
//                                         {/* <Link to="/readmore7" className="btn btn-color rounded-pill text-white mb-2 px-2 ">Read More</Link> */}
//                                     </div>
//                                 </div>
//                             </div>
//                             </Link>

//                         </div>
//                         <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp mt-5" data-wow-delay="0.7s">
//                         <Link to="/readmore8">

//                             <div className="service-item rounded">
//                                 <div className="service-img rounded-top">
//                                     <img src="img/services-hepatities.png" className="rounded-top w-100" alt="" height="200px" />
//                                 </div>
//                                 <div className="service-content rounded-bottom bg-light p-2">
//                                     <div className="service-content-inner">
//                                         <h5 className="mb-2">HEPATITIS A</h5>
//                                         <p className="mb-1 truncate text-dark">Hepatitis A is a highly contagious liver infection caused by the hepatitis A virus.. When symptoms are noticeable, the severity of the disease can range from mild lasting a few weeks to severe lasting several months.</p>
//                                         {/* <Link to="/readmore8" className="btn btn-color rounded-pill text-white mb-2 px-2 ">Read More</Link> */}
//                                     </div>
//                                 </div>
//                             </div>
//                             </Link>

//                         </div>
//                         <div className="col-12 text-center wow fadeInUp mt-3" data-wow-delay="0.2s">
//                             <Link className="btn btn-color rounded-pill text-white py-3 px-5 mb-3" to="#">Services More</Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Services



import { Link } from "react-router-dom";
import data from "../assets/data.json"

const Services = () => {
    return (
        <>
            <div className="container-fluid service  ">
                <div className="container mt-4 pt-4">
                    <div className="section-title mb-2 wow fadeInUp" data-wow-delay="0.2s">
                        <h4 className="display-6 mb-4 mt-4 pt-4 ">We cover a big variety of medical services</h4>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {data.map((service, index) => ( 
                            <div key={index} className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay={`0.${index}s`}>
                                <Link to={`/readmore${index + 1}`}>
                                    <div className="service-item rounded">
                                        <div className="service-img rounded-top">
                                            <img src={service.image} className="rounded-top w-100" alt="" height="200px" />
                                        </div>
                                        <div className="service-content rounded-bottom bg-light p-2">
                                            <div className="service-content-inner">
                                                <h5 className="mb-2">{service.title}</h5>
                                                <p className="mb-1 truncate text-dark">{service.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                        <div className="col-12 text-center wow fadeInUp mt-3" data-wow-delay="0.2s">
                            <Link className="btn btn-color rounded-pill text-white py-3 px-5 mb-3" to="#">Services More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services



// import { useState } from "react";
// import data from "../assets/data.json";

// const Services = () => {
//     const [expandedServiceIndex, setExpandedServiceIndex] = useState(-1);

//     const toggleExpandedService = (index) => {
//         setExpandedServiceIndex(index === expandedServiceIndex ? -1 : index);
//     };

//     return (
//         <>
//             <div className="container-fluid service">
//                 <div className="container mt-4 pt-4">
//                     <div className="section-title mb-2 wow fadeInUp" data-wow-delay="0.2s">
//                         <h4 className="display-6 mb-4 mt-4 pt-4">We cover a big variety of medical services</h4>
//                     </div>

//                     <div className="row g-4 justify-content-center">
//                         {data.map((service, index) => (
//                             <div key={index} className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay={`0.${index}s`}>
//                                 <div className="service-item rounded">
//                                     <div className="service-img rounded-top">
//                                         <img src={service.image} className="rounded-top w-100" alt="" height="200px" />
//                                     </div>
//                                     <div className="service-content rounded-bottom bg-light p-2">
//                                         <div className="service-content-inner">
//                                             <h5 className="mb-2">{service.title}</h5>
//                                             {expandedServiceIndex === index ? (
//                                                 <>
//                                                     <p className="mb-1 text-dark">{service.description}</p>
//                                                     <button className="btn btn-link text-decoration-none" onClick={() => toggleExpandedService(index)}>Read Less</button>
//                                                 </>
//                                             ) : (
//                                                 <>
//                                                     <p className="mb-1 truncate text-dark">{service.description}</p>
//                                                     <button className="btn btn-link text-decoration-none" onClick={() => toggleExpandedService(index)}>Read More</button>
//                                                 </>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Services;
