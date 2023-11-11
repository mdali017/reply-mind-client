import React from "react";
import { useParams } from "react-router-dom";
import useAllData from "../../../hooks/useAllData";

const UpdateDocument = () => {
  const { allData } = useAllData();
  const { id } = useParams();

  //   const selectedData = allData.filter((item) => item._id === id);
  console.log(3, allData);
  //   console.log(id);
  return (
    <div>
      <h1>Update Document</h1>
    </div>
  );
};

export default UpdateDocument;
