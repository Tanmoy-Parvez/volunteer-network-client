import React from 'react';
import logo from '../../images/logos/Group 1329.png';
import { useForm } from "react-hook-form";


const RegisterForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="container mt-5">
            <img src={logo} alt="" className="w-25 mt-3" />
            <div className="w-50 mt-3 border rounded-3 mx-auto shadow-lg" style={{ height: "450px", paddingTop: "10px" }}>
                <h3 className="my-3">Register as a Volunteer</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("fullName", { required: true })}
                        className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0"
                        placeholder="Full Name"
                    />
                    <input
                        {...register("email", { required: true })}
                        className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0 my-4"
                        placeholder="Username or email"
                    />
                    <input
                        type="date"
                        {...register("date", { required: true })}
                        className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0"
                        placeholder="Date"
                    />
                    <input
                        {...register("description", { required: true })}
                        className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0 my-4"
                        placeholder="Description"
                    />
                    <input
                        {...register("activity", { required: true })}
                        className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0 mb-2"
                        placeholder="Activity"
                    />

                    <input type="submit" className="btn btn-primary w-75 mt-4" />
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;