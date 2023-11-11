import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CreateDocument = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const savedData = {
      name: data.name,
      category: data.category,
      weekly_coast: data.weekly_coast,
      total_employee: data.total_employee,
      details: data.details,
      revenue: data.revenue,
    };
    fetch("http://localhost:3000/api/data", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(savedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="md:flex gap-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                {...register("name", { required: true })}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <select
                {...register("category", { required: true })}
                className="select mt-8 border w-full max-w-xs"
              >
                <option>grouth-marketing</option>
                <option>digital-marketing</option>
                <option>product-marketing</option>
                <option>paid-marketing</option>
                <option>organic-marketing</option>
              </select>
            </div>
          </div>
          <div className="md:flex gap-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Weekly Coast</span>
              </label>
              <input
                type="number"
                placeholder="name"
                {...register("weekly_coast", { required: true })}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Total Employee</span>
              </label>
              <input
                type="number"
                placeholder="category"
                {...register("total_employee", { required: true })}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="md:flex gap-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                placeholder="name"
                {...register("details")}
                className="input input-bordered"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Revenue</span>
              </label>
              <input
                type="number"
                placeholder="category"
                {...register("revenue", { required: true })}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Add Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDocument;
