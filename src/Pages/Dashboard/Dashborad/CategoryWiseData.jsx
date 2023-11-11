import React from "react";
import SingleData from "./SingleData";

const CategoryWiseData = ({ items }) => {
  //   console.log(items);
  return (
    <div>
      <h1>Category wise Data</h1>
      <div>
        {items.map((item) => (
          <SingleData key={item._id} item={item}></SingleData>
        ))}
      </div>
    </div>
  );
};

export default CategoryWiseData;
