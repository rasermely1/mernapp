import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Myai = () => {
    return (
        <div>
            <section id="about">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 shadow">
                            <div className="sidebar"></div>
                        </div>
                        <div className="col-md-10 d-flex flex-column align-items-center text-white justify-content-center" style={{ height: "100vh" }}>
                            <div className="d-flex col-md-4 justify-content-center">
                                <div class="create create:hover btn btn-outline-primary shadow p-5">
                                    <NavLink to="/service" class="card-body text-center">
                                        <div className="text-center">Create AI</div>
                                        <i className="fa fa-plus"></i>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Myai;
