import React from "react";
const Header =() => {
    return(
        <>
        <Header>
            <section className="container main-hero-container">
                <div className="row">
                    <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last">
                        <h1 className=" display-2">
                            online Payment made <br/> Easy for you.
                        </h1>
                        <p className="main-hero-para">
                        As discussed in the previous sections of this article, we can understand clearly that useRef is used to create a reference object,
                         while ref is used to access and assign DOM nodes or react components inside the render method to a reference object.
                        </p>
                        <h3>Get early access for you</h3>
                        <div className="input-group mt-3">
                            <input 
                            type="text"
                            className="rounded-pill w-75 w-lg-75me-3p-2 from-control-text"
                            placeholder="Enter your Email"
                            />

                        <div className="input-group-button">
                            get it now
                        </div>
                        </div>
                        <div className="col-12 col-lg-6 header-right-side d-flex Justify-content-center slign-items-center main-herosection-image order-md-first order-sm-first">
                            <img 
                            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FParadise-Garden-Indigo-Flower-Grafted%2Fdp%2FB07RD4XRTZ&psig=AOvVaw09FcDQHAS43wI7mT8EX1YE&ust=1679592720345000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJDXu82I8P0CFQAAAAAdAAAAABAJ"
                            alt="flower image"
                            className="flower image"
                            />
                            <img
                            src="https://www.google.com/url?sa=i&url=http%3A%2F%2Ffree-flower-photos.blogspot.com%2F2012%2F01%2Flight-blue-rose.html&psig=AOvVaw09FcDQHAS43wI7mT8EX1YE&ust=1679592720345000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJDXu82I8P0CFQAAAAAdAAAAABAY"
                            alt="flower image"
                            className=" flower image"
                            />
                                                    
                            </div>
                    </div>
                </div>
            </section>
        </Header>
        </>
    )
}
export default Header