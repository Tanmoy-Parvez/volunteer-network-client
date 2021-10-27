import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png'

const Admin = () => {
    return (
        <div className="container marginTop bg-light">
            <div className="d-flex align-items-center">
                <img src={logo} alt="" width="200px" />
                <h3 className="ms-5">Volunteer Register List</h3>
            </div>
            <div className="row gx-5 mt-5 bg-white pt-3">
                <div className="col-md-4 text-start nav-item">
                    <p className="text-primary"><i className="fas fa-users"></i> Volunteer Register List</p>
                    <Link to="/addForm">
                        <p className="fw-normal"><i className="fas fa-plus"></i> Add Events</p>
                    </Link>
                </div>
                <div className="col-md-8">

                </div>
            </div>
        </div>
    );
};

export default Admin;