import React, { useState } from "react";
import useAllData from "../../../hooks/useAllData";
import { FaBeer, FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const DigitalMarketing = () => {
  const [allData] = useAllData();
  const [item, setItem] = useState({});
  const digitalMarketing = allData.filter(
    (items) => items.category === "digital-marketing"
  );

  // check for data
  // console.log(item, 11);

  // For Update document
  const handleUpdate = (item) => {
    document.getElementById("my_modal_5").showModal();
    // console.log(item);
    setItem(item);
    // return (
    //   <>
    //     <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
    //       <div className="modal-box">
    //         <form className="card-body">
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Name</span>
    //             </label>
    //             <input
    //               type="name"
    //               placeholder="name"
    //               className="input input-bordered"
    //               required
    //             />
    //           </div>
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Category</span>
    //             </label>
    //             <input
    //               type="name"
    //               placeholder="name"
    //               className="input input-bordered"
    //               required
    //             />
    //           </div>

    //           <div className="form-control mt-6">
    //             <button className="btn btn-primary">Update</button>
    //           </div>
    //         </form>
    //       </div>
    //     </dialog>
    //   </>
    // );
  };

  // handle delete
  const handleDelete = (item) => {
    // console.log(item);
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

  // handle updte document
  const handleUpdateDocument = (item2) => {
    console.log(item2, 61);
  };

  const modal = (
    <>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-11/12 max-w-5xl">
          <form className="card-body">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder={item.name}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="name"
                placeholder={item.category}
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <button
                onClick={() => handleUpdateDocument(item)}
                className="btn btn-primary"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );

  // console.log(9, digitalMarketing);
  return (
    <div>
      <h1>Digital Marketing</h1>

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
            {digitalMarketing.map((item, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.total_employee}</td>
                <td>${item.weekly_coast}</td>
                <td>${item.revenue}</td>
                <td>
                  {/* <button onClick={() => handleUpdate(item)}>
                    <FaEdit />
                  </button> */}
                  <button
                    className="btn"
                    onClick={() =>
                      // document.getElementById("my_modal_5").showModal()
                      handleUpdate(item)
                    }
                  >
                    <FaEdit />
                  </button>
                  {modal}
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
  );
};

export default DigitalMarketing;
