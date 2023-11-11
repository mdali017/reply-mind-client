import React, { useState } from "react";
import useAllData from "../../../hooks/useAllData";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const PaidMarketing = () => {
  const [allData] = useAllData();
  const [item, setItem] = useState({});
  const paidMarketing = allData.filter(
    (items) => items.category === "paid-marketing"
  );

  // handle delete
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:3000/api/data/654ef0d11e2b3be61c54e6fa", {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div>
        <div className="p-5">
          <div className="flex justify-between mb-5">
            <h1>Digital Marketing</h1>
            <Link
              to="/dashboard/add-document"
              className="btn btn-outline btn-secondary"
            >
              Add
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Total Employee</th>
                  <th>Weekly Coast</th>
                  <th>Revenue</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {paidMarketing.map((item, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.total_employee}</td>
                    <td>${item.weekly_coast}</td>
                    <td>${item.revenue}</td>
                    <td>
                      <Link
                        to={`/dashboard/update/${item._id}`}
                        className="btn"
                      >
                        <FaEdit />
                      </Link>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(item)}>
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaidMarketing;
