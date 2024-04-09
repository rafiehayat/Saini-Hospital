import React from 'react'

const FooterTop = () => {
    return (
        <>
            {/* <div class="container mt-2 pt-2">
                <div class="row">
                    <div class="col-md-6">
                        <form>
                            <div class="mb-1">
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-2">
                                <input type="password" class="form-control" placeholder="password" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-2">
                                <input type="number" class="form-control" placeholder="Phone Number" id="exampleInputPassword1" />
                            </div>
                            <div class="input-group">
                                <textarea class="form-control" aria-label="With textarea" placeholder="Message"></textarea>
                            </div>
                            <button type="submit" class="btn btn-color text-light mt-2">Submit</button>
                        </form>
                    </div>
                </div>
            </div> */}
            <div class="container mt-2 pt-2">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <form>
                <div class="mb-1">
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp" />
                </div>
                <div class="mb-2">
                    <input type="password" class="form-control" placeholder="password" id="exampleInputPassword1" />
                </div>
                <div class="mb-2">
                    <input type="number" class="form-control" placeholder="Phone Number" id="exampleInputPassword1" />
                </div>
                <div class="input-group">
                    <textarea class="form-control" aria-label="With textarea" placeholder="Message"></textarea>
                </div>
                <button type="submit" class="btn btn-color text-light mt-2">Submit</button>
            </form>
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

export default FooterTop
