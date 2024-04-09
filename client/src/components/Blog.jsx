import { React ,Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
         {/* <!-- Blog Start --> */}
        <div className="container-fluid blog mt-4 pt-4 py-2">
            <div className="container mt-4 pt-4 py-5">
                <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="sub-style">
                        <h4 className="sub-title mt-4 pt-4 px-3 mb-0">Our Blog</h4>
                    </div>
                    <h1 className="display-3 mb-2">Latest Blog</h1>
                    <p className="mb-0">Our doctors pen down their research findings and experiences from time to time. Their words provide deep insight into the latest techniques, technologies and other advancements in healthcare. It provides expert answers to all kinds of health questions for real-life issues.</p> 
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="blog-item rounded">
                            <div className="blog-img">
                                <img src="img/cancer-jumb.jpg" className="img-fluid w-100" alt="" />
                            </div>
                            <div className="blog-centent p-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <p className="mb-0 text-light"><i className="fa fa-calendar-alt text-light"></i> 01 Jan 2023</p>
                                    <Link to="#" className="text-light"><span className="fa fa-comments text-light"></span> 3 Comments</Link>
                                </div>
                                <Link to="#" className="h5 text-light truncate">Cancer Prevention Lifestyle Changes That Can Reduce Your Risks</Link>
                                <p className="text-dark truncate">Cancer, a formidable adversary affecting millions globally, often prompts individuals to seek proactive measures to reduce their risk. While not all cancers are preventable, embracing a healthy lifestyle can significantly lower the risk of developing various types of cancer.</p>
                                <Link to="#" className="btn btn-color rounded-pill text-white px-4 mb-1">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="blog-item rounded">
                            <div className="blog-img">
                                <img src="img/ear-problems.jpg" className="img-fluid w-100" alt="" />
                            </div>
                            <div className="blog-centent p-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <p className="mb-0 text-light"><i className="fa fa-calendar-alt text-primary"></i> 08 May 2023</p>
                                    <Link to="#" className="text-light"><span className="fa fa-comments text-primary"></span> 5 Comments</Link>
                                </div>
                                <Link to="#" className="h5 text-light truncate">Common Ear Problems Causes Symptoms, and Treatment Options</Link>
                                <p className=" text-dark truncate">The human ear is a complex and delicate organ responsible for hearing and maintaining balance. Unfortunately, various factors can lead to common ear problems, affecting individuals of all ages. Understanding the causes, recognizing the symptoms, and knowing the treatment options can help in managing these conditions effectively.</p>
                                <Link to="#" className="btn btn-color rounded-pill text-white px-4 mb-1">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="blog-item rounded">
                            <div className="blog-img">
                                <img src="img/understanding.jpg" className="img-fluid w-100" alt="" />
                            </div>
                            <div className="blog-centent p-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <p className="mb-0 text-light"><i className="fa fa-calendar-alt text-primary"></i> 11 August 2023</p>
                                    <Link to="#" className="text-light"><span className="fa fa-comments text-primary"></span> 2 Comments</Link>
                                </div>
                                <Link to="#" className="h5 text-light truncate">Understanding the Basics of Bone Marrow Transplant What You Need to Know</Link>
                                <p className=" text-dark truncate">A bone marrow transplant (BMT) is a medical procedure that involves the transplantation of blood-forming stem cells to replace damaged or diseased bone marrow. This intricate procedure serves as a crucial treatment for various haematological disorders, including leukemia, lymphoma, and certain genetic conditions.</p>
                                <Link to="#" className="btn btn-color rounded-pill text-white px-4 mb-1">Read More</Link>
                            </div>
                        </div>
                    </div>

                    {/* extra */}
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="blog-item rounded">
                            <div className="blog-img">
                                <img src="img/cancer-jumb.jpg" className="img-fluid w-100" alt="" />
                            </div>
                            <div className="blog-centent p-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <p className="mb-0 text-light"><i className="fa fa-calendar-alt text-light"></i> 01 Jan 2023</p>
                                    <Link to="#" className="text-light"><span className="fa fa-comments text-light"></span> 3 Comments</Link>
                                </div>
                                <Link to="#" className="h5 text-light truncate">Cancer Prevention Lifestyle Changes That Can Reduce Your Risks</Link>
                                <p className=" text-dark truncate">Cancer, a formidable adversary affecting millions globally, often prompts individuals to seek proactive measures to reduce their risk. While not all cancers are preventable, embracing a healthy lifestyle can significantly lower the risk of developing various types of cancer.</p>
                                <Link to="#" className="btn btn-color rounded-pill text-white px-4 mb-1">Read More</Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="blog-item rounded">
                            <div className="blog-img">
                                <img src="img/cancer-jumb.jpg" className="img-fluid w-100" alt="" />
                            </div>
                            <div className="blog-centent p-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <p className="mb-0 text-light"><i className="fa fa-calendar-alt text-light"></i> 01 Jan 2023</p>
                                    <Link to="#" className="text-light"><span className="fa fa-comments text-light"></span> 3 Comments</Link>
                                </div>
                                <Link to="#" className="h5 text-light truncate">Cancer Prevention Lifestyle Changes That Can Reduce Your Risks</Link>
                                <p className="my-4 text-light truncate">Cancer, a formidable adversary affecting millions globally, often prompts individuals to seek proactive measures to reduce their risk. While not all cancers are preventable, embracing a healthy lifestyle can significantly lower the risk of developing various types of cancer.</p>
                                <Link to="#" className="btn btn-color rounded-pill text-white px-4 mb-1">Read More</Link>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="blog-item rounded">
                            <div className="blog-img">
                                <img src="img/cancer-jumb.jpg" className="img-fluid w-100" alt="" />
                            </div>
                            <div className="blog-centent p-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <p className="mb-0 text-light"><i className="fa fa-calendar-alt text-light"></i> 01 Jan 2023</p>
                                    <Link to="#" className="text-light"><span className="fa fa-comments text-light"></span> 3 Comments</Link>
                                </div>
                                <Link to="#" className="h5 text-light truncate">Cancer Prevention Lifestyle Changes That Can Reduce Your Risks</Link>
                                <p className="my-4 text-light truncate">Cancer, a formidable adversary affecting millions globally, often prompts individuals to seek proactive measures to reduce their risk. While not all cancers are preventable, embracing a healthy lifestyle can significantly lower the risk of developing various types of cancer.</p>
                                <Link to="#" className="btn btn-color rounded-pill text-white px-4 mb-1">Read More</Link>
                            </div>
                        </div>
                    </div> */}
                    {/* extraend */}
                </div>
            </div>
        </div>
        {/* <!-- Blog End --> */}
    </div>
  )
}

export default Blog