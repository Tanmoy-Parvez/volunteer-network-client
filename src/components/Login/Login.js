import React from 'react';
import logo from '../../images/logos/Group 1329.png'

const Login = () => {
    return (
        <div className="container mt-5">
            <img src={logo} alt="" className="w-25 mt-5" />
            <div className="w-50 mt-5 border mx-auto shadow-lg" style={{ height: "350px", paddingTop: "90px" }}>
                <h3 className="my-3">Login With</h3>
                <button className="btn btn-outline-dark rounded-pill w-75"> <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" width="25" className="" /> Continue with Google</button>
                <p className="my-3">Don't have an account? <a href="/">Create an account</a> </p>
            </div>
        </div>
    );
};

export default Login;