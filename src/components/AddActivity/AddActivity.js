import React from 'react';
import { useForm } from "react-hook-form";

const AddActivity = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="container marginTop w-50 pt-3">
            <h1>Add new events</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                <input
                    type="number"
                    {...register("id", { required: true })}
                    className="form-control w-75 mx-auto"
                    placeholder="Id"
                />
                <input
                    {...register("title", { required: true })}
                    className="form-control w-75 mx-auto my-4"
                    placeholder="Title"
                />
                <input
                    type="url"
                    {...register("img", { required: true })}
                    className="form-control w-75 mx-auto"
                    placeholder="Image url"
                />
                <input type="submit" value="Add" className="btn btn-primary w-75 mt-4" />
            </form>
        </div>
    );
};

export default AddActivity;