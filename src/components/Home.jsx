import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white">Feels the Fresh Business
                                Perspective</h1>
                            <p className="lead text-center fs-4 mb-5 text-white">Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Aliquam
                                sapiente doloremque sunt aspernatur quis.
                                Dolor, alias. Ad animi doloribus voluptatum!
                            </p>
                            <div className="button d-flex justify-content-center">
                                <NavLink to="/contact" className="btn btn-light me-4 rounded-pill px-4 py-2">Get Quote</NavLink>
                                <NavLink to="/service" className="btn btn-outline-light rounded-pill px-4 py-2">Our Services</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;